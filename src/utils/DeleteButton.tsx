import React, {useState} from 'react';
import {StyleSheet, Animated, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeleteConfirmModal from './DeleteConfirmModal';

interface DeleteButtonProps {
  effect: Animated.AnimatedInterpolation<number>;
}
const DeleteButton: React.FC<DeleteButtonProps> = ({effect}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Animated.View
      style={[styles.rightAction, {transform: [{translateX: effect}]}]}>
      <Pressable onPress={() => setModalVisible(true)}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={'#ffffff'}
          size={30}
        />
      </Pressable>
      {modalVisible && (
        <DeleteConfirmModal onButtonPress={() => setModalVisible(false)} />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  rightAction: {
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRadius: 12,
    backgroundColor: '#F00E0E',
  },
});

export default DeleteButton;
