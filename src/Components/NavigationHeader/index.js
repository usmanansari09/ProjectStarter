import React, { memo } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';

import { Images, Colors } from '../../Theme/';
import { Home, Calendar, Notification, BackSvg } from '../../Theme/SVG';
import styles from './styles';

const NavigationHeader = ({ ...props }) => (
  <View style={styles.Wrapper}>
    <SafeAreaView>
      <View style={styles.imageContainer}>
        <View style={styles.mainContainer}>
          <TouchableOpacity onPress={props.LeftOnPress} style={styles.viewContainer}>
            {props.backIcon && (
              <BackSvg fill={Colors.WHITE} width={15} height={15} style={{ marginRight: 5 }} />
            )}
            {props.LeftImageSrc && (
              <Image
                source={props.LeftImageSrc}
                style={{
                  ...styles.imageStyle,
                  width: props.LeftImageWidth ? props.LeftImageWidth : 29,
                  height: props.LeftImageHeight ? props.LeftImageHeight : 29,
                }}
              />
            )}
            {props.LeftText && <Text style={{ ...styles.textStyle }}> {props.LeftText} </Text>}
          </TouchableOpacity>

          <View style={styles.headerView}>
            <Text style={{ ...styles.textStyle, ...styles.headerTextFont }}>
              {' '}
              {props.HeaderText}{' '}
            </Text>
          </View>

          <TouchableOpacity
            onPress={props.RightOnPress}
            style={{ ...styles.viewContainer, justifyContent: 'flex-end' }}
          >
            {props.RightImageSrc ? (
              <Image
                source={props.RightImageSrc}
                style={{
                  ...styles.imageStyle,
                  width: props.RightImageWidth ? props.RightImageWidth : 35,
                  height: props.RightImageHeight ? props.RightImageHeight : 35,
                }}
              />
            ) : (
              <View
                style={{
                  ...styles.imageStyle,
                  width: props.RightImageWidth ? props.RightImageWidth : 35,
                  height: props.RightImageHeight ? props.RightImageHeight : 35,
                }}
              />
            )}

            {props.RightText && <Text style={styles.textStyle}> {props.RightText} </Text>}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  </View>
);

export default NavigationHeader;
