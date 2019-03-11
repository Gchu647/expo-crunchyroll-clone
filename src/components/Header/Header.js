import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/styles';
import { TouchableWithoutFeedback, Text, Image} from 'react-native';
const CRUNCHY_LOGO = require('../../../assets/icons/crunchy-logo.png');

class Header extends Component {
  render() {
    return (
      <Container>
        <IconContainer>
          <Icon name={'bars'} size={30} color={COLORS.WHITE.WHITE} />
        </IconContainer>
        <LogoContainer>
          <Image source={CRUNCHY_LOGO} style={{width:50, height:50}}/>
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
`;

export default Header;