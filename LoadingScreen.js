import React, {Component, useEffect, useState} from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TextInput, Button, ActivityIndicator,
} from 'react-native';

import firebase from 'firebase';


const styles = StyleSheet.create({
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
    titles: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

//import * as Google from 'expo-google-app-auth';

class LoadingScreen extends Component{

    componentDidMount(){
        this.checkLogin();
    }

    checkLogin = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.props.navigation.navigate('CalScreen');
            }else{
                this.props.navigation.navigate('LoginScreen');
            }
            });
    };

    render(){
        return (
            <View style = {styles.container}>
                <ActivityIndicator size = "large"/>
            </View>
        );
    }


    
}

export default LoadingScreen;