import React, { useState } from 'react';
import {
    Image, SafeAreaView,
    Alert,
    TouchableOpacity,
    ImageBackground, ScrollView, StyleSheet, View, KeyboardAvoidingView
} from 'react-native';
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

function EmailVerification(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signinLoader, setsigninLoader] = useState(false)
    const [error, setError] = useState("")
    const dispatch = useDispatch();
    const onSigninPress = async () => {
        if (!username) {
            ToastAndroid.showWithGravityAndOffset(
                "Please enter a valid Username",
                ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            return
        }
        if (!password) {
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
            else {
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
                            source={require("../../assets/code-verification.png")}
                            style={styles.logo} />
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.holder}>
                        <Text style={styles.h1}>Email Verification</Text>
                        <Text style={styles.h2}>Enter the code mailed to you below..</Text>
                    </View>
                    <View style={{ flexGrow: 1, paddingHorizontal: 23, marginTop: 35 }}>
                        <View style={{ flexGrow: 1 }}>
                            <Input
                                label="Verification Code"
                                placeholder="6 digits code"
                                // icon={{
                                //     name: "email",
                                //     color:"#555555"
                                // }}
                                value={username}
                                onChangeText={(text) => setUsername(text)}
                            />
                            <View
                                style={{
                                    width: "100%",
                                    alignSelf: "center",
                                    paddingTop: 20,
                                    // paddingBottom: insets.bottom ? insets.bottom : 15,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Button
                                    title="Proceed"
                                    //loading={payLoader}
                                    containerStyle={{ width: "47%" }}
                                //onPress={() => { props.navigation.navigate('Login') }}
                                />
                                <Button
                                    title="Cancel"
                                    //loading={shareLoader}
                                    //loadingProps={{ color: colors.primary }}
                                    buttonStyle={{
                                        width: "100%",
                                        backgroundColor: "#FFFFFF",
                                        borderWidth: 1,
                                        borderColor: "red",
                                    }}
                                    titleStyle={{ color: "red" }}
                                    containerStyle={[styles.creditSale, { width: "47%" }]}
                                //onPress={() => { props.navigation.navigate('Register') }}
                                />
                            </View>
                           <View style={styles.notGetcode}>
                           <Text style={{lineHeight:10}}>Didn’t receive any email? Check your spam folder.Otherwise,<Text style={styles.bottomText2}> try a different email address?</Text></Text>
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
    textColor: {
        color: "#ECEBEA",
        textAlign: "center"
    },
    bottomText2: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    notGetcode:{
       marginTop:40,
       justifyContent: 'center',
       alignItems: 'center',
    },
    holder: {
        marginLeft: 30,
        marginTop: 30
    },
    top: {
        flex: 0.2,
        backgroundColor: '#CD8A30',
        justifyContent: "center"
    },
    h1: {
        fontSize: 22,
        fontWeight: "bold",
        lineHeight: 34,
        color: '#343A40',
    },
    h2: {
        fontSize: 13,
        lineHeight: 19,
        color: '#343A40',
    },
    btnReset: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    bottom: {
        flex: 1,
        backgroundColor: '#ffff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    topHeader: {
        marginTop: 30,
        alignItems: 'center',
    },
    bottomText2: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    SocialIcons: {
        justifyContent: "space-between",
        alignSelf: "center",
        flexDirection: "row",
        marginTop: 15,
        width: "45%"

    },
});
export default EmailVerification;