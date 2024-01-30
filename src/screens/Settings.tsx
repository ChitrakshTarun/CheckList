import React from 'react';
import {Text, ScrollView} from 'react-native';
import Header from '../utils/Header';
import {styles} from '../stylesheets/PageStyle';

export default function SettingsPage() {
  return (
    <ScrollView style={styles.page}>
      <Header title="Settings" />
      <Text>Settings Page</Text>
      <Text>To Be Developed</Text>
    </ScrollView>
  );
}
