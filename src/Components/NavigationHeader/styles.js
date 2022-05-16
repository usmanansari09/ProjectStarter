import { StyleSheet } from 'react-native';

import { Colors } from '../../Theme';

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    backgroundColor: Colors.PRIMARY_01,
  },

  mainWrapper: {
    width: '100%',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    backgroundColor: Colors.PRIMARY_01,
  },

  mainContainer: {
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },

  viewContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },

  headerView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '60%',
  },

  justifyContent: {
    justifyContent: 'center',
  },

  textStyle: {
    color: Colors.white,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  headerTextFont: {
    fontSize: 17,
  },

  imageStyle: {
    resizeMode: 'contain',
  },
});

export default styles;
