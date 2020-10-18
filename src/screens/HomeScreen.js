import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Colors from "../constants/Colors";
import SplashScreen from "./SplashScreen";
import AffirmationScreen from "./AffirmationScreen";
import ChatBotScreen from "./ChatBotScreen";
import SettingsScreen from "./SettingsScreen";
import FriendsScreen from "./FriendsScreen";
import ScheduleScreen from "./ScheduleScreen";

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
      <Tabs.Screen name="Affirmation" component={AffirmationScreen} />
      <Tabs.Screen name="Friends" component={FriendsScreen} />
      <Tabs.Screen name="Schedule" component={ScheduleScreen} />
      <Tabs.Screen name="Chat Bot" component={ChatBotScreen} />
      <Tabs.Screen name="Settings">
        {(props) => <SettingsScreen {...props} extraData={userID} />}
      </Tabs.Screen>
    </Tabs.Navigator>
    
  );
}