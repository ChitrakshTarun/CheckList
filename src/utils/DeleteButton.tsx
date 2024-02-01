import React, {useState} from 'react';
import {StyleSheet, Animated, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeleteConfirmModal from './DeleteConfirmModal';

interface DeleteButtonProps {
  effect: Animated.AnimatedInterpolation<number>;
  delTask: () => void;
}
const DeleteButton: React.FC<DeleteButtonProps> = ({effect, delTask}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Animated.View
      style={[styles.deleteButton, {transform: [{translateX: effect}]}]}>
      <Pressable onPress={() => setModalVisible(true)}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={'#ffffff'}
          size={30}
        />
      </Pressable>
      {modalVisible && (
        <DeleteConfirmModal
          isVisible={modalVisible}
          onButtonPress={() => setModalVisible(false)}
          delTask={delTask}
        />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRadius: 12,
    backgroundColor: '#F00E0E',
  },
});

export default DeleteButton;
