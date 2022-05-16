import React from 'react';
import { TextInput, Image, TouchableOpacity, ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import Button from "../../src/components/Button";
import Icon from "../../src/components/Icon";
import Text from "../../src/components/Text";
function EmailVerificationSuccess(props) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <Image
                    source={require("../../assets/Success.png")}
                    style={styles.logo} />
                     <View style={styles.description}>
                    <Text style={styles.subDescription}>Account email successfully verified</Text>
                    <Text>Proceed to<Text style={styles.blueLine}> login ?</Text></Text>
            </View>  
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:"#FFFFFF"
    },
    description: {
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop:40
    },
    logo: {
        height: 150,
        width: 150,
    },
    subContainer: {
        alignItems: 'center',
       marginTop:50,
        backgroundColor: '#fff',
    },
    subDescription: {
        fontSize: 21,
        textAlign: 'center',
        color: '#84BD15',
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

export default EmailVerificationSuccess;