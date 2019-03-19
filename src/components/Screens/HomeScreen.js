import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/styles';
import Header from '../Header/Header';
import UserNavigation from '../Navigation/UserNavigation';
import { ScrollView, TouchableOpacity } from 'react-native';
import ShowData from '../../data/data';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <UserNavigation />
        <SubHeader>
          <SubHeaderTextContainer>
            <SubHeaderTitleText>
              Trending Now
            </SubHeaderTitleText>
            <SubHeaderText>
              Recommended for you
            </SubHeaderText>
          </SubHeaderTextContainer>
          <AllContainer>
            <AllText>{'All'}</AllText>
            <IconContainer>
              <Icon name={'angle-right'} size={20} color={COLORS.GREY.LIGHT_GREY} />
            </IconContainer>
          </AllContainer>
        </SubHeader>
        <ScrollView horizontal={true}>
          <ImageContainer>
            {ShowData.map((show, index) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ShowDetails', show)}
                key={index}
              >
                <Image source={show.image} key={index} />
              </TouchableOpacity>
            ))}
          </ImageContainer>
        </ScrollView>
        <SubHeader>
          <SubHeaderTextContainer>
            <SubHeaderTitleText>
              Continue watching for G.Chu
            </SubHeaderTitleText>
          </SubHeaderTextContainer>
          <AllContainer>
            <AllText>{'All'}</AllText>
            <IconContainer>
              <Icon name={'angle-right'} size={20} color={COLORS.GREY.LIGHT_GREY} />
            </IconContainer>
          </AllContainer>
        </SubHeader>
        <ScrollView horizontal={true}>
          <ImageContainer>
            {ShowData.map((show, index) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ShowDetails', show)}
                key={index}
              >
                <Image source={show.image} key={index} />
              </TouchableOpacity>
            ))}
          </ImageContainer>
        </ScrollView>
        <SubHeader>
          <SubHeaderTextContainer>
            <SubHeaderTitleText>
              Recently Added
            </SubHeaderTitleText>
          </SubHeaderTextContainer>
          <AllContainer>
            <AllText>{'All'}</AllText>
            <IconContainer>
              <Icon name={'angle-right'} size={20} color={COLORS.GREY.LIGHT_GREY} />
            </IconContainer>
          </AllContainer>
        </SubHeader>
        <ScrollView horizontal={true}>
          <ImageContainer>
            {ShowData.map((show, index) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ShowDetails', show)}
                key={index}
              >
                <Image source={show.image} key={index} />
              </TouchableOpacity>
            ))}
          </ImageContainer>
        </ScrollView>
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

const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Image = styled.Image`
  width: 75px;
  height: 100px;
  margin: 5px 0px 5px 10px;
`;

const SubHeader = styled.View`
  padding-top: 15;
  padding-bottom: 5;
  padding-left: 15;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const SubHeaderTextContainer = styled.View`
`;

const SubHeaderTitleText = styled.Text`
  color: ${COLORS.ORANGE.ORANGE};
`;

const SubHeaderText = styled.Text`
  color: ${COLORS.GREY.SHADOW_GREY};
`;

const AllContainer = styled.View`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
`;

const AllText = styled.Text`
  color: ${COLORS.GREY.SHADOW_GREY};
  align-self: center;
  margin-right: 5;
`;

const IconContainer = styled.View`
  margin-right: 10;
`;


export default HomeScreen;