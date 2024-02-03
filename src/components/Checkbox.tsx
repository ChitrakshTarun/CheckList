import React, {useState} from 'react';
import {Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Checkbox() {
  const [checked, setChecked] = useState(false);
  const handlePress = () => {
    setChecked(!checked);
  };
  return (
    <Pressable onPress={handlePress}>
      <MaterialCommunityIcons
        name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
        color={'#000000'}
        size={30}
      />
    </Pressable>
  );
}
