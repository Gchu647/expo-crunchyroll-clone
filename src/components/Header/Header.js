import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

class Header extends Component {
  render() {
    return (
      <Container>
        <Text>Header</Text>
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  border: solid 1px #ff7900;
`;

export default Header;