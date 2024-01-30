import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import Header from '../utils/Header';
import {styles} from '../stylesheets/PageStyle';
import NewButton from '../utils/NewButton';

export default function NotesPage() {
  return (
    <View style={styles.page}>
      <Header title="Tasks" />
      <ScrollView>
        <Text>Tasks Page</Text>
        <Text>To Be Developed</Text>
      </ScrollView>
      <NewButton />
    </View>
  );
}
