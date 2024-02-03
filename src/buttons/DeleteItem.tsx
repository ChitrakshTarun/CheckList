import React, {useState} from 'react';
import {StyleSheet, Animated, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeleteConfirmModal from '../modals/ConfirmDeleteModal';

interface DeleteItemButtonProps {
  effect: Animated.AnimatedInterpolation<number>;
  delItem: () => void;
  task: string;
}
const DeleteItemButton: React.FC<DeleteItemButtonProps> = ({
  effect,
  delItem,
  task,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Animated.View
      style={[styles.DeleteItemButton, {transform: [{translateX: effect}]}]}>
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
          delItem={delItem}
          task={task}
        />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  DeleteItemButton: {
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRadius: 12,
    backgroundColor: '#F00E0E',
  },
});

export default DeleteItemButton;
