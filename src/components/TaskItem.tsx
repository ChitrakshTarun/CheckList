import React, {useState} from 'react';
import {StyleSheet, Text, View, Animated, ToastAndroid} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import DeleteItemButton from '../buttons/DeleteItem';
import Checkbox from './Checkbox';

const TaskItem = ({task, delItem}: {task: string; delItem: () => void}) => {
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 0],
    });
    return <DeleteItemButton effect={trans} delItem={delItem} item={task} />;
  };
  const [checked, setChecked] = useState(false);
  const handlePress = () => {
    setChecked(!checked);
    if (checked === false) {
      ToastAndroid.show(`Task "${task}" completed!`, ToastAndroid.SHORT);
    }
  };
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.container}>
          <View style={styles.checkbox}>
            <Checkbox status={checked} handlePress={handlePress} />
          </View>
          <Text
            numberOfLines={1}
            style={checked ? styles.textStrike : styles.text}>
            {task}
          </Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
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
  textStrike: {
    color: '#000',
    fontSize: 22,
    alignItems: 'center',
    textDecorationLine: 'line-through',
  },
  rightAction: {
    marginVertical: 12,
    backgroundColor: '#dd2c00',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRadius: 12,
  },
});

export default TaskItem;
