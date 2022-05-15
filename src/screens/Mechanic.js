import React from 'react';
import { StyleSheet, Text, View ,Button,Image, ScrollView, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const Mechanic = () => {
  const navigation = useNavigation();
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


        <ScrollView>
          
          <View style={styles.icon}>
            <Image
                style ={styles.image1}
                source={require('../../assets/Mechanic.png')}
            />
          </View>

          <View style={styles.stmt}>

          </View>
          
          <View style={styles.inputs}>
            <View style={styles.input}>

              <Text style={styles.InTitle}>Vehicle</Text>
              <TextInput
                style={styles.inputf}
                placeholder="Car,Van,Bus,.."
                keyboardType="default"
              />
            </View>
            <View style={styles.input}>

              <Text style={styles.InTitle}>Service</Text>
              <TextInput
                style={styles.inputf}
                placeholder="Oil Change,Tire Fix.."
                keyboardType="default"
              />
            </View>
            <View style={styles.input}>
             
              <Text style={styles.InTitle}>Area</Text>
              <TextInput
                style={styles.inputf}
                placeholder="Nugegoda,Kiru.."
                keyboardType="default"
              />
            </View>
          </View>
          <View style={styles.btns}>
            <Button
              onPress={() => navigation.navigate("MechanicMapScreen")}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </ScrollView>


      </View>
    );
};

const styles = StyleSheet.create({
  container:{
      flex:1,
      paddingBottom:0,
      
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
  stmt:{
    height:35,

  },
  icon:{
    height:150,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
    
  },
  image1:{
    height:120,
    width:120,
  },
  inputs:{
    height:300,
    backgroundColor:"yellow"
    
  },
  input:{
    flex:1,
    justifyContent:'center',
    paddingBottom:0,
    alignItems: 'center',
    backgroundColor:"gray",
    marginBottom:1
    
  },
  inputf: {
    height: 40,
    width:'90%',
    margin: 12,
    marginTop:3,
    borderWidth: 1,
    padding: 10,
    paddingLeft:5
  },
  InTitle:{
    width:'90%',
    backgroundColor:'pink',
    paddingLeft:5,
    fontSize:16,
    marginTop:5
  },
  btns:{
    height:150,
    backgroundColor:"pink"
  },

});

export default Mechanic;