import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

class Header extends Component {
  render() {
    return (
      <Container>
        <Icon>
          <Text>Menu</Text>
        </Icon>
        <Logo>
          <Text>Crunchyroll</Text>
        </Logo>
        <Icon>
          <Text>Search</Text>
        </Icon>
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #ff7900;
  width: 100%;
  height: 80px;
`;

const Icon = styled.View`
  border: solid 1px #ff7900;
  width: 15%;
  height: 50px;
  margin: 5px;
`;

const Logo = styled.View`
  border: solid 1px #ff7900;
  width: 50%;
  height: 50px;
`;

export default Header;