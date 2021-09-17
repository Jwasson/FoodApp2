import React, {Component, useEffect, useState} from 'react';
//import type {Node} from 'react';
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

//import auth from '@react-native-firebase/auth';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import auth from '@react-native-firebase/auth';
//import { initializeApp } from 'firebase/app';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services

//import * as firebase from 'firebase';



//need to take var1 in from user input somehow
//const var1 = '1648210'; for apple
//import * as Expo from 'expo';
console.ignoredYellowBox = ['Warning:'];

import LoginScreen from './LoginScreen';
import CalScreen from './CalScreen';
import BarcodeScreen from './BarcodeScreen';
//import { version } from 'react';


import * as firebase from 'firebase';
//import {firebaseConfig} from './Config';
import LoadingScreen from './LoadingScreen';
/*if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
 }*/


const PageNavigator = createSwitchNavigator({
    LoginScreen: LoginScreen,
    CalScreen: CalScreen,
    BarcodeScreen: BarcodeScreen,
    LoadingScreen: LoadingScreen,
    //BarcodeScanner: BarcodeScanner,
})

const AppNavigator = createAppContainer (PageNavigator);


export default class App extends Component {

    render() {
        return (
            /*<View> 
                jhhjb
            </View>*/
            <AppNavigator />
        );
    }

}



















    //console.log("test")
    /*const [scanBool, setScan] = useState(true);
    const [FDC_ID, setID] = useState(false);
    const [serving, setServing] = useState(false);
    const [calories, setCalories] = useState(false);
    const [foodName, setName] = useState(false);
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
    });
 
    /*useEffect (()=>{
        if(serving && calories !== false){
            setServing(serving*calories);
        }
    },[calories,serving])*/

/*
	const UserInput = (props) => {
           return (
                <TextInput
                style = {styles.input}
                {...props}
                editable
                maxLength={100}
                //setID = {FDC_ID => setID(FDC_ID)} //onChangeText is how you store user input
                //use value to concatenate string into URL
                />
               // <Text style = {styles.input}>{this.state.text}</Text> //this prints user input
           );

    }
*/
    /*const fetchCal = () => {
        //fetch("https://api.nal.usda.gov/fdc/v1/foods?fdcIds="+ScannedID+"&pageSize=2&api_key=Ub5JJ3ntwgh8CH1ILyobzVwTQE6SZ8WUovgdaecM")
        fetch('https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1648210&pageSize=2&api_key=Ub5JJ3ntwgh8CH1ILyobzVwTQE6SZ8WUovgdaecM')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            //you have to set calories here
        })
        .catch((error) => {
        console.error(error);
        });
		//}
		//</View>
    //}*/
    // userInput()
    //fetchCal()
 /*
    fetch('https://api.nal.usda.gov/fdc/v1/foods/search?fdcIds=1648210&pageSize=2&api_key=Ub5JJ3ntwgh8CH1ILyobzVwTQE6SZ8WUovgdaecM')
        .then((response) => response.json())
        .then((json) => {
            //console.log(json)
            //you have to set calories here
            try{
                setCalories(json["foods"][0]["foodNutrients"][3]["value"]);
                setName(json["foods"][0]["description"]);
            }
            catch(error){
                console.error(error);
            }
        });
        


   return (
       <View>
           <Text style = {styles.titles}>{'Enter Servings:'}</Text>
            <TextInput
                style = {styles.input}
                editable
                //value = {serving} // this should make it update real time but it's not working - cant enter anything
                onChangeText = {num => setServing(num)} //onChangeText is how you store user input
                
            />
            <Text style = {styles.titles}>{"Ingredient Name: "+foodName}</Text>
            <Text style = {styles.titles}>{"Servings: "+serving}</Text>
            <Text style = {styles.titles}>{"Kcals: "+serving*calories}</Text>
            
       </View>
        //fetchCal()//.then(response => console.log(response));
   );

   
*/

//const getCalories = () => {
	//this returns more than one food
		//fetch('https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=TUnJ9oaAjaF0dz2x3TUyRVZt7YKjbnVR0to9Qw24');
	//this should be more specific, but not sure if it will return only calories... 1008 is the ID for calories
	//fetch('https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1648210&nutrients=1008&api_key=TUnJ9oaAjaF0dz2x3TUyRVZt7YKjbnVR0to9Qw24');



	//enter FDC ID separated by comma
		//each should be able to use second fetch command in one go
	//enter corresponding servings separated by comma
		//not sure this would work if you don't call the fetch command each time
		//need to try to save the results to a vector
	//multiply servings by calories per serving and add each for total calories




//export default App;






































