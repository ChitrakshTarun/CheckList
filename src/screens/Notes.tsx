import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../utils/Header';
import {globalStyles} from '../stylesheets/PageStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NewButton from '../utils/NewButton';
import NoteItem from '../utils/NoteItem';

export default function NotesPage() {
  const [notes, setNotes] = useState<any[]>([]);
  const addTask = (note: any) => {
    setNotes([...notes, note]);
  };
  return (
    <View style={globalStyles.page}>
      <Header title="Tasks" />
      {notes.length === 0 ? (
        <View style={globalStyles.emptypage}>
          <MaterialIcons name="do-not-disturb" size={256} />
          <Text style={styles.text}>No notes yet. Add a new note!</Text>
        </View>
      ) : (
        <ScrollView>
          {notes.map((note, index) => (
            <NoteItem key={index} note={note} />
          ))}
        </ScrollView>
      )}
      <NewButton addTask={addTask} />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
