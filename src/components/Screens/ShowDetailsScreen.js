import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/styles';

class ShowDetailsScreen extends Component {
  render() {
    return (
      <Container>
        <TitleText>Smoke Test!</TitleText>
      </Container>
    ) 
  }
}

const Container = styled.View`
  background-color: ${COLORS.WHITE.WHITE};
  height: 100%;
`;

const TitleText = styled.Text`
  color: ${COLORS.ORANGE.ORANGE};
`;

export default ShowDetailsScreen;