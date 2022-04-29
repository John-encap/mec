import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home'
import GarageScreen from '../screens/Garage'
import MechanicScreen from '../screens/Mechanic'

const Home = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <NavigationContainer>
            <Home.Navigator>
                <Home.Screen 
                    name ="HomeScreen"
                    component = {HomeScreen}
                    options ={{headerShown:false}}
                />
                <Home.Screen 
                    name ="GarageScreen"
                    component = {GarageScreen}
                    options ={{headerShown:false}}
                /> 
                <Home.Screen 
                    name ="MechanicScreen"
                    component = {MechanicScreen}
                    options ={{headerShown:false}}
                /> 
            </Home.Navigator>
        </NavigationContainer>
    )
}