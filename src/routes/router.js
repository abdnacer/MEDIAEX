import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GetStarted from '../screens/GetStarted/GetStarted';
import Home from '../screens/Home/Home';
import Ionic from "react-native-vector-icons"

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Router;
