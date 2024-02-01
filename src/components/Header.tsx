import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}: {title: string}) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 32,
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
