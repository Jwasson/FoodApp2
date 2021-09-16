import React, {Component, useEffect, useState} from 'react';
//import type {Node} from 'react';
import 'react-native-gesture-handler';
import firebase from 'firebase';
//import auth from '@react-native-firebase/auth';
//import * as GoogleSignIn from 'expo-google-sign-in';
import * as Google from 'expo-google-app-auth'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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


import CalScreen from './CalScreen';


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
/*
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from 'react-native-google-signin';*/


function LoginScreen ({navigation}) {

//const [loggedIn, setloggedIn] = useState(false);
//const [userInfo, setuserInfo] = useState([]);
    const Stack = createStackNavigator();
    async function signInWithGoogleAsync() {
        try {
          const result = await Google.logInAsync({
            behavior: 'web',
            iosClientId: '576903655121-895vgr72883r4a6h89k1mhfh9kt86s4b.apps.googleusercontent.com',
            //androidClientId: AND_CLIENT_ID,
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

    const signInWithGoogle = () => {
        signInWithGoogleAsync()
    }
/*
    const _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const {accessToken, idToken} = await GoogleSignin.signIn();
            setloggedIn(true);
            const credential = auth.GoogleAuthProvider.credential(
                idToken,
                accessToken,
            );
            await auth().signInWithCredential(credential);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
              alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
              alert('Signin in progress');
              // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              alert('PLAY_SERVICES_NOT_AVAILABLE');
              // play services not available or outdated
            } else {
              // some other error happened
            }
        }
    }

    //const Update = () => {
    useEffect(() => {
        GoogleSignin.configure({
        scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: '576903655121-895vgr72883r4a6h89k1mhfh9kt86s4b.apps.googleusercontent.com',
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
    }, []);*/
   // }

    return(
        <View style = {styles.container}> 
            <Button title = "Sign In With Google"
             onPress = {()=> signInWithGoogle()}
            />
            <Button title = "Press This After Login"
             onPress = {()=> navigation.navigate('CalScreen')}
            />
        </View>
    );
/*
    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <Header />
    
              <View style={styles.titles}>
                <View style={styles.container}>
                  <GoogleSigninButton
                    style={{width: 192, height: 48}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                  />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
    );*/

}

export default LoginScreen;