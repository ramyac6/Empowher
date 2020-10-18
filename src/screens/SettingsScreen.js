import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { firebase } from "../config/firebaseConfig";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SettingsScreen(props, { navigation }) {
  const usersRef = firebase.firestore().collection("users");
  const userID = props.extraData.id;
  const [userName, setText] = useState("");

  function signout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log("Signed out");
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  }

  useEffect(() => {
    usersRef
      .doc(userID)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data();
          setText(data["fullName"].toString());
        } else {
          // doc.data() will be undefined in this case
          alert("User doesn't exist!!!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.welcome}>
        <Text style={{ fontSize: 24 }}>Welcome back {userName}!</Text>
      </View>
      <View style={styles.items}>
        <Text style={{ fontSize: 18 }}>Preferences: breakfast, dessert</Text>
      </View>
      <View style={styles.items}>
        <Text style={{ fontSize: 18 }}>Location: Seattle</Text>
      </View>
      <View style={styles.items}>
        <Text style={{ fontSize: 18 }}>Age: 19</Text>
      </View>
      <View style={styles.items}>
        <Text style={{ fontSize: 18 }}>Cooking Style: Experimental</Text>
      </View>
      <TouchableOpacity onPress={signout}>
        <View style={styles.logout}>
          <Text style={{ fontSize: 24 }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: "lightgreen",
    marginBottom: 10,
    alignItems: "center",
    padding: 10,
  },
  items: {
    backgroundColor: Colors.lightGray,
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
    borderColor: Colors.darkGray,
    borderRadius: 2,
  },
  logout: {
    backgroundColor: Colors.primarylight,
    marginBottom: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
});