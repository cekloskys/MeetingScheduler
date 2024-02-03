import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AddHostScreen from '../screens/AddHost';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Start Scheduling!'}
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'Add Host'} component={AddHostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;