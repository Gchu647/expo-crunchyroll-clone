import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/styles';

class ShowDetailsScreen extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <BackIconContainer>
              <Icon name={'arrow-left'} size={30} color={COLORS.ORANGE.ORANGE}/>
            </BackIconContainer>
          </TouchableOpacity>
        </HeaderContainer>
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

const HeaderContainer = styled.View`
`;

const ImageHeader = styled.Image`
  width: 100%;
  height: 150px;
  margin-top: 10px;
`;

const BackIconContainer = styled.View`
  margin-top: 10px;
  margin-left: 10px;
`;

export default ShowDetailsScreen;