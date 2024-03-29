import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewItemModal from '../modals/NewItemModal';

const NewItemButton = ({addItem}: {addItem: any}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
        <MaterialCommunityIcons name="plus" color={'#ffffff'} size={30} />
      </Pressable>
      {modalVisible && (
        <NewItemModal
          onButtonPress={() => setModalVisible(false)}
          addItem={addItem}
        />
      )}
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

export default NewItemButton;
