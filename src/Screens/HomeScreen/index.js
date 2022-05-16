import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { database } from '../../Theme/Libraries';

import { Wrapper } from './style';

const HomeScreen = (props) => {
  const [linksList, setLinkList] = React.useState();

  useEffect(() => {
    const fetch = async () => {
      const ref = await database().ref('/links').once('value');
      const user = ref.val();
      setLinkList(user);
    };
    fetch();
  });

  return (
    <Wrapper>
      <Text>{props.UserDetail && props.UserDetail.id}</Text>
      {linksList &&
        linksList.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => props.navigation.navigate('LoginScreen')}>
              <Text>{item.text}</Text>
            </TouchableOpacity>
          );
        })}

      <TouchableOpacity onPress={() => props.navigation.navigate('AddPawtai')}>
        <Text>Go to Add Potai Screen </Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { Token: state.TOKEN };
};

export default connect(mapStateToProps)(HomeScreen);
