import React from "react"
import {
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Button from "../../src/components/Button"
function Splash2(props) {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        style={styles.mainContainer}
        source={require("../../assets/background.png")}
      >
        <View style={styles.top}>
          <Image
            source={require("../../assets/logo-name.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.holder}>
            <Text style={styles.h1}>Trade Music</Text>
            <Text style={styles.h1}>Equities like a Pro</Text>
            <Text style={styles.h2}>
              Symphony lets you trade music equities like a pro and
              commission-free using virtual currency.
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              paddingTop: 35,
              // paddingBottom: insets.bottom ? insets.bottom : 15,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Button
              title="Login"
              //loading={payLoader}
              containerStyle={{ width: "47%" }}
              onPress={() => {
                props.navigation.navigate("Login")
              }}
            />
            <Button
              title="Sign Up"
              //loading={shareLoader}
              //loadingProps={{ color: colors.primary }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#CD8A30"
              }}
              titleStyle={{ color: "#CD8A30" }}
              containerStyle={[styles.creditSale, { width: "47%" }]}
              onPress={() => {
                props.navigation.navigate("Register")
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 40,
              marginHorizontal: 25
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#D8A158" }} />
            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  top: -2,
                  marginLeft: 10,
                  marginRight: 10
                }}
              >
                Log in with
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "#D8A158" }} />
          </View>
          <View style={styles.SocialIcons}>
            <Image source={require("../../assets/google-icon.png")} />

            <Image source={require("../../assets/facebook-icon.png")} />

            <Image source={require("../../assets/apple-icon.png")} />

            <Image source={require("../../assets/spotify-icon.png")} />
          </View>
          <View style={styles.bottomInfoGroup}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ResetPassword")}
            >
              <Text style={styles.forgetText}>Forgot Password? </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  top: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.3
  },
  bottom: {
    alignItems: "center",
    flex: 0.6
  },
  logo: {
    width: 243,
    height: 60
  },
  holder: {
    top: "0%"
  },
  h1: {
    // fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 44,
    textAlign: "center",
    color: "#FFFFFF"
  },
  h2: {
    // // fontFamily: 'Roboto',
    fontStyle: "normal",
    fontWeight: "normal",
    marginTop: 10,
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#FFFFFF"
  },
  bottomInfoGroup: {
    width: "100%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  },
  forgetText: {
    color: "#FFFFFF",
    textDecorationLine: "underline"
  },
  SocialIcons: {
    marginTop: 30,
    width: "45%",
    flexDirection: "row",
    justifyContent: "space-around"
  }
})

export default Splash2
