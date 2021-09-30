import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Google from 'expo-google-app-auth';
import Login from './screens/Login'
import Home from './screens/Home'



const Stack =createStackNavigator();
const signInWithGoogleAsync=async ()=>{
  
  try {
    const result = await Google.logInAsync({
      behavior:"web",
      androidClientId:`844866902004-un7qqgtprvlcjko5994brs66jtmdp1m8.apps.googleusercontent.com`,
      iosClientId:`844866902004-p5a01gegc8cbk7iuovpd64u8mk48k8bh.apps.googleusercontent.com`,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }

}
const handlesign=()=>{
  const config={
    expoClientId: `844866902004-u6e4blme1c8c1th8fk6ne0kbn52chqvb.apps.googleusercontent.com`,
    androidClientId: `844866902004-un7qqgtprvlcjko5994brs66jtmdp1m8.apps.googleusercontent.com`,
    iosClientId: `844866902004-p5a01gegc8cbk7iuovpd64u8mk48k8bh.apps.googleusercontent.com`,
    scopes: ['profile', 'email'],
  }

  Google
  .logInAsync(config)
  .then((result)=>{
    const {type,user}=result;
    if (type == 'success') {
      alert("this is us")
    } else {
      console.log("error")
    }
  })
  .catch(error=>{console.log(error)})
}


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
