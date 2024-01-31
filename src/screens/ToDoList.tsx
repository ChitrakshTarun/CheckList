import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../utils/Header';
import {styles} from '../stylesheets/PageStyle';
import NewButton from '../utils/NewButton';
import TaskItem from '../utils/TaskItem';

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);

  const addTask = (task: any) => {
    setTasks([...tasks, task]);
  };

  return (
    <View style={styles.page}>
      <Header title="Tasks" />
      <ScrollView>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ScrollView>
      <NewButton addTask={addTask} />
    </View>
  );
}
