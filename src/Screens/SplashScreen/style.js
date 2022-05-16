import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
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
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default styles;
