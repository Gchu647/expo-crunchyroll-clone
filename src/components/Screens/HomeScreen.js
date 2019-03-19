import React, { Component } from 'react';
import styled from 'styled-components/native';
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


export default HomeScreen;