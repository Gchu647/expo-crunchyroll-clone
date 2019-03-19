import React, { Component } from 'react';
import styled from 'styled-components/native';
import Header from '../Header/Header';
import UserNavigation from '../Navigation/UserNavigation'

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <UserNavigation />
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default HomeScreen;