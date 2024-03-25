import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import TabNavigator from './TabNavigator';
import AddHostScreen from '../screens/AddHost';
import AddMeetingScreen from '../screens/AddMeeting';
import ExistingHostScreen from '../screens/ExistingHost';
import AssignMeetingScreen from '../screens/AssignMeeting';
import ViewMeetingsScreen from '../screens/ViewMeetings';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'Start Scheduling!'} component={TabNavigator}/>
        <Stack.Screen name={'Add Host'} component={AddHostScreen}/>
        <Stack.Screen name={'Add Meeting'} component={AddMeetingScreen}/>
        <Stack.Screen name={'Existing Host'} component={ExistingHostScreen}/>
        <Stack.Screen name={'Assign Meeting'} component={AssignMeetingScreen}/>
        <Stack.Screen name={'View Meetings'} component={ViewMeetingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;