import React, { Component, useState, useEffect } from 'react'
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

import { BarCodeScanner } from 'expo-barcode-scanner';


function BarcodeScreen ({navigation}) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [FDC_ID, setID] = useState('');

    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setID(data);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    const getID = () => {
        val = FDC_ID;
        return val;
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        <Button //style = {styles.button}
                title = "Navigate To CalScreen"
                onPress = {() => navigation.navigate('CalScreen', {ScannedID: FDC_ID,})
                }
        />
        </View>
    );

}

            
            /*<Button //style = {styles.button}
                title = "Navigate to CalScreen"
                onPress = {()=> { 
                    navigation.navigate('CalScreen', {
                        FDC_ID: result,
                    });
                }}
            />*/
      
    

/*
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
        <Button //style = {styles.button}
             title = "Navigate to CalScreen"
            onPress = {()=> navigation.navigate('CalScreen')}
        />
      </View>
    )
    /*.catch(function(error){
        console.log('error' +error.message)
        throw error;
    });*/
//}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'blue',
  },
    button: {
    //position: 'absolute', top: 400, left: 250, right: 0, bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
})

export default BarcodeScreen