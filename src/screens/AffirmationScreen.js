  
import React, { useEffect, useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export default function AffirmationScreen() {
    const [affirmMessage, setMessage] = useState(0);

    let messages = new Array (
        "I look and feel radiant knowing I have so much to offer the world.",
        "Every day my self-confidence gets stronger.",
        "I live in the moment and forget about past failures and future worries.",
        "I am responsible for what happens to my body, so I treat it with love, respect, and care.",
        "I know I am alive for a reason. Today, I honor my purpose and inspire people around me to do the same.",
        "I don’t need anyone else or anything to complete me because I am already complete just as I am.",
        "I ask for what I want because I deserve it. I honor my desires today and always.",
        "Rather than being discouraged by how far I have left to go, I am grateful for how far I have already come."
    );

    useEffect(() => {
        // Update the document title using the browser API
        setMessage(messages[Math.floor(Math.random() * messages.length)]);
      });

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{affirmMessage}</Text>
      <Image style={styles.logo} source={require("../../assets/dove.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 220,
  },
  message: {
    margin: 30,
    fontSize: 30,
    textAlign: "center"
  },
});