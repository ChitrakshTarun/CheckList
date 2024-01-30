/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import TasksPage from './src/screens/ToDoList';
import NotesPage from './src/screens/Notes';
import CalendarPage from './src/screens/Calendar';
import SettingsPage from './src/screens/Settings';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';
import NewButton from './src/utils/NewButton';
import NavBarIcon from './src/utils/NavBarIcon';

const Tab = createMaterialBottomTabNavigator();

function App() {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Tasks"
        activeColor="#0E55CD"
        inactiveColor="#667C8A"
        labeled={false}
        barStyle={{
          backgroundColor: '#ffffff',
          height: 64,
        }}>
        <Tab.Screen
          name={'Tasks'}
          component={TasksPage}
          options={{
            tabBarLabel: 'Tasks',
            tabBarIcon: ({color}) => (
              <NavBarIcon name="format-list-checks" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name={'Notes'}
          component={NotesPage}
          options={{
            tabBarLabel: 'Notes',
            tabBarIcon: ({color}) => (
              <NavBarIcon name="note-edit" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name={'Calendar'}
          component={CalendarPage}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({color}) => (
              <NavBarIcon name="calendar" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name={'Settings'}
          component={SettingsPage}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => (
              <NavBarIcon name="cog" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
      <NewButton />
    </NavigationContainer>
  );
}

export default App;
