import React from 'react';
import { ButtonWrapper, ButtonText } from './style';

const ImageButton = ({ ...props }) => (
  <ButtonWrapper color={props.color} {...props}>
    <ButtonText style={props.textStyles}>{props.buttonText}</ButtonText>
  </ButtonWrapper>
);

export default ImageButton;
