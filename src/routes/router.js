import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GetStarted from '../screens/GetStarted/GetStarted';
import Home from '../screens/Home/Home';
import Favorite from '../screens/Favorite/Favorite';
import Details from '../screens/Details/Details';
import DetailsStorage from '../screens/DetailsStorage/DetailsStorage';
import BottomNavigator from '../components/BottomNavigator';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    // tabBar={props => <BottomNavigator {...props} />}
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
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
      <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
      <Stack.Screen name="DetailsStorage" component={DetailsStorage} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Router;
