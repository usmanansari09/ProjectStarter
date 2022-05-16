import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../../Components';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Images, Colors } from '../../Theme';
import MyFlashMessage from "../../Components/MyFlashMessage";
import styles from './style';
function LandingPage(props) {
  const navigation = useNavigation();
  const secondFlashMessage = React.createRef();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground style={styles.mainContainer} source={Images.BACKGROUND}>
        <View style={styles.top}>
          <Image source={Images.LOGO_NAME} style={styles.logo} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.holder}>
            <Text style={styles.h1}>Trade Music</Text>
            <Text style={styles.h1}>Equities like a Pro</Text>
            <Text style={styles.h2}>
              Symphony lets you trade music equities like a pro and commission-free using virtual
              currency.
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              paddingTop: 35,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', width: '100%' }}>
              <ButtonComponent
                buttonText="Login"
                style={{
                  width: '48%',
                  marginRight: '4%',
                }}
                onPress={() => {
                  props.navigation.navigate('LoginScreen');
                }}
              />
              <ButtonComponent
                buttonText="Signup"
                textStyles={{ color: Colors.PRIMARY_02_2 }}
                style={{ backgroundColor: Colors.PRIMARY_02_4, width: '48%' }}
                onPress={() => {
                  props.navigation.navigate('SignupScreen');
                  // secondFlashMessage.current.showMessage({
                  //   message:"sadasdas",
                  //   description:"asdasd",
                  //   type: "danger",
                  // });
                
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 40,
              marginHorizontal: 25,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: Colors.PRIMARY_01_1,
              }}
            />
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
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
          <View style={styles.bottomInfoGroup}>
            <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
              <Text style={styles.forgetText}>Forgot Password? </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <MyFlashMessage innerRef={secondFlashMessage} position="top" />
    </SafeAreaView>
  );
}

export default LandingPage;
