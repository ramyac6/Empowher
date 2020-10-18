import React, { useEffect, useState } from "react";
import {Button, SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';
import { Root, Popup } from 'popup-ui'

import Colors from "../constants/Colors";

export default function ScheduleScreen({ navigation }) {
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


  return (
    <Root>
      <View>
        <Text></Text>
        <CalendarPicker
          style={{margin:300}}
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
          weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={onDateChange}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={() => Popup.show({
                type: 'Success',
                title: 'Invite Sent!',
                button: true,
                textBody: ' Your friends will be notified shortly',
                buttontext: 'Ok',
                callback: () => Popup.hide()
              })}
        >
          <Text style={styles.buttonTitle}>Pick Date</Text>
        </TouchableOpacity>
        <View style={styles.items}>
            <Text style={{ fontSize: 18 }}>Mary</Text>
        </View>
        <View style={styles.items}>
          <Text style={{ fontSize: 18 }}>Jenna</Text>
        </View>
        <View style={styles.items}>
          <Text style={{ fontSize: 18 }}>Colette</Text>
        </View>
      </View>
    </Root>
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
      height: 215,
    },
    button: {
        backgroundColor: Colors.primarylight,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",

    },
    items: {
        backgroundColor: Colors.lightGray,
        marginTop: 10,

        marginBottom: 10,
        padding: 10,
        alignItems: "center",
        borderColor: Colors.darkGray,
        borderRadius: 2,
      },
  });