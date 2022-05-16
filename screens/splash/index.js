import React, { useEffect } from 'react';
import { Image, SafeAreaView, ImageBackground, StyleSheet, Text, View } from 'react-native';

function Splash1(props) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("Welcome");
        }, 3000);

    });
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground
                style={styles.mainContainer}
                source={require("../../assets/background.png")}>
                <View style={styles.header}>
                    <Image
                        source={require("../../assets/logo-name.png")}
                        style={styles.logo} />
                </View>
                <View style={styles.body}>
                    <Image
                        style={styles.logo2}
                        source={require("../../assets/logo.png")} />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.bottomText}>
                    Have fun trading Music Equities like a Pro using our Own Currency as well as inviting your friends to Join in the fun.
                 </Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "black"
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.3,
    },
    logo: {
        width: 243,
        height: 60,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5,
    },
    logo2: {
        width: 90,
        height: 90,
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.7,
    },
    bottomText: {
        padding: 10,
        fontSize: 20,
        fontWeight: "500",
        color: "#FFFFFF",
    }
});
export default Splash1;