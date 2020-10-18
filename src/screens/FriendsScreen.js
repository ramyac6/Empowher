import React, { useEffect, useState } from "react";
import {Button, SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import CalendarPicker from 'react-native-calendar-picker';
import Colors from "../constants/Colors";

export default function FriendsScreen({ navigation }) {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
  
    const onDateChange = (date, type) => {
        //function to handle the date change
        if (type === 'END_DATE') {
          setSelectedEndDate(date);
        } else {
          setSelectedEndDate(null);
          setSelectedStartDate(date);
        }
      };
    

  var Mary = {
    latitude: 46.78825,
    longitude: -122.4324,
  };
  var Jenna = {
    latitude: 47.78825,
    longitude: -121.4324,
  };
  var Colette = {
    latitude: 46.98925,
    longitude: -121.6324,
  };

  return (
    <MapView style = {{flex:1}} provider={PROVIDER_GOOGLE} showsUserLocation>
        <Marker coordinate={Jenna} title={"Jenna"} description={"(123) 456-7890"} />
        <Marker coordinate={Mary} title={"Mary"} description={"(987) 456-1234"} />
        <Marker
          coordinate={Colette}
          title={"Colette"}
          description={"(765) 123-4567"}
        />
    </MapView>
  );
}
