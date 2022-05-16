/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Image, SafeAreaView, TouchableOpacity, Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Images, Colors } from '../../../Theme';
import { InputField, ButtonComponent } from '../../../Components';

import styles from './style';
import useHook from './hook';
import MyFlashMessage from "../../../Components/MyFlashMessage";
const LoginScreen = (props) => {
  const { textOnchange, login, setIsLoading, secondFlashMessage} = useHook();

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.top}>
            <View style={styles.image}>
              <Image source={Images.LOGO_NAME} />
            </View>
            <View style={styles.topHeader}>
              <Text style={styles.textColor}>Welcome back!</Text>
              <View style={{ width: '70%', alignItems: 'center' }}>
                <Text style={styles.textColor}>
                  Appropriately input your account's email address and the corresponding password in
                  the fields below to login.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={{ flex: 1, backgroundColor: Colors.PRIMARY_01 }}>
        <ScrollView contentContainerStyle={styles.bottom}>
          <View style={{ flexGrow: 1 }}>
            <InputField
              label="Email Address"
              placeholder="Email Address"
              keyboardType="email-address"
              disableFullscreenUI={true}
              onChangeText={(text) => textOnchange(text, 'username')}
            />

            <InputField
              label="Password"
              placeholder="Password"
              keyboardType="email-address"
              secureTextEntry={true}
              disableFullscreenUI={true}
              onChangeText={(text) => textOnchange(text, 'password')}
            />
            <View style={styles.btnLogin}>
              <ButtonComponent buttonText="Login" style={{ marginTop: 20 }} onPress={login} />
            </View>
            <View style={styles.bottomInfoGroup}>
              <TouchableOpacity
              // onPress={() => navigation.navigate("ResetPassword")}
              >
                <Text style={styles.blueLine}>Forgot Password? </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                marginHorizontal: 25,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: '#D8A158' }} />
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#343A40',
                    top: -2,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  Log in with
                </Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#D8A158' }} />
            </View>
            <View style={styles.SocialIcons}>
              <Image source={Images.google_icon} />
              <Image source={Images.facebook_icon} />
              <Image source={Images.apple_icon} />
              <Image source={Images.spotify_icon} />
            </View>
            <View style={styles.notYet}>
              <View style={{ flexDirection: 'row' }}>
                <Text>Not yet a member? </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('SignupScreen')}>
                  <Text style={styles.blueLine}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <MyFlashMessage innerRef={secondFlashMessage} position="bottom" />
        </ScrollView>
      </View>
    </>
  );
};

export default connect()(LoginScreen);
