import React, { Component } from 'react';
import styled from 'styled-components/native';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Box = styled.View`
  width: 50px;
  height: 50px;
  border: solid 1px #ff7900;
  margin: 5px;
`;

export default HomeScreen;