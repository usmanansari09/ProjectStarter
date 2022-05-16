
import React from 'react';
import { TextInput, Image, TouchableOpacity, ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import Button from "../../src/components/Button";
import Icon from "../../src/components/Icon";
import Text from "../../src/components/Text";
function EmailVerificationError(props) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <Image
                    source={require("../../assets/Failure.png")}
                    style={styles.logo} />
                <View style={styles.description}>
                    <Text style={styles.textdescription}>Error occurred during email</Text>
                    <Text style={styles.textdescription}>verification</Text>
                    <View style={{marginTop:6}}>
                    <Text>Kindly return to<Text style={styles.blueLine}> Email Verification ?</Text></Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    description: {
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 40
    },
    logo: {
        height: 150,
        width: 150,
    },
    subContainer: {
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: '#fff',
    },
    textdescription: {
        fontSize: 21,
        textAlign: 'center',
        fontWeight:"900",
        color: 'red',
    },
    blueLine: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 19,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default EmailVerificationError;