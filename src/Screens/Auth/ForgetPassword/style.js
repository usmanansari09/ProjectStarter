import styled from 'styled-components/native';
import { Colors } from '../../../Theme';

export const Wrapper = styled.View`
  background-color: ${Colors.themeColor};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MainWrapper = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: 10%;
  width: 100%;
`;

export const Welcomelabel = styled.Text`
  margin-top: 30px;
  align-self: center;
  font-size: 20px;
  color: ${Colors.white};
`;

export const Title = styled.Text`
  margin: 10px;
  align-self: center;
  font-size: 34px;
  color: ${Colors.white};
  font-weight: 700;
`;
