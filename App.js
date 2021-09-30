import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Google from 'expo-google-app-auth';
import Login from './screens/Login'
import Home from './screens/Home'



const Stack =createStackNavigator();


export default function App() {
  return (
   <NavigationContainer >
     
  <Stack.Navigator >
      <Stack.Screen name="Login" component={Login}/>
     
      <Stack.Screen name="Home" component={Home}/>
   
   

     
    
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
