import React, { Component } from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/styles';
import { TouchableWithoutFeedback, Text } from 'react-native';

class UserNavigation extends Component {
  render() {
    return (
      <Container>
        <Text>
          Smoke Test!
        </Text>
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
`;

export default UserNavigation;