import React, {useState} from 'react';
import {Modal, TextInput, View, Button, StyleSheet, Text} from 'react-native';

interface NewTaskModalProps {
  onButtonPress: () => void;
  placeholder: string; // Add this line
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({
  onButtonPress,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleOk = () => {
    onButtonPress();
    console.log(inputValue);
  };

  const handleCancel = () => {
    onButtonPress();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>{`New ${placeholder}`}</Text>
          <TextInput
            style={styles.modalText}
            onChangeText={setInputValue}
            value={inputValue}
          />
          <View style={styles.buttonContainer}>
            <Button title="OK" onPress={handleOk} />
            <Button title="Cancel" onPress={handleCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

// ... rest of the code

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // Add this line
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default NewTaskModal;
