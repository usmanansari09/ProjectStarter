/* eslint-disable no-alert */
import React, { useState } from "react"
import {
  Platform,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  ActivityIndicator
} from "react-native"
import { connect } from "react-redux"
import CheckBox from "@react-native-community/checkbox"

import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import MyFlashMessage from "../../../Components/MyFlashMessage";
import { Images, Colors } from "../../../Theme"
import {
  InputField,
  ButtonComponent,
  NavigationHeader
} from "../../../Components"

import styles from "./style"
import useHook from "./hook"

const LoginScreen = props => {
  const {
    userDetail,
    setUserDetail,
    checkbox,
    setCheckbox,
    error,
    setError,
    open,
    value,
    items,
    setItems,
    setValue,
    setOpen,
    date,
    setDate,
    textOnchange,
    // agePicker,
    // genresPicker,
    navigation,
    signup,
    isLoading,
    setIsLoading,
    secondFlashMessage
  } = useHook()
  return (
    <>
      <NavigationHeader
        backIcon
        LeftText="Back"
        LeftOnPress={() => {
          props.navigation.goBack()
        }}
      />

      <ScrollView contentContainerStyle={styles.bottom}>
        <View style={styles.subcontainer}>
          <Text h3 style={styles.h1}>
            Enjoy trading music equities!
          </Text>
          <Text h5 style={styles.h2}>
            Fill the information required bellow correctly to create an account
            with Symphony App
          </Text>
        </View>
        <View style={{ flexGrow: 1, paddingHorizontal: 23, marginTop: 15 }}>
          <View style={{ flexGrow: 1 }}>
            <InputField
              label="Passcode*"
              placeholder="As it appears on your ID or Passport"
              disableFullscreenUI={true}
              onChangeText={text => textOnchange(text, "passcode")}
              error={error?.passcode}
            />
            <InputField
              label="Full Name*"
              placeholder="As it appears on your ID or Passport"
              onChangeText={text => textOnchange(text, "full_name")}
              error={error?.full_name}
            />
            <InputField
              label="Username*"
              placeholder="Cool name to appear in your profile"
              onChangeText={text => textOnchange(text, "username")}
              error={error?.username}
            />

            <InputField
              label="Email*"
              placeholder="Cool email to appear in your profile"
              onChangeText={text => textOnchange(text, "email")}
              error={error?.email}
            />
            <Text style={styles.genres}>Age*</Text>
            <DatePicker
              style={styles.datePicker}
              date={date}

              mode="date"
              placeholder="Day - Month - Year"
              format="MM/DD/YYYY"
              minDate="01-01-1900"
              maxDate={new Date()}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: 6,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderColor: Colors.PRIMARY_02_4,
                  alignItems: "baseline",
                  borderRadius: 25,
                },
                placeholderText: {
                  fontSize: 14,
                  color: "gray",
                  marginLeft: 24
                },
                dateText: {
                  fontSize: 14,
                  marginLeft: 24
                }
              }}
              //onDateChange={agePicker}
              onDateChange={text => textOnchange(text, "age")}
            />
            <Text style={styles.genres}>Genres*</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onChangeValue={text => textOnchange(text, "preferred_genres")}
              max={15}
              autoScroll={true}
              style={styles.dropDown}
              dropDownMaxHeight={300}
            />
            <InputField
              label="Password*"
              placeholder="8 digit code"
              secureTextEntry
              onChangeText={text => textOnchange(text, "password")}
              error={error?.password}
            />
            <Text h6 style={styles.passwordtext}>
              At least 8 charcters with at least one special character
            </Text>
            <InputField
              label="Confirm Password*"
              placeholder="8 digit code"
              secureTextEntry
              onChangeText={text => textOnchange(text, "confirm_password")}
              error={error?.confirm_password}
            />
            <Text h6 style={styles.passwordtext}>
              Must match the password input in the previous input.
            </Text>
          </View>

          <View style={styles.checkBox}>
            <CheckBox
              disabled={false}
              style={{ marginTop: 20 }}
              onValueChange={() => setCheckbox(!checkbox)}
            />
            <View style={{ width: "90%", alignItems: "center", left: 10 }}>
              <Text style={styles.textCheckbox}>
                I have read and agreed to the
                <Text style={styles.blueLine}>privacy policy</Text> and the
                <Text style={styles.blueLine}>terms & conditions</Text>
                regarding the use of Symphony App.
              </Text>
            </View>
          </View>
          {isLoading ? (
            <View style={[styles.loader, styles.horizontal]}>
              <ActivityIndicator size="large" color={"#000"} />
            </View>
          ) : (
            <ButtonComponent buttonText="Sign Up" onPress={signup} />
          )}
        </View>

        <View style={styles.footer}>
          <Text style={styles.alreadyAccount}>All ready have an account? </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("LoginScreen")}
          >
            <Text style={styles.blueLine}>Log in </Text>
          </TouchableOpacity>
        </View>
        <MyFlashMessage innerRef={secondFlashMessage} position="bottom" />
      </ScrollView>
    </>
  )
}

export default connect()(LoginScreen)
