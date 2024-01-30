import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NewButton = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => {}}>
        <MaterialCommunityIcons name="plus" color={'#ffffff'} size={30} />
      </Pressable>
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
