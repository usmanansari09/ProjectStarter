import styled, { css } from 'styled-components/native';
import { Colors } from '../../Theme';

export const Wrapper = styled.View`
  border: 0.5px solid ${Colors.PRIMARY_02_4};
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding-horizontal: 20px;
  margin-top: 10px;
  width: 100%;
  height: 45px;
`;

export const Loginlabel = styled.Text`
  font-size: 14px;
  color: ${Colors.BLACK};
  margin-left: 15px;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 5px;
`;

export const Icon = styled.Image`
  ${(props) =>
    props.iconStyle
      ? css`
          width: ${props.iconStyle.width}px;
          height: ${props.iconStyle.height}px;
        `
      : css`
          width: 15px;
          height: 15px;
        `}
`;
