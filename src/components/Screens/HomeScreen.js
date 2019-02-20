import React, { Component } from 'react';
import styled from 'styled-components/native';
import Header from '../Header/Header';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <List>
          <ListHead></ListHead>
          <ListShows></ListShows>
        </List>
        <List>
          <ListHead></ListHead>
          <ListShows></ListShows>
        </List>
        <List>
          <ListHead></ListHead>
          <ListShows></ListShows>
        </List>
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

const List = styled.View`
  display: flex;
  align-items: center;
  width: 90%;
  height: 25%;
  border: solid 1px #ff7900;
  margin: 15px 0 15px 0;
`;

const ListHead = styled.View`
  width: 90%;
  height: 20%%;
  border: solid 1px #ff7900;
  margin-top: 5px;
`;

const ListShows = styled.View`
  width: 90%;
  height: 70%%;
  border: solid 1px #ff7900;
  margin-top: 5px;
`;

export default HomeScreen;