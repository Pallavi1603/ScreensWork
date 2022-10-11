import React from "react";
import {View,Text,Image,StyleSheet,navigation} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';


  const Screen2=()=>{
    return(
        <View style={{marginTop:20}}>
       <View style={styles.cont}>
        <Text style={{fontSize:28,marginLeft:30,fontFamily:"Montserrat-Medium",color:"grey"}}>
            Hello,
        </Text>
        <Image
            source={require("./assets/human-hand-holding-mobile-phone/Men.jpg")}
            style={{height:60,width:65,borderRadius:20,marginLeft:270}}
        />
       </View>
       <Text style={{marginLeft:30,fontSize:28,fontFamily:"Montserrat-Bold",color:"black"}}>
        Abdur Rahman
       </Text>
      <View style={styles.cont}>
        <Text style={{color:"white",fontSize:17,backgroundColor:"#9b6dff",
      color:"white",padding:20,marginLeft:30,borderRadius:20,paddingLeft:50,paddingRight:50,fontFamily:"Montserrat-Bold"}}>My Day</Text>
       <Text style={{fontSize:17,backgroundColor:"#DBE9F4",
      color:"black",padding:20,marginLeft:30,borderRadius:20,paddingLeft:50,paddingRight:50,fontFamily:"Montserrat-Bold"}}>Important</Text>
      </View>
      <Text style={{marginLeft:30,marginTop:40,fontSize:17,fontFamily:"Montserrat-Medium",color:"grey"}}>Tasks</Text>
      <View style={{marginTop:30,backgroundColor:"#DBE9F4",padding:17,marginLeft:15,marginRight:15,borderRadius:20}} >
      <Text style={{fontFamily:"Montserrat-Bold",fontSize:20,color:"black"}}>Meeting with Alex {"\u2B22" + "   "}</Text>
      <View style={styles.cont}>
     <FontAwesome5 name="clock" style={{fontSize:15}}/><Text style={{marginLeft:5,fontFamily:"Montserrat-Medium",color:"grey"}}>12:30 PM - 1:00 PM</Text>
     <Entypo name="circle" style={{marginLeft:220,fontSize:25}}/>
     </View>
      </View>
      <View style={{marginTop:20,backgroundColor:"#DBE9F4",padding:17,marginLeft:15,marginRight:15,borderRadius:20}} >
      <Text style={{fontFamily:"Montserrat-Bold",fontSize:20,color:"black"}}>Project Review : Crodox {"\u2B22" + "   "}</Text>
      <View style={styles.cont}>
     <FontAwesome5 name="clock" style={{fontSize:15}}/><Text style={{marginLeft:5,fontFamily:"Montserrat-Medium",color:"grey"}}>2:30 PM - 3:45 PM</Text>
     <Entypo name="circle" style={{marginLeft:220,fontSize:25}}/>
     </View>
     <Text style={{fontSize:15,fontFamily:"Montserrat-Medium",marginTop:10,color:"grey"}}>All illustration design should be  handover</Text>
     <Text style={{fontSize:15,fontFamily:"Montserrat-Medium",color:"grey"}}>to Smith for review</Text>
      </View>
      <Text style={{marginLeft:30,marginTop:50,fontSize:17,fontFamily:"Montserrat-Medium",color:"grey"}}>Completed</Text>
      <View style={{marginTop:40,backgroundColor:"#DBE9F4",padding:17,marginLeft:15,marginRight:15,borderRadius:20}} >
      <Text style={{fontFamily:"Montserrat-Bold",fontSize:20,color:"black",textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>Meeting with Mark</Text>
      <View style={styles.cont}>
     <FontAwesome5 name="clock" style={{fontSize:15}}/><Text style={{marginLeft:5,fontFamily:"Montserrat-Medium",color:"grey"}}>10:30 PM - 11:00 PM</Text>
     <AntDesign name="checkcircleo" style={{marginLeft:220,fontSize:25,color:"#9b6dff"}}/>
     </View>
      </View>
      <View style={styles.cont}>
      <AntDesign name="home" style={{marginTop:83,marginLeft:45,fontSize:30,color:"#9b6dff"}}/>
      <AntDesign name="plussquare" style={{marginTop:75,marginLeft:125,fontSize:50,color:"#ffa590"}} />
      <AntDesign name="setting" style={{marginTop:89,marginLeft:130,fontSize:25,color:"grey"}}/>
        </View>
     
        
     </View>
    )
}

 
const styles= StyleSheet.create({
    cont:{
      flex:0,
      flexDirection:"row",
      marginTop:10
    },
})

export default Screen2;