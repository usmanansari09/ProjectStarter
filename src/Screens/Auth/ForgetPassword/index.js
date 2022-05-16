import React, { useState } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';

import { useTranslation } from '../../../LanguageContext';
import { Images, Colors } from '../../../Theme';
import { InputField, ButtonComponent } from '../../../Components';
import { Wrapper, MainWrapper, Welcomelabel, Title } from './style';

const LoginScreen = (props) => {
  const [userDetail, setUserDetail] = useState({});
  const Language = useTranslation();

  const forgetPasswordHandler = () => {
    // console.log(userDetail);
    // props.dispatch({type: 'USER_DETAIL', userDetail});
    // props.navigation.navigate('HomeScreen');
  };

  const textOnchange = (text, name) => {
    let user = userDetail;
    user[name] = text;
    setUserDetail(user);
  };

  return (
    <Wrapper>
      <MainWrapper>
        <Welcomelabel>{Language.ForgetPasswordTextForgetYourPassword}</Welcomelabel>
        <Title>{Language.ForgetPasswordTextResetHere}</Title>

        <View style={{ marginVertical: 30 }}>
          <InputField
            placeholder={Language.ForgetPasswordTextEmail}
            onChangeText={(text) => textOnchange(text, 'email')}
            icon={Images.Email}
            iconStyle={{ width: 20, height: 15 }}
            keyboardType="email-address"
            disableFullscreenUI={true}
            autoCapitalize="none"
            secureTextEntry={false}
          />
        </View>

        {/* Login Button */}
        <ButtonComponent
          buttonText={Language.ForgetPasswordButtonSendResetLink}
          buttonOnPress={forgetPasswordHandler}
          color={Colors.themeGrey}
        />
      </MainWrapper>
    </Wrapper>
  );
};

export default connect()(LoginScreen);
