import React, {useState} from 'react';
import {
  Modal,
  TextInput,
  View,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

interface NewTaskModalProps {
  onButtonPress: () => void;
  placeholder: string;
  addTask: (task: string) => void;
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({
  onButtonPress,
  placeholder,
  addTask,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleOk = () => {
    onButtonPress();
    console.log(inputValue);
    addTask(inputValue);
  };

  const handleCancel = () => {
    onButtonPress();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.background}>
        <View style={styles.modal}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{`New ${placeholder}`}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              autoFocus={true}
              style={styles.inputText}
              onChangeText={setInputValue}
              value={inputValue}
              placeholder="Do my laundry..."
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={handleOk}>
              <Text style={styles.buttonText}>OK</Text>
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
  headerContainer: {paddingHorizontal: 4},
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
  inputText: {marginHorizontal: 8},
  headerText: {
    width: '100%',
    height: 'auto',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NewTaskModal;
