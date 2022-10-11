import React from "react";
import {View,Text,Image,StyleSheet} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3"


const Stack=createNativeStackNavigator();
export const Screen1=({navigation})=>{
 
  return(
    <View style={{backgroundColor:"white"}}>
       <Image
       source={require("./assets/human-hand-holding-mobile-phone/4433.jpg")}
       style={{width:300,height:350,marginLeft:80,marginTop:30}}
       />
       <Text style={{fontSize:23,fontFamily:"Montserrat-Bold",marginLeft:110,marginTop:50,color:"black"}}>Organize your works</Text>
       <Text style={{fontSize:17,marginLeft:70,marginTop:20,fontFamily:"Montserrat-Medium",color:"grey"}}>Let's orgainze your works with priority</Text>
       <Text style={{fontSize:17,marginLeft:90,fontFamily:"Montserrat-Medium",marginTop:7,color:"grey"}}>and do everything without stress</Text>
       <View style={styles.cont}>
       <Text style={{color:"orange"}}>{"\u2B22" + "   "}</Text>
       <Text style={{color:"grey"}}>{"\u2B22" + "   "}</Text>
       </View>
      <View style={styles.cont1}>
       <FontAwesome name="facebook-square" size={25} color="#1260CC"/><Text style={{marginLeft:73,fontSize:19,color:"black",fontFamily:"PTSans-Bold"}}>Continue with Facebook</Text>
       </View>
       <View style={styles.cont1}>
       <FontAwesome name="google" size={25} color="black"/><Text style={{marginLeft:80,fontSize:19,color:"black",fontFamily:"PTSans-Bold"}}>Continue with Google</Text>
       </View>
       <View style={styles.cont1}>
       <Foundation name="mail" size={25} color="#9930ff"/><Text style={{marginLeft:85,fontSize:19,color:"black",fontFamily:"PTSans-Bold"}}>Continue with Email</Text>
       </View>
       <View style={styles.cont3}>
      <Text style={{color:"white",textAlign:"center",fontSize:17,fontWeight:"500",backgroundColor:"black",
      color:"white",padding:10,marginLeft:180,marginRight:100,borderRadius:10,marginTop:10,marginBottom:20,paddingLeft:20,paddingRight:20}}onPress={()=>{navigation.navigate("Screen2")}}>Screen2</Text>
      <Text style={{color:"white",textAlign:"center",fontSize:17,fontWeight:"500",backgroundColor:"black",
      color:"white",padding:10,marginLeft:7,marginRight:170,borderRadius:10,marginTop:10,marginBottom:20,paddingLeft:20,paddingRight:20}}onPress={()=>{navigation.navigate("Screen3")}}>Screen3</Text>
    </View>
    </View>
  )
}

 const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Screen1"
        component={Screen1}
         />
        <Stack.Screen
        name="Screen2"
        component={Screen2}
         />
         <Stack.Screen
          name="Screen3"
          component={Screen3}
         />
         
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles=StyleSheet.create({
  cont:{
    flex:0,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:25
  },
  cont1:{
    flex:0,
    flexDirection:"row",
    marginTop:25,
    padding:20,
    marginLeft:30,
    marginEnd:30,
    borderRadius:15,
    backgroundColor:"#DBE9F4",
  },
  cont3:{
    flex:0,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:10
  },
 
  button: {
    flex: 0,
    backgroundColor:"#3D0069",
    borderRadius:7,
    padding:10,
},
  
})


export default App;