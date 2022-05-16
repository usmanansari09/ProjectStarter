import { StyleSheet } from 'react-native';

import { Images, Colors } from '../../../Theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.4,
    backgroundColor: Colors.PRIMARY_01,
  },
  textColor: {
    color: '#ECEBEA',
    textAlign: 'center',
  },
  top: {
    flex: 0.3,
    backgroundColor: Colors.PRIMARY_01,
    justifyContent: 'center',
  },
  btnLogin: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  bottom: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  topHeader: {
    marginTop: 30,
    alignItems: 'center',
  },
  bottomInfoGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  notYet: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 28,
  },
  blueLine: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  SocialIcons: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 15,
    width: '45%',
  },
});

export default styles;
