import React from 'react';
import {Text, ScrollView} from 'react-native';
import Header from '../utils/Header';
import {globalStyles} from '../stylesheets/PageStyle';

export default function CalendarPage() {
  return (
    <ScrollView style={globalStyles.page}>
      <Header title="Calendar" />
      <Text>Calendar Page</Text>
      <Text>To Be Developed</Text>
    </ScrollView>
  );
}
