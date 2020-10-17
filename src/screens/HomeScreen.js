import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Colors from "../constants/Colors";
import SplashScreen from "./SplashScreen";

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
      <Tabs.Screen name="Recipe" component={RecipeScreen} />
      <Tabs.Screen name="Map" component={MapScreen} />
      <Tabs.Screen name="Chat Bot" component={ChatBotScreen} />

      <Tabs.Screen name="Settings">
        {(props) => <SettingsScreen {...props} extraData={userID} />}
      </Tabs.Screen>
    </Tabs.Navigator>
    
  );
}