import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const Screen3=()=>{
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
        <View style={{flex:0,alignItems:"center",marginTop:40,borderTopLeftRadius:60,backgroundColor:"#dddddd",
        borderTopRightRadius:60,}}>
        <Text style={{fontSize:33,color:"grey",fontFamily:"Montserrat-Bold"}}>__________</Text>
        <Text style={{fontSize:22,marginTop:10,fontFamily:"Montserrat-Bold",color:"black"}}>Create a Task</Text>
        </View>
        <View style={{backgroundColor:"#dddddd"}}>
        <Text style={{marginLeft:20,marginTop:30,color:"grey",fontSize:15,fontFamily:"Montserrat-Medium"}}>Task title</Text>
        <TextInput
            style={styles.task}
             placeholder="Task title"

        />
        <Text style={{marginLeft:20,marginTop:30,color:"grey",fontSize:15,fontFamily:"Montserrat-Medium"}}>Task type</Text>
        <View style={styles.cont}>
        <Text style={{color:"white",fontSize:17,backgroundColor:"#9b6dff",
      color:"white",padding:17,marginLeft:30,borderRadius:20,paddingLeft:30,paddingRight:30,fontFamily:"Montserrat-Bold"}}>Important</Text>
       <Text style={{fontSize:17,backgroundColor:"#DBE9F4",
      color:"black",padding:17,marginLeft:30,borderRadius:20,paddingLeft:30,paddingRight:30,fontFamily:"Montserrat-Bold"}}>Planned</Text>
      </View>
      <Text style={{marginLeft:20,marginTop:30,color:"grey",fontSize:15,fontFamily:"Montserrat-Medium"}}>Choose date & time</Text>
      <View style={styles.cont}>
        <View style={styles.cont1}>
            <FontAwesome name="calendar-plus-o" style={{fontSize:15,marginTop:20,marginLeft:10,fontFamily:"Montserrat-Bold",color:"black"}}/>
            <Text style={{fontSize:17,backgroundColor:"#DBE9F4",
      color:"black",padding:17,fontFamily:"Montserrat-Bold"}}>Select a date</Text>
        </View>
        <View style={styles.cont1}>
            <FontAwesome5 name="clock" style={{fontSize:15,marginTop:20,marginLeft:10,fontFamily:"Montserrat-Bold",color:"black"}}/>
            <Text style={{fontSize:17,backgroundColor:"#DBE9F4",
      color:"black",padding:17,fontFamily:"Montserrat-Bold"}}>Select Time</Text>
        </View>
      </View>
      <View style={styles.cont}>
        <Text style={{marginLeft:20,marginTop:30,color:"black",fontSize:15,fontFamily:"Montserrat-Bold"}} >Get alert for this task</Text>
        <Text style={{backgroundColor:"#9b6dff",fontSize:15,height:35,paddingRight:40,color:"white",paddingTop:8,paddingLeft:5,marginLeft:180,borderRadius:10,marginTop:30}}>On</Text>
      </View>
      <Text style={{marginTop:50,backgroundColor:"#ffa590",color:"white",padding:20,paddingLeft:185,
      margin:25,borderRadius:20,marginBottom:70,fontSize:15,fontFamily:"Montserrat-Bold"}}>Done</Text>
        </View>
    </View>
    )
}
const styles= StyleSheet.create({
   
    cont:{
        flex:0,
        flexDirection:"row",
        marginTop:10,
      },
      cont1:{
        flex:0,
        flexDirection:"row",
        marginTop:10,
        backgroundColor:"#DBE9F4",
        marginLeft:30,
        marginRight:20

      },
    task:{
        height: 60,
        borderRadius:20,
        padding: 10,
        marginLeft:25,
        marginRight:25,
        marginTop:10,
        backgroundColor:"#DBE9F4"
    }
})
export default Screen3;