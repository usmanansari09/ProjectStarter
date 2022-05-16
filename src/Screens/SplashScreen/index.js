import React, { useEffect } from 'react';
import { Image, SafeAreaView, ImageBackground, Text, View } from 'react-native';

import { Images } from '../../Theme';
import styles from './style';

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('WelcomeScreen');
    }, 3000);
  });
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground style={styles.mainContainer} source={Images.BACKGROUND}>
        <View style={styles.header}>
          <Image source={Images.LOGO_NAME} style={styles.logo} />
        </View>
        <View style={styles.body}>
          <Image style={styles.logo2} source={Images.LOGO} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.bottomText}>
            Have fun trading Music Equities like a Pro using our Own Currency as well as inviting
            your friends to Join in the fun.
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default SplashScreen;
