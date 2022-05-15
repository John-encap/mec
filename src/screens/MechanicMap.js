import { StatusBar } from 'expo-status-bar';
import {colors, parameters} from '../global/styles.js'
import { StyleSheet, Text, View,Button,Image,Alert,Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React,{useState,useRef,useEffect} from 'react'
import { useNavigation } from '@react-navigation/core';
import MapView, { PROVIDER_GOOGLE,} from 'react-native-maps'; 
import * as Location from 'expo-location';

import { filterData,carsAround } from '../global/data'
import { mapStyle} from "../global/mapStyle"
import Map from "../component/map"

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT= Dimensions.get('window').height
const MechanicMap = () => {
    const _map = useRef(1);
    return (
        
        <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.back}> 
            <AntDesign name="leftcircleo" size={30} color="black" />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleTxt}>Find a Mechanic</Text>
          </View>
          <View style={styles.back}> 
          </View>
        </View>
        
        
            <View style={styles.mainView}>
                
                <MapView
                    ref = {_map}
                    provider ={PROVIDER_GOOGLE}
                    style = {styles.map}
                    customMapStyle ={mapStyle}
                    showsUserLocation ={true}
                    followsUserLocation = {true}
                    region = {{...carsAround[0],latitudeDelta:0.008,longitudeDelta:0.008}}
                    
                >
                    {carsAround.map((item,index)=>
                    <MapView.Marker coordinate = {item} key= {index.toString()}>
                        <Image 
                            source = {require('../../assets/favicon.png')}
                            style ={styles.carsAround}
                            resizeMode = "cover"
                        />
                    </MapView.Marker>
                    
                    )

                    }

                </MapView> 
            </View>
            <View style={styles.searchBTN}>
                <View style={styles.btns}>
                    <Button
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Button
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
    </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:0,
        
    },
    header:{
        backgroundColor:"#00b8a5",
        height: parameters.headerHeight
    },
    head:{ 
        height:60,
        backgroundColor:'green',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
      },
      back:{
        width:"12%",
        backgroundColor:"red",
        paddingBottom:0,
        alignItems:'flex-end'
        
      },
      title:{
        width:"60%",
        height:30,
        backgroundColor:"blue",
        
    
      },
      titleTxt:{
        fontSize: 24,
        textAlign: 'center',
      },
    // mainView:{
    //     paddingBottom:20
    // },

    view1:{
        // backgroundColor:"#997788",
        height:180,
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        paddingHorizontal:20,
    },
    

    map:{
    
        height: SCREEN_HEIGHT-200,
        marginVertical: 0,
        width:SCREEN_WIDTH
    },

    searchBTN:{
        height:140,
        width:SCREEN_WIDTH,
        backgroundColor:'green'
    },

    

    
})
export default MechanicMap;