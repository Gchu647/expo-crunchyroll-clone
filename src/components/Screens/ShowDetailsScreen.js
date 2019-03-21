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
              <Icon name={'play-circle-o'} size={60} color={COLORS.ORANGE.ORANGE} />
            </PlayIconContainer>
          </TouchableOpacity>
        </HeaderContainer>
        <TitleContainer>
          <TitleText>{params.title}</TitleText>
          <TouchableOpacity onPress={() => {}}>
            <MyListButton>
              <Icon name={'plus'} size={10} color={COLORS.ORANGE.ORANGE} />
              <MyListButtonText>My List</MyListButtonText>
            </MyListButton>
          </TouchableOpacity>
        </TitleContainer>
      </Container>
    ) 
  }
}

const Container = styled.View`
  background-color: ${COLORS.WHITE.WHITE};
  height: 100%;
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
const TitleContainer = styled.View`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10px 0 10px 10px;
`;

const TitleText = styled.Text`
  font-size: 18px;
  color: ${COLORS.GREY.SHADOW_GREY};
`;

const MyListButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 30px;
  background-color: ${COLORS.GREY.LIGHT_GREY};
  margin-right: 10px;
`;

const MyListButtonText = styled.Text`
  color: ${COLORS.GREY.SHADOW_GREY}
  margin-left: 5px;
`;

export default ShowDetailsScreen;