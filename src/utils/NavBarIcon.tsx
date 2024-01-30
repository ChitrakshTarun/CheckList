import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
type NavBarIconProps = {
  name: string;
  color: string;
  size: number;
};

const NavBarIcon: React.FC<NavBarIconProps> = ({name, color, size}) => {
  return (
    <MaterialCommunityIcons
      style={styles.icon}
      name={name}
      color={color}
      size={size}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    bottom: 10,
  },
});

export default NavBarIcon;
