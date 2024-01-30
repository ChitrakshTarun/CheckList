import React from 'react';
import {Text, ScrollView} from 'react-native';
import Header from '../utils/Header';
import {styles} from '../stylesheets/PageStyle';

export default function NotesPage() {
  return (
    <ScrollView style={styles.page}>
      <Header title="Notes" />
      <Text>Notes Page</Text>
      <Text>To Be Developed</Text>
    </ScrollView>
  );
}
