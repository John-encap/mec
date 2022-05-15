import { StatusBar } from 'expo-status-bar';
import {colors, parameters} from '../global/styles.js'
import { StyleSheet, Text, View, ScrollView,Image,Alert,Dimensions } from 'react-native';
import React,{useState,useRef,useEffect} from 'react'
import { useNavigation } from '@react-navigation/core';
import MapView, { PROVIDER_GOOGLE,} from 'react-native-maps'; 
import * as Location from 'expo-location';

import { filterData,carsAround } from '../global/data'
import { mapStyle} from "../global/mapStyle"
import Map from "../component/map"

const SCREEN_WIDTH = Dimensions.get('window').width



const alt = () =>{
    Alert.alert('View Clicked...')
}

const Home = () =>{
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>

            </View>
            <ScrollView bounces={false}>
                <View style={styles.mainView}>
                    <View style={styles.view1}>
                        <View style={[styles.card,styles.shadowProp]} onStartShouldSetResponder={() => true} onResponderRelease={() => navigation.navigate("MechanicScreen")}>
                            <Image
                                style ={styles.image1}
                                source={require('../../assets/Mechanic.png')}
                            />
                            <View style={styles.txt}>
                                <Text style={styles.topic}>
                                    Mechanic 
                                </Text>
                                <Text style={styles.paragraph}>
                                    There is no universal mapping
                                </Text>
                            </View>
                        </View>
                    </View>
                    
                    
                    <View style={styles.view1}>
                        <View style={[styles.card,styles.shadowProp]} onStartShouldSetResponder={() => true} onResponderRelease={() => navigation.navigate("MechanicScreen")}>
                            <Image
                                style ={styles.image1}
                                source={require('../../assets/Truck.png')}
                            />
                            <View style={styles.txt}>
                                <Text style={styles.topic}>
                                    Tow Truck 
                                </Text>
                                <Text style={styles.paragraph}>
                                    There is no universal mapping
                                </Text>
                            </View>
                        </View>
                    </View>
                    
                    
                    <View style={styles.view1}>
                        <View style={[styles.card,styles.shadowProp]} onStartShouldSetResponder={() => true} onResponderRelease={() => navigation.navigate("GarageScreen")}>
                            <Image
                                style ={styles.image1}
                                source={require('../../assets/Garage.png')}
                            />
                            <View style={styles.txt}>
                                <Text style={styles.topic}>
                                    Garage 
                                </Text>
                                <Text style={styles.paragraph}>
                                    There is no universal mapping
                                </Text>
                            </View>
                        </View>
                    </View>
                    

                    

                       <Map></Map> 
                    
                </View>
            </ScrollView>
        </View>
    );
}


export default Home


const styles= StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:0,
        
    },
    header:{
        backgroundColor:"#00b8a5",
        height: parameters.headerHeight
    },
    mainView:{
        paddingBottom:20
    },

    view1:{
        // backgroundColor:"#997788",
        height:180,
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        paddingHorizontal:20,
    },
    txt:{
        width:'65%',
        // backgroundColor:'#123456'
    },
    topic: {
        fontSize: 24,
        textAlign: 'center',
    },
    paragraph:{
        textAlign:"center"
    },

    card:{
        height:150,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ffffff',
        padding:20,
        borderRadius:10,
        borderStyle:'solid',
        borderColor:'#000000'
    },
    image1:{
        height:100,
        width:100,
    },
    shadowProp: {
        elevation: 3,
        shadowColor: '#010100',
        borderColor: '#f1f1ff',
        borderWidth: 1,
      },

      map:{
       
        height: 150,
         marginVertical: 0,
         width:SCREEN_WIDTH*0.92
        },

    
})