import React from 'react';
import {Modal, View, Pressable, StyleSheet, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
interface ConfirmDeleteModalProps {
  isVisible: boolean;
  onButtonPress: () => void;
  delItem: () => void;
  item: string;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isVisible,
  onButtonPress,
  delItem,
  item,
}) => {
  const handleDelete = () => {
    delItem();
    onButtonPress();
  };
  const route = useRoute();
  const handleCancel = () => {
    onButtonPress();
  };

  return (
    <Modal animationType="none" transparent={true} visible={isVisible}>
      <View style={styles.background}>
        <View style={styles.modal}>
          <View>
            <Text style={styles.headerText}>
              {' '}
              {route.name === 'Tasks' ? (
                <Text style={styles.headerText}>Delete Task?</Text>
              ) : (
                <Text style={styles.headerText}>Delete Note?</Text>
              )}
            </Text>
          </View>
          <View style={styles.taskContainer}>
            <Text>{item}</Text>
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

export default ConfirmDeleteModal;
