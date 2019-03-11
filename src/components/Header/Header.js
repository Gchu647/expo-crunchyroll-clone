import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/styles';
import { TouchableWithoutFeedback } from 'react-native';
const CRUNCHY_LOGO = require('../../../assets/icons/crunchy-logo.png');

class Header extends Component {
  render() {
    return (
      <Container>
        <IconContainer>
          <Icon name={'bars'} size={30} color={COLORS.WHITE.WHITE} />
        </IconContainer>
        <LogoContainer>
          <Logo> crunchyroll </Logo>
        </LogoContainer>
        <IconContainer>
          <Icon name={'search'} size={30} color={COLORS.WHITE.WHITE} />
        </IconContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.ORANGE.ORANGE};
  width: 100%;
  height: 80px;
`;

const IconContainer = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`;

const LogoContainer = styled.View`
  width: 175px;
  height: 50px;
  text-align: center;
`;

const Logo = styled.Text`
  font-size: 34px;
  color: ${COLORS.WHITE.WHITE};
  text-align: center;
`;

export default Header;