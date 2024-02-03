import React from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import DeleteItemButton from '../buttons/DeleteItem';

const TaskItem = ({task, delItem}: {task: string; delItem: () => void}) => {
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 0],
    });
    return <DeleteItemButton effect={trans} delItem={delItem} task={task} />;
  };
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.container}>
          <View style={styles.checkbox}>
            <MaterialCommunityIcons
              name="square-rounded-outline"
              color={'#000000'}
              size={30}
            />
          </View>
          <Text style={styles.text}>{task}</Text>
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

// import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// import Header from '../components/Header';
// import {globalStyles} from '../stylesheets/PageStyle';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function NotesPage() {
//   return (
//     // <ScrollView style={globalStyles.page}>
//     <View style={globalStyles.page}>
//       <Header title="Notes" />
//       <View style={globalStyles.emptypage}>
//         <MaterialCommunityIcons name="progress-wrench" size={256} />
//         <Text style={styles.text}>Notes Page Under Construction!</Text>
//       </View>
//     </View>
//     // </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 24,
//   },
// });

// // Actual Notes Code, to be worked on later

// // import React from 'react';
// // import {ScrollView, Text} from 'react-native';
// // import Header from '../components/Header';
// // import {globalStyles} from '../stylesheets/PageStyle';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import NewItemButton from '../utils/NewItemButton';
// // import NoteItem from '../utils/NoteItem';

// // export default function NotesPage() {
// //   const [notes, setNotes] = useState<any[]>([]);
// //   const addItem = (note: any) => {
// //     setNotes([...notes, note]);
// //   };
// //   return (
// //     <ScrollView style={globalStyles.page}>
// //       <Header title="Settings" />
// //       <Text>Notes Page</Text>
// //       <Text>To Be Developed</Text>
// //     </ScrollView>
// //     <View style={globalStyles.page}>
// //       <Header title="Notes" />
// //       {notes.length === 0 ? (
// //         <View style={globalStyles.emptypage}>
// //           <MaterialIcons name="do-not-disturb" size={256} />
// //           <Text style={styles.text}>No notes yet. Add a new note!</Text>
// //         </View>
// //       ) : (
// //         <ScrollView>
// //           {notes.map((note, index) => (
// //             <NoteItem key={index} note={note} />
// //           ))}
// //         </ScrollView>
// //       )}
// //       <NewItemButton addItem={addItem} />
// //     </View>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   text: {
// //     fontSize: 24,
// //   },
// // });
