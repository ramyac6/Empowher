import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow";
import { dialogflowConfig } from "../config/dialogflowConfig";

const BOT_USER = {
    _id: 2,
    name: "Atlas",
    avatar:
      "https://melmagazine.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-31-at-5.47.12-PM.png",
  };
  
  class ChatBotScreen extends Component {
    state = {
      messages: [
        {
          _id: 1,
          text: `Hi! I am Atlas 🤖.\n\nWhat would you like to do today?`,
          createdAt: new Date(),
          user: BOT_USER,
        },
      ],
    };
  
    componentDidMount() {
      Dialogflow_V2.setConfiguration(
        dialogflowConfig.client_email,
        dialogflowConfig.private_key,
        Dialogflow_V2.LANG_ENGLISH_US,
        dialogflowConfig.project_id
      );
    }
  
    handleResponse(result) {
      console.log(result);
      let text = result.queryResult.fulfillmentMessages[0].text.text[0];
      let payload = result.queryResult.webhookPayload;
      this.showResponse(text, payload);
    }
  
    showResponse(text, payload) {
      let msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT_USER,
      };
  
      if (payload && payload.is_image) {
        msg.text = text;
        msg.image = payload.url;
      }
  
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [msg]),
      }));
    }
  
    onSend(messages = []) {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }));
  
      let message = messages[0].text;
      Dialogflow_V2.requestQuery(
        message,
        (result) => this.handleResponse(result),
        (error) => console.log(error)
      );
    }
  
    render() {
      return (
        <View style={styles.container}>
          <GiftedChat
            messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
            user={{
              _id: 1,
            }}
            //renderMessageImage={() => this.showImage}
            renderActions={() => (
              <React.Fragment>
                <ImgPicker setmsgImgUrl={this.state.imageURL} />
              </React.Fragment>
            )}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
  export default ChatBotScreen;