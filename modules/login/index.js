import React, { useState } from 'react';
import {
    Image, SafeAreaView,
    Alert,
    TouchableOpacity,
    ImageBackground,ScrollView, StyleSheet, View,KeyboardAvoidingView
} from 'react-native';

import { validateEmail } from "./constants.js";
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from "./auth";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";
//
import Icon from "../../src/components/Icon";
import Text from "../../src/components/Text";
import { useTheme } from "@react-navigation/native";
import { connect } from "react-redux";
import Button from "../../src/components/Button";
import Input from "../../src/components/Input";
import { compose } from "redux";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { replace } from "lodash";
import { Keyboard } from "react-native";
import DateTimePickerModal from "@react-native-community/datetimepicker";
import { AuthContext } from "../../src/utils/auth-context";
import { showMessage } from "react-native-flash-message";
import { isInternetReachable } from "../../src/services/network";
import { apiEndpoints, endpoints } from "../../src/services/wcsv-service";
import { postDataUsingSimplePostCall } from '../../src/services/API'

function LoginScreen(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signinLoader, setsigninLoader] = useState(false)
    const [error, setError] = useState("")
    const dispatch = useDispatch();
    const onSigninPress = async () => {
        if (!username){
            ToastAndroid.showWithGravityAndOffset(
                "Please enter a valid Username",
                ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                return
        }
        if (!password)
            {
                ToastAndroid.showWithGravityAndOffset(
                    "Please enter a valid password",
                    ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                    return;
            }
                try {
                    setsigninLoader(true)
                    if (await isInternetReachable()) {
                        let body = {
                            username: username,
                            password: password,
                        }
                        console.log("Asdsadas", body)
                        const requestOptions = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // 'Authorization': `Bearer ${getToken}`
                            },
                            body: JSON.stringify(body)
                        };
                        fetch(
                            "https://song-equities-tradi-30156.botics.co/api/v1/login/",
                            requestOptions,
                        )
                            .then((res) => res.json())
                            .then((data) => {
                                console.log("res", data)
                                setsigninLoader(false)
                                ToastAndroid.showWithGravityAndOffset(
                                    "Waiting for login Correct response",
                                    ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                                    setsigninLoader(false)

                                    //this.props.navigation.navigate("RegistrationSuccess")
                            })
                            .catch((error) => {
                                setsigninLoader(false)
                                ToastAndroid.showWithGravityAndOffset(
                                    error,
                                    ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                                    setsigninLoader(false)
                            });
                    }
                    else{
                        ToastAndroid.showWithGravityAndOffset(
                            "You are not connected to the internet",
                            ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                            setsigninLoader(false)
                        return
                    }
                } catch (error) {
                    setsigninLoader(false)
                    console.log("err", error)
                }
    };
    return (
      
        <SafeAreaView style={styles.mainContainer}>
          
              <ScrollView
                contentContainerStyle={{
                  flexGrow: 1,
                  justifyContent: "space-between",
                }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
              >
            <View style={styles.top}>
                <View style={styles.image}>
                    <Image
                        source={require("../../assets/logo-name.png")}
                    />
                </View>
                <View style={styles.topHeader}>
                    <Text style={styles.textColor}>Welcome back!</Text>
                    <View style={{width:"70%",alignItems:"center"}}>
                    <Text style={styles.textColor}>Appropriately input your account's email address
                        and the corresponding password in the fields below to login.</Text>
                    </View>
                    
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={{ flexGrow: 1, paddingHorizontal: 23, marginTop: 35 }}>
                    <View style={{ flexGrow: 1 }}>
                        <Input
                            label="Username"
                            placeholder="Username"
                            // icon={{
                            //     name: "email",
                            //     color:"#555555"
                            // }}
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                        />
                        <Input
                            label="Password"
                            placeholder="Password"
                            //secureTextEntry
                            // icon={{
                            //     name: "lock",
                            // }}
                           
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <View
                            style={styles.btnLogin}
                        >
                            <Button
                                title="Login"
                                loading={signinLoader}
                                onPress={onSigninPress}
                                containerStyle={{ width: "100%" }}
                            />
                        </View>
                        <View style={styles.bottomInfoGroup}>
                            <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                                <Text style={styles.blueLine}>Forgot Password? </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginHorizontal: 25, }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#D8A158' }} />
                            <View>
                                <Text style={{ textAlign: 'center', color: "#343A40", top: -2, marginLeft: 10, marginRight: 10 }}>Log in with</Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#D8A158' }} />
                        </View>
                        <View style={styles.SocialIcons}>
                            <Image
                                source={require("../../assets/google-icon.png")}
                            />
                            <Image
                                source={require("../../assets/facebook-icon.png")}
                            />
                            <Image
                                source={require("../../assets/apple-icon.png")}
                            />
                            <Image
                                source={require("../../assets/spotify-icon.png")}
                            />
                        </View>
                        <View style={styles.notYet}>
                                <View style={{flexDirection:"row"}}>
                                <Text>Not yet a member? </Text>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                                <Text style={styles.blueLine}>Signup</Text>
                                </TouchableOpacity>
                                </View>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
           
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#CD8A30',
    },
    textColor:{
        color:"#ECEBEA",
        textAlign:"center"
    },
    top: {
        flex: 0.3,
        backgroundColor: '#CD8A30',
        justifyContent: "center"
    },
    btnLogin: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    bottom: {
        flex: 0.7,
        backgroundColor: '#ffff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
    },
    topHeader: {
        marginTop:30,
        alignItems: 'center',
    },
    bottomInfoGroup: {
        flexDirection: 'row',
        justifyContent:"flex-end",
        marginTop: 8
    },
    notYet:{
        flexDirection: 'row',
        justifyContent:"center",
        marginTop: 28
    },
    blueLine: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    SocialIcons: {
        justifyContent:"space-between",
        alignSelf:"center",
        flexDirection: "row",
        marginTop: 15,
        width:"45%"
        
    },
});

export default LoginScreen;
