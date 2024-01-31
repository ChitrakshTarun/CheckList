import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewTaskModal from './NewTaskModal';

const NewButton = ({addTask}: {addTask: any}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
        <MaterialCommunityIcons name="plus" color={'#ffffff'} size={30} />
      </Pressable>
      {modalVisible && (
        <NewTaskModal
          onButtonPress={() => setModalVisible(false)}
          addTask={addTask}
          placeholder="post"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#0E55CD',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewButton;
