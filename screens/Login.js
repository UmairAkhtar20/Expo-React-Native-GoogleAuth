import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,Button } from 'react-native';
import * as Google from 'expo-google-app-auth';

const Login = ({navigation}) => {
  const handlesign=()=>{
  const config={
    expoClientId: `YOUR EXPO CLIENT ID`,
    androidClientId: `YOUR ANDRIOD CLIENT ID`,
    iosClientId: `YOUR ANDRIOD CLIENT ID`,
    scopes: ['profile', 'email'],
  }

  Google
  .logInAsync(config)
  .then((result)=>{
    const {type,user}=result;
    if (type == 'success') {
        console.log(result)
        console.log(user)
        navigation.navigate("Home")
    } else {
      console.log("error")
    }
  })
  .catch(error=>{console.log(error)})
     }

    return (
        <View style={styles.container}>
    <Button  color="red" onPress={handlesign} title="Login with google"/>
       
    </View>
    )
}

export default Login

const styles = StyleSheet.create({container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },})
