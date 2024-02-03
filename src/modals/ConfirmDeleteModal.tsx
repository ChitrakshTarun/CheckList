import React from 'react';
import {Modal, View, Pressable, StyleSheet, Text} from 'react-native';

interface DeleteConfirmModalProps {
  isVisible: boolean;
  onButtonPress: () => void;
  delTask: () => void;
  task: string;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isVisible,
  onButtonPress,
  delTask,
  task,
}) => {
  const handleDelete = () => {
    delTask();
    onButtonPress();
  };

  const handleCancel = () => {
    onButtonPress();
  };

  return (
    <Modal animationType="none" transparent={true} visible={isVisible}>
      <View style={styles.background}>
        <View style={styles.modal}>
          <View>
            <Text style={styles.headerText}>{'Delete Task?'}</Text>
          </View>
          <View style={styles.taskContainer}>
            <Text>{task}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={handleDelete}>
              <Text style={styles.buttonText}>Yes</Text>
            </Pressable>
            <Pressable onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// ... rest of the code

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // Add this line
  },
  modal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    marginTop: 15,
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 15,
    paddingRight: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  headerText: {
    width: '100%',
    height: 'auto',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskContainer: {
    marginTop: 15,
    borderRadius: 12,
  },
});

export default DeleteConfirmModal;
