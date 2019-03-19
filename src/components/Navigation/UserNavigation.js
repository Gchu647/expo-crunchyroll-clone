import React, { Component } from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/styles';
import { TouchableWithoutFeedback, Text } from 'react-native';

class UserNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'browse',
    };

    this.setActiveUserNavigation = this.setActiveUserNavigation.bind(this);
  }

  setActiveUserNavigation(selected) {
    this.setState({
      selected,
    });
  }

  render() {
    const navigation = [{title: 'BROWSE', id:'browse'}, {title: 'MY LIST', id:'myList'}];
    const { selected } = this.state;

    return (
      <Container>
        { 
          navigation.map((element, index) => {
            if (selected === element.id) {
              return (
                <TouchableWithoutFeedback
                  onPress={() => this.setActiveUserNavigation(element.id)}
                  key={index}
                >
                  <ActiveNavigationLink>
                    <NavigationLinkText>{element.title}</NavigationLinkText>
                  </ActiveNavigationLink>
                </TouchableWithoutFeedback>
              );
            } else {
              return (
                <TouchableWithoutFeedback
                  onPress={() => this.setActiveUserNavigation(element.id)}
                  key={index}
                >
                  <NavigationLink>
                    <NavigationLinkText>{element.title}</NavigationLinkText>
                  </NavigationLink>
                </TouchableWithoutFeedback>
              );
            }
          }) 
        }
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: ${COLORS.GREY.LIGHT_GREY};
`;

const NavigationLink = styled.View`
  margin: 10px 5px 10px 5px;
  padding: 10px 10px 10px 10px;
  border-bottom-width: 5px;
  border-bottom-color: ${COLORS.GREY.LIGHT_GREY};
`;

const ActiveNavigationLink = styled(NavigationLink)`
  border-bottom-color: ${COLORS.ORANGE.ORANGE};
`;

const NavigationLinkText = styled.Text`
  font-family: Futura;
  color: ${COLORS.ORANGE.ORANGE};
`;

export default UserNavigation;