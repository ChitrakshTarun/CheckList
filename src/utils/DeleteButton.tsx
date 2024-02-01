import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface DeleteButtonProps {
  effect: Animated.AnimatedInterpolation<number>;
}
const DeleteButton: React.FC<DeleteButtonProps> = ({effect}) => {
  return (
    <Animated.View
      style={[styles.rightAction, {transform: [{translateX: effect}]}]}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        color={'#ffffff'}
        size={30}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  rightAction: {
    marginVertical: 12,
    backgroundColor: '#dd2c00',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRadius: 12,
  },
});

export default DeleteButton;
