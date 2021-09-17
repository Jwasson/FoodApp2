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


const CalScreen = () => {
    //console.log("test")
    const [scanBool, setScan] = useState(true);
    const [FDC_ID, setID] = useState(false);
    const [serving, setServing] = useState(false);
    const [calories, setCalories] = useState(false);
    const [foodName, setName] = useState(false);
    const styles = StyleSheet.create({
        input: {
        position: 'absolute', top: 89, left: 155, right: 0, bottom: 20,
        height: 37,
        width: "40%",
        color: "blue",
        margin: 24,
        borderWidth: 1,
        borderColor: 'blue',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
        titles1: {
        position: 'absolute', top: 100, left: 25, right: 0, bottom: 0,
        height: 40,
        margin: 12,
        color: "blue",
        borderWidth: 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        },
        titles2: {
        position: 'absolute', top: 200, left: 25, right: 0, bottom: 0,
        height: 40,
        margin: 12,
        color: "blue",
        borderWidth: 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        },
        titles3: {
            position: 'absolute', top: 300, left: 25, right: 0, bottom: 0,
            height: 40,
            margin: 12,
            color: "blue",
            borderWidth: 0,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        titles4: {
            position: 'absolute', top: 400, left: 25, right: 0, bottom: 0,
            height: 40,
            margin: 12,
            color: "blue",
            borderWidth: 0,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
    });

 
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
           <Text style = {styles.titles1}> {'Enter Servings:'}</Text>
            <TextInput
                style = {styles.input}
                editable
                //value = {serving} // this should make it update real time but it's not working - cant enter anything
                onChangeText = {num => setServing(num)} //onChangeText is how you store user input 
            />
            <Text style = {styles.titles2}>{"Ingredient Name: "+foodName}</Text>
            <Text style = {styles.titles3}>{"Servings: "+serving}</Text>
            <Text style = {styles.titles4}>{"Kcals: "+serving*calories}</Text>
            
            
            
       </View>
        //fetchCal()//.then(response => console.log(response));
   );

   
}


export default CalScreen;


