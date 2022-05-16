import { StyleSheet } from 'react-native';

import { Images, Colors } from '../../../Theme';
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  textPassword: {
    marginLeft: 19,
    fontSize: 12,
    color: '#343A40',
    top: -6,
  },
  passwordtext: {
    color: '#343A40',
    marginLeft: 15,
    top: 5,
    fontSize: 11,
  },
  loader: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  addDeviceFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  alreadyAccount: {
    color: '#343A40',
  },
  textCheckbox: {
    fontSize: 13,
    color: '#343A40',
    width: '94%',
    fontStyle: 'italic',
  },
  label: {
    marginLeft: 19,
    fontSize: 14,
    color: '#343A40',
    fontWeight: 'normal',
    top: 10,
  },

  submitButtonText: {
    color: 'white',
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  bottom: {
    backgroundColor: '#fff',
    paddingVertical: 40,
  },
  subcontainer: {
    width: '80%',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  Input: {
    padding: 10,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
  },

  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 15,
    width: '100%',
    height: 35,
    backgroundColor: '#CD8A30',
    borderRadius: 24,
  },
  submitButtonText: {
    color: '#FFFFFF',
  },
  dropDown:{
    borderRadius:25,
    borderColor:Colors.PRIMARY_02_4,
    marginTop:14,
  },
  genres:{
    marginLeft:14,marginTop:14
  },
  h1: {
    fontSize: 20,
    textAlign: 'center',
    color: '#343A40',
    fontWeight: 'bold',
  },
  h2: {
    alignSelf: 'center',
    marginTop: 3,
    textAlign: 'center',
    color: '#343A40',
    width: '70%',
  },
  checkBox: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  blueLine: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  datePicker:{width:"100%",marginTop:15,},
});

export default styles;
