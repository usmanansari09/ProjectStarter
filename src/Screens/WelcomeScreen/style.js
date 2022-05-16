import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
  },
  bottom: {
    alignItems: 'center',
    flex: 0.6,
  },
  logo: {
    width: 243,
    height: 60,
  },
  holder: {
    top: '0%',
  },
  h1: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 44,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  h2: {
    // // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginTop: 10,
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  bottomInfoGroup: {
    width: '100%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  forgetText: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  SocialIcons: {
    marginTop: 30,
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
