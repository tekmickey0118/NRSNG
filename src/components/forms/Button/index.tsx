import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {ButtonType} from './Type';

export default ({title, style, ...props}: ButtonType): JSX.Element => {
  return (
    <View style={style}>
      <CustomButton {...props}>
        <CustomText>{title}</CustomText>
      </CustomButton>
    </View>
  );
};

const CustomButton = styled.TouchableHighlight`
  font-family: Radley;
  height: 50px;
  border-radius: 4px;
  background-color: #283f52;
`;

const CustomText = styled.Text`
  color: white;
  font-size: 19px;
  margin: auto;
  text-align: center;
`;
