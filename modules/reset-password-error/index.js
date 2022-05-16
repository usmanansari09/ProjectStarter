import React from 'react';
import { TextInput, Image, TouchableOpacity, StyleSheet, Text, View, SafeAreaView } from 'react-native';

function ResetPasswordError(props) {
    return (

        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.top}>

                <Image
                    source={require("../../assets/Failure.png")}
                    style={styles.logo} />

            </View>
            <View style={styles.bottom}>

                <View style={styles.description}>
                    <Text style={styles.information}>An error occured during the process.</Text>

                    <View style={styles.subdescription}>
                        <Text style={styles.subdescriptiontext}>Kindly return to </Text>

                        <TouchableOpacity onPress={() => props.navigation.navigate('ResetPassword')}>
                            <Text style={styles.subdescriptionBlueLine}>Reset password? </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    top: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flex: 0.3,
    },
    bottom: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 0.6,
    },
    logo: {
        height: 150,
        width: 150,
    },
    description: {

        alignItems: 'center',
        top: '10%',
    },
    subdescription: {
        flexDirection: 'row',
    },
    information: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 23,

        color: '#F01717',

    },
    subdescriptiontext: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 19,
    },
    subdescriptionBlueLine: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 19,

        color: 'blue',
        textDecorationLine: 'underline',
    }
});

export default ResetPasswordError;