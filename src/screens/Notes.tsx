import React, {useState} from 'react';
import {Text, ScrollView, View} from 'react-native';
import Header from '../utils/Header';
import {styles} from '../stylesheets/PageStyle';
import NewButton from '../utils/NewButton';

export default function NotesPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const addTask = (task: any) => {
    setTasks([...tasks, task]);
  };
  return (
    <View style={styles.page}>
      <Header title="Notes" />
      <ScrollView>
        <Text>Notes Page</Text>
        <Text>To Be Developed</Text>
      </ScrollView>
      <NewButton addTask={addTask} />
    </View>
  );
}
