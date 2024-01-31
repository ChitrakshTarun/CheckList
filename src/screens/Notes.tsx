import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../utils/Header';
import {globalStyles} from '../stylesheets/PageStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NewButton from '../utils/NewButton';
import TaskItem from '../utils/TaskItem';

export default function NotesPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const addTask = (task: any) => {
    setTasks([...tasks, task]);
  };
  return (
    <View style={globalStyles.page}>
      <Header title="Tasks" />
      {tasks.length === 0 ? (
        <View style={globalStyles.emptypage}>
          <MaterialIcons name="do-not-disturb" size={256} />
          <Text style={styles.text}>No notes yet. Add a new note!</Text>
        </View>
      ) : (
        <ScrollView>
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} />
          ))}
        </ScrollView>
      )}
      <NewButton addTask={addTask} />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
