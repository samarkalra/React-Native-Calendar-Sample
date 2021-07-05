import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Agenda} from 'react-native-calendars';

const dummyItems = {
  '2021-06-22': [{name: 'Buy Grocery'}, {name: 'play cricket'}],
  '2021-06-23': [{name: 'running'}, {name: 'yoga'}],
  '2021-06-24': [],
  '2021-06-25': [{name: 'create an app'}, {name: 'meeting'}],
};

const Calender = () => {
  return (
    <Agenda
      items={dummyItems}
      renderItem={item => {
        return (
          <TouchableOpacity style={styles.agendaItem} activeOpacity={0.75}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Calender;

const styles = StyleSheet.create({
  agendaItem: {
    height: 100,
    marginTop: 16,
    marginRight: 20,
    backgroundColor: 'white',
    padding: 10,
  },
});
