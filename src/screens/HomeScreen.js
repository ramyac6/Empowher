import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Colors from "../constants/Colors";
import SplashScreen from "./SplashScreen";
import ChatBotScreen from "./ChatBotScreen";
import SettingsScreen from "./SettingsScreen";


const Tabs = createBottomTabNavigator();

export default function HomeScreen(props, { navigation }) {
  const userID = props.extraData;
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.darkGray,
        inactiveTintColor: Colors.gray,
      }}
    >
      <Tabs.Screen name="Chat Bot" component={ChatBotScreen} />
      <Tabs.Screen name="Settings">
        {(props) => <SettingsScreen {...props} extraData={userID} />}
      </Tabs.Screen>
    </Tabs.Navigator>
    
  );
}