import React, { Component } from 'react'
import { RNCamera } from 'react-native-camera'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
  } from 'react-native';
  import { NavigationContext } from 'react-navigation';



function BarcodeScreen ({navigation}){
  //render() {
    
    return (
      <View style={styles.container}>
        <RNCamera
          style={{ flex: 1, alignItems: 'center' }}
          ref={ref => {
            this.camera = ref
          }}
        />
        <Button title = "Navigate to CalScreen"
            onPress = {()=> navigation.navigate('CalScreen')}
        />
      </View>
    )
    /*.catch(function(error){
        console.log('error' +error.message)
        throw error;
    });*/
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
    button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
})

export default BarcodeScreen