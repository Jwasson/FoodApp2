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
           <Text style = {styles.titles}> {'Enter Servings:'}</Text>
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

   
}


export default CalScreen;


