import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TaskItem = ({task}: {task: string}) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkbox}>
        <MaterialCommunityIcons
          name="square-rounded-outline"
          color={'#000000'}
          size={30}
        />
      </View>
      <Text style={styles.text}>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 12,
    marginHorizontal: 4,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  checkbox: {
    marginRight: 12,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 22,
    alignItems: 'center',
  },
});

export default TaskItem;
