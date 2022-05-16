import React from 'react';
import { TextInput, Image, TouchableOpacity, ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import Button from "../../src/components/Button";
import Icon from "../../src/components/Icon";
import Text from "../../src/components/Text";
function RegistrationSuccess(props) {
    return (

        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.bottomInfo}>
                <Image
                    source={require("../../assets/Success.png")}
                    style={styles.logo} />
                     <View style={styles.bottom}>
                <View style={styles.bottomInfo}>
                    <Text style={styles.description}>Congratulations! Account successfully created</Text>
                    <View
                        style={styles.btnVerify}
                    >
                        <Button
                            title="Verify Email"
                            //loading={signupLoader}
                            onPress={() => { props.navigation.navigate('EmailVerification') }}
                            containerStyle={{ width: "90%" }}
                        />
                    </View>
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
    btnVerify: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30
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
    bottomInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
    },
    description: {
        fontSize: 21,
        textAlign: 'center',
        color: '#84BD15',
    },
});

export default RegistrationSuccess;