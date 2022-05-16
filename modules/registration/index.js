import React, { Component } from "react";
import { TextInput, TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import { validateEmail } from "./constants.js";
import { useDispatch } from "react-redux";
import { signupRequest } from "./auth";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";
import CheckBox from '@react-native-community/checkbox';
//
import { useTranslation } from "react-i18next";
//import Header from "src/components/Header";
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
import { cos } from "react-native-reanimated";
import axios from 'axios';
class RegistrationScreen extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            passcode: "",
            fullname: "",
            username: "",
            email: "",
            age: "",
            genres: "",
            password: "",
            confirmPassword: "",
            error: {},
            toggleCheckBox: false,
            isDatePickerVisible: false,
            isEndDatePickerVisible: false,
            date: new Date(),
            signupLoader:false,
        };
    }
    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
    };
    handleConfirm = (date) => {
        this.setState({ age: date });
        this.hideDatePicker();
    };
    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true });
    };
    setInput = (text, name) => {
        const error = { ...this.state.error };
        delete error[name];
        this.setState((prevState) => ({ error, [name]: text }));
    };
    onSignupPress = async () => {
        const { passcode,
            fullname,
            username,
            email,
            age,
            genres,
            password,
            confirmPassword,
            signupLoader,
            error, toggleCheckBox } = this.state;

        if (!validateEmail.test(email)) {
            ToastAndroid.showWithGravityAndOffset(
                "Please enter a valid password",
                ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            return
        }
        if (!fullname) {
            ToastAndroid.showWithGravityAndOffset(
                "Please enter your Full Name",
                ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            return
        }


        if (!passcode) {
            ToastAndroid.showWithGravityAndOffset(
                "Please enter your Passcode",
                ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            return
        }

        if (!username) {
            ToastAndroid.showWithGravityAndOffset(
                "Please enter your desired Username",
                ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            return
        }
        if (!age) {
            ToastAndroid.showWithGravityAndOffset(
                "Please enter your Age",
                ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            return
        }
        if (!password) {
            ToastAndroid.showWithGravityAndOffset(
                "Please enter a valid password",
                ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            return
        }

        if (!confirmPassword) {
            ToastAndroid.showWithGravityAndOffset(
                "Confirm the entered password",
                ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            return
        }

        if (confirmPassword != password) {
            ToastAndroid.showWithGravityAndOffset(
                "Passwords do not match",
                ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            return
        }
        try {
            this.setState({signupLoader:true})
            if (await isInternetReachable()) {
                let body = {
                    passcode: passcode,
                    full_name: fullname,
                    username: username,
                    age: age,
                    preferred_genre: genres == '' ? "" : genres,
                    email: email,
                    password: password,
                    confirm_password: confirmPassword,
                    privacy_policy: false
                }
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // 'Authorization': `Bearer ${getToken}`
                    },
                    body: JSON.stringify(body)
                };
                fetch(
                    "https://song-equities-tradi-30156.botics.co/api/v1/signup/",
                    requestOptions,
                )
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("res", data)
                        this.setState({signupLoader:false})
                        ToastAndroid.showWithGravityAndOffset(
                            "Registered Successfully",
                            ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                            this.setState({signupLoader:false})
                            this.props.navigation.navigate("RegistrationSuccess")
                    })
                    .catch((error) => {
                        this.setState({signupLoader:false})
                        ToastAndroid.showWithGravityAndOffset(
                            error,
                            ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                            this.setState({signupLoader:false})
                    });

            }
            else{
                ToastAndroid.showWithGravityAndOffset(
                    "You are not connected to the internet",
                    ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                    this.setState({signupLoader:false})
                return
            }
        } catch (error) {
            this.setState({signupLoader:false})
            console.log("err", error)
        }

    };
    // B = (props) => <Text style={{ color: 'blue' }}>{props.children}</Text>

    render() {
        const { passcode,
            fullname,
            username,
            email,
            age,
            genres,
            password,
            confirmPassword,
            signupLoader,
            error, toggleCheckBox } = this.state;
        return (
            <ScrollView style={styles.scrollView}>
                <SafeAreaView style={styles.mainContainer}>
                    <View style={styles.bottom}>
                        <View style={styles.subcontainer}>
                            <Text h3 style={styles.h1}>Enjoy trading music equities!</Text>
                            <Text h5 style={styles.h2}>Fill the information required bellow correctly to create an account
                                with Symphony App
                            </Text>
                        </View>
                        <View style={{ flexGrow: 1, paddingHorizontal: 23, marginTop: 15 }}>
                            <View style={{ flexGrow: 1 }}>
                                <Input
                                    label="Passcode*"
                                    placeholder="As it appears on your ID or Passport"
                                    // icon={{
                                    //     name: "cellphone",
                                    // }}
                                    value={passcode}
                                    onChangeText={(text) => this.setInput(text, "passcode")}
                                    error={error.passcode}
                                />
                                <Input
                                    label="Full Name*"
                                    placeholder="As it appears on your ID or Passport"
                                    // icon={{
                                    //     name: "cellphone",
                                    // }}
                                    value={fullname}
                                    onChangeText={(text) => this.setInput(text, "fullname")}
                                    error={error.fullname}
                                />
                                <Input
                                    label="Username*"
                                    placeholder="Cool name to appear in your profile"
                                    // icon={{
                                    //     name: "account",
                                    // }}
                                    value={username}
                                    onChangeText={(text) => this.setInput(text, "username")}
                                    error={error.username}
                                />

                                <Input
                                    label="Email*"
                                    placeholder="Cool email to appear in your profile"
                                    // icon={{
                                    //     name: "cellphone",
                                    // }}
                                    value={email}
                                    onChangeText={(text) => this.setInput(text, "email")}
                                    error={error.email}
                                />
                                <View style={{ flexDirection: "row", flex: 1, }}>
                                    <Input
                                        label="Age*"
                                        placeholder="Day - Month - Year"
                                        // icon={{
                                        //     name: "cellphone",
                                        // }}
                                        containerStyle={{ width: "100%" }}
                                        //value={this.state.date.toLocaleDateString()}
                                        onChangeText={(text) => this.setInput(text, "age")}
                                        error={error.age}
                                    />

                                    {this.state.isDatePickerVisible && (
                                        <DateTimePickerModal
                                            isVisible={this.state.isDatePickerVisible}
                                            mode="date"
                                            maximumDate={new Date()}
                                            onConfirm={this.handleConfirm}
                                            onCancel={this.hideDatePicker}
                                        />
                                    )}

                                    <View
                                        style={{
                                            height: 46,
                                            width: 36,
                                            alignSelf: 'center',
                                            position: 'absolute',
                                            top: 39,
                                            right: 6,
                                            zIndex: 15,
                                            elevation: (Platform.OS === 'android') ? 50 : 0

                                        }}
                                    >
                                        <Icon
                                            name="calendar-range-outline"
                                            onPress={this.showDatePicker}
                                        />
                                    </View>
                                </View>

                                <Input
                                    label="Genres*"
                                    placeholder="Choose 3 favourite music types"
                                    // icon={{
                                    //     name: "cellphone",
                                    // }}
                                    value={genres}
                                    onChangeText={(text) => this.setInput(text, "genres")}
                                    error={error.genres}
                                />
                                <Input
                                    label="Password*"
                                    placeholder="8 digit code"
                                    secureTextEntry
                                    // icon={{
                                    //     name: "lock",
                                    // }}
                                    value={password}
                                    onChangeText={(text) => this.setInput(text, "password")}
                                    error={error.password}
                                />
                                <Text h6 style={styles.passwordtext}>At least 8 charcters with at least one special character</Text>
                                <Input
                                    label="Confirm Password*"
                                    placeholder="8 digit code"
                                    secureTextEntry
                                    // icon={{
                                    //     name: "lock",
                                    // }}
                                    value={confirmPassword}
                                    onChangeText={(text) => this.setInput(text, "confirmPassword")}
                                    error={error.confirmPassword}
                                />
                                <Text h6 style={styles.passwordtext}>Must match the password input in the previous input.</Text>
                            </View>

                            <View style={styles.checkBox}>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    style={{ marginTop: 20 }}
                                    onValueChange={() => this.setState({ toggleCheckBox: !this.state.toggleCheckBox })}
                                />
                                <View style={{ width: "90%", alignItems: "center", left: -10 }}>
                                    <Text style={styles.textCheckbox}>I have read and agreed to the <Text style={styles.blueLine}>privacy policy</Text> and the <Text style={styles.blueLine}>terms & conditions</Text> regarding the use of Symphony App.</Text>
                                </View>
                            </View>
                            <View
                                style={styles.addDeviceFooter}
                            >
                                <Button
                                    title="Sign Up"
                                    loading={signupLoader}
                                    onPress={this.onSignupPress}
                                    containerStyle={{ width: "100%" }}
                                />
                            </View>
                        </View>


                        <View style={styles.footer}>
                            <Text style={styles.alreadyAccount}>All ready have an account? </Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                                <Text style={styles.blueLine}>Log in </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </SafeAreaView>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    textPassword: {
        marginLeft: 19, fontSize: 12, color: "#343A40", top: -6,
    },
    passwordtext: { color: "#343A40", marginLeft: 15, top: -8 },
    addDeviceFooter: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    alreadyAccount: {
        color: "#343A40"
    },
    textCheckbox: {
        fontSize: 13, color: "#343A40", width: "94%", fontStyle: 'italic',
    },
    label: { marginLeft: 19, fontSize: 14, color: "#343A40", fontWeight: "normal", top: 10 },

    submitButtonText: {
        color: 'white'
    },
    mainContainer: {
        flex: 1,
        paddingVertical: 20,
        backgroundColor: "#FFFFFF"
    },
    bottom: {
        backgroundColor: '#fff',
    },
    subcontainer: {
        width: "80%",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center"
    },
    Input: {
        padding: 10,
        borderRadius: 20,
        borderColor: "grey",
        borderWidth: 1,
    },

    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15,
        width: "100%",
        height: 35,
        backgroundColor: '#CD8A30',
        borderRadius: 24,
    },
    submitButtonText: {
        color: '#FFFFFF'
    },

    h1: {
        fontSize: 20,
        textAlign: 'center',
        color: '#343A40',
        fontWeight: "bold"
    },
    h2: {
        alignSelf: "center",
        marginTop: 3,
        textAlign: 'center',
        color: '#343A40',
        width: "70%"
    },
    checkBox: {
        width: "100%",
        flexDirection: "row",
        // marginLeft: 10,
        marginTop: 20
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    blueLine: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default RegistrationScreen;