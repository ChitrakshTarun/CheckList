import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import {globalStyles} from '../stylesheets/PageStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SettingsPage() {
  return (
    // <ScrollView style={globalStyles.page}>
    <View style={globalStyles.page}>
      <Header title="Settings" />
      <View style={globalStyles.emptypage}>
        <MaterialCommunityIcons name="progress-wrench" size={256} />
        <Text style={styles.text}>Settings Page Under Construction!</Text>
      </View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
