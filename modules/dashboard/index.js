import React , { useState }  from 'react';
import {TextInput,TouchableOpacity, Image, ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { useSelector,useDispatch } from "react-redux";
import { logoutRequest } from "./auth";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";

function Dashboard(props) {
    const [genre, setGenre] = useState("");
    const [password, setPassword] = useState("");
    const [validationError, setValidationError] = useState({
        genre: "",
        password: "",
      });



      const dispatch = useDispatch();

      const onLogoutPress = async () => {
         
          dispatch(logoutRequest())
          .then(unwrapResult)
          .then((res) => {
            ToastAndroid.showWithGravityAndOffset(
                "You have been logged out.",
                  ToastAndroid.LONG,ToastAndroid.BOTTOM,25, 50);
            props.navigation.navigate('Login');
           
          })
          .catch((err) => {
              console.log(err.message);
              if(err.message=="Request failed with status code 400"){
                ToastAndroid.showWithGravityAndOffset(
                   "Invalid credentials.",
                     ToastAndroid.LONG,ToastAndroid.BOTTOM,25, 50);
              }
    
              if(err.message=="Request failed with status code 403"){
                ToastAndroid.showWithGravityAndOffset(
                   "You do not have access to this resource.",
                     ToastAndroid.LONG,ToastAndroid.BOTTOM,25, 50);
              }
    
              if(err.message=="Request failed with status code 500"){
                ToastAndroid.showWithGravityAndOffset(
                   "Unexpected Server Error.",
                     ToastAndroid.LONG,ToastAndroid.BOTTOM,25, 50);
              }
    
              if(err.message=="Network Error"){
                ToastAndroid.showWithGravityAndOffset(
                   "Unexpected Server Error.",
                     ToastAndroid.LONG,ToastAndroid.BOTTOM,25, 50);
              }
             
          
        });
        
      };
    

    return (

        <SafeAreaView style={styles.mainContainer}>

        <View style={styles.top}>

        <View style={styles.leftFloatText}>
            <Text
             style={styles.TextGrey1}>John Pablo Smith</Text> 
            </View>

            <View style={styles.topHolder}>
            <Image 
        source={require("../../assets/profile.png")}
        style={styles.logo}/>

            <View style={styles.topHeader}>

            <Text
            style={styles.TextGrey2}>Username.</Text> 
            <Text
            style={styles.TextGrey3}>JohnPablo@gmail.com.</Text> 

            </View>
                        </View>

            
        
          

          

        </View>

        <View style={styles.bottom}>
        
        <View style={styles.inputHolder1}>

        <Text> Genres</Text>
        <TextInput
        style={styles.emailInput}
        autoCapitalize="none"
        placeholder="Pop, Reggae, jazz, Change"
        underlineColorAndroid="transparent"
        onChangeText={(value) => setGenre(value)}
          value={genre}
          error={validationError.genre}/>
        </View>

        <View style={styles.inputHolder2}>

        <Text> Password</Text>
        <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        onChangeText={(value) => setPassword(value)}
        value={password}
        error={validationError.password}/>
        </View>



        <TouchableOpacity  
        
        style={styles.buttonHolder} >
            <View
            style={styles.loginButton}>
                <Text style={styles.loginButtonText}
                >Update Password</Text>
            </View> 

        </TouchableOpacity>

        <TouchableOpacity  
        style={styles.buttonHolder1} >
            <View>
                <Text style={styles.TextOrange}
                >Terms and Conditions</Text>
            </View> 

        </TouchableOpacity>


        <TouchableOpacity  
        style={styles.buttonHolder2} >
            <View>
                <Text style={styles.TextOrange}
                >Privacy Policy</Text>
            </View> 

        </TouchableOpacity>

        <TouchableOpacity  
        onPress={onLogoutPress}
        style={styles.buttonHolder3} >
            <View>
                <Text style={styles.TextGrey}
                >LOG OUT</Text>
            </View> 

        </TouchableOpacity>






    </View>

           

        </SafeAreaView>
      
    );
}

const styles = StyleSheet.create({
    mainContainer: {
       flex: 1,
    },
    top: {
        flex: 0.3,
        backgroundColor:'#fff',
    },
    bottom: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flex: 0.7,
        backgroundColor:'#fff',
    },
    leftFloatText:{
        
        right: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    TextGrey1:{
        fontSize: 23,
        color: '#808080',
    },
TextGrey2:{
    fontSize: 17,
    color: '#808080',
},
TextGrey3:{
    top: 10,
    fontSize: 17,
    color: '#808080',
},
    topHeader:{
        top:'6%',
        
        left: 40,
    },
    topHolder:{
        flexDirection: 'row',
    },
    logo: {
        left: 10,
        height: 100,
        width: 100,
    },
   
    inputHolder1:{
        paddingLeft: 10,
        paddingRight: 10,
        top: '10%',
    },
    inputHolder2:{
        paddingLeft: 10,
        paddingRight: 10,
        top: '15%',

    },
    emailInput:{
        
        padding: 10,
        borderRadius: 20,
        borderColor: "grey",
        borderWidth: 1,
    },
    passwordInput:{
        
        padding: 10,
        borderRadius: 20,
        borderColor: "grey",
        borderWidth: 1,
    },
    buttonHolder:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        top: '30%',
    },
    buttonHolder1:{
        left:10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        top: '35%',
    },
    buttonHolder2:{
        left:10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        top: '40%',
    },
    buttonHolder3:{
        left:10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        top: '50%',
    },
    loginButton:{
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15,
        width: 150,
        height: 40,
        backgroundColor: '#CD8A30',
        borderRadius: 24,
    },
    loginButtonText: {
        color: '#fff'
    },
 
    TextOrange:{
        color: '#CD8A30',
    },
    TextGrey:{
        color: '#808080',
    }
});



export default Dashboard;