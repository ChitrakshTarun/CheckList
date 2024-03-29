import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import {globalStyles} from '../stylesheets/PageStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import NewItemButton from '../buttons/NewItem';
import TaskItem from '../components/TaskItem';

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);

  const addItem = (task: any) => {
    setTasks([...tasks, task]);
  };

  const delItem = (index: number) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <View style={globalStyles.page}>
      <Header title="Tasks" />
      {tasks.length === 0 ? (
        <View style={globalStyles.emptypage}>
          <MaterialIcons name="do-not-disturb" size={256} />
          <Text style={styles.text}>No tasks yet. Add a new task!</Text>
        </View>
      ) : (
        <ScrollView>
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} delItem={() => delItem(index)} />
          ))}
        </ScrollView>
      )}
      <NewItemButton addItem={addItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
