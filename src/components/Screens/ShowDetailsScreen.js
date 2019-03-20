import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/styles';

class ShowDetailsScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;

    return (
      <Container>
        <HeaderContainer>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <BackIconContainer>
              <Icon name={'arrow-left'} size={30} color={COLORS.ORANGE.ORANGE}/>
            </BackIconContainer>
          </TouchableOpacity>
          <ImageContainer>
            <Image source={params.image} resizeMode={'contain'}/>
          </ImageContainer>
          <TouchableOpacity onPress={() => {}}>
            <PlayIconContainer>
              <Icon name={'play-circle-o'} size={60} color={COLORS.WHITE.WHITE} />
            </PlayIconContainer>
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

const BackIconContainer = styled.View`
  margin-top: 20px;
  margin-left: 10px;
`;

const ImageContainer = styled.View`
  display: flex;
  align-items: center;
`;

const Image = styled.Image`
  width: 120px;
  height: 180px;
  margin: 5px 0px 5px 10px;
`;

const PlayIconContainer = styled.View`
  margin-left: 10px;
`

export default ShowDetailsScreen;