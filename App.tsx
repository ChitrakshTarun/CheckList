import React from 'react';
// import type {PropsWithChildren} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TasksPage from './src/screens/ToDoList';
import NotesPage from './src/screens/Notes';
import CalendarPage from './src/screens/Calendar';
import SettingsPage from './src/screens/Settings';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App() {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Tasks"
        activeColor="#0E55CD"
        inactiveColor="#667C8A"
        barStyle={{backgroundColor: '#fff'}}
        //   shifting={true} // Set shifting to true for dynamic style changes
        //        sceneAnimationEnabled={false} // Disable scene animation for better control
      >
        <Tab.Screen
          name={'Tasks'}
          component={TasksPage}
          options={{
            tabBarLabel: 'Tasks',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="format-list-checks"
                color={color}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'Notes'}
          component={NotesPage}
          options={{
            tabBarLabel: 'Notes',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="note-edit"
                color={color}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'Calendar'}
          component={CalendarPage}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="calendar" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name={'Settings'}
          component={SettingsPage}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="cog" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
