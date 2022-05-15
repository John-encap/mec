import { StatusBar } from 'expo-status-bar';
import {colors, parameters} from '../global/styles.js'
import { StyleSheet, Text, View, ScrollView,Image,Alert,Dimensions } from 'react-native';
import React,{useState,useRef,useEffect} from 'react'
import { useNavigation } from '@react-navigation/core';
import MapView, { PROVIDER_GOOGLE,} from 'react-native-maps'; 
import * as Location from 'expo-location';

import { filterData,carsAround } from '../global/data'
import { mapStyle} from "../global/mapStyle"

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT= Dimensions.get('window').height



const Map = () => {
    const _map = useRef(1);
    return (
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
    
        height: SCREEN_HEIGHT*0.92,
        flex: 25,
        marginVertical: 0,
        width:SCREEN_WIDTH*0.92
    },

    mainbox:{
        textAlign:'center',
        margin: 0,
        flex: 5,
        justifyContent: 'space-between',
        },

    
})

export default Map;