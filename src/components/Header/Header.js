import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/styles';
import { TouchableWithoutFeedback, Text } from 'react-native';
import { Font } from 'expo';
const CRUNCHY_LOGO = require('../../../assets/icons/crunchy-logo.png');

class Header extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'maven-pro-bold': require('../../../assets/fonts/MavenPro-Bold.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Container>
        <IconContainer>
          <Icon name={'bars'} size={30} color={COLORS.WHITE.WHITE} />
        </IconContainer>
        <LogoContainer>
        {
          this.state.fontLoaded ? (
            <Logo> crunchyroll</Logo>
          ) : null
        }
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
  padding-left: 5px;
  padding-right: 5px;
`;

const LogoContainer = styled.View`
  width: 175px;
  height: 50px;
  text-align: center;
`;

const Logo = styled.Text`
  font-size: 32px;
  font-family: maven-pro-bold;
  color: ${COLORS.WHITE.WHITE};
  padding-top: 5px;
  text-align: center;
`;

export default Header;