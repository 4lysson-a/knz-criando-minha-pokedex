import React from 'react';

import {
  Title,
  Content,
  Container,
} from './styles';

import MyPokemons from './components/MyPokemons';
import ListPokemons from './components/ListPokemons';
import SearchPokemons from './components/SearchPokemons';

const App = () => {
  return (
    <Container>
      <Title>Minha Pokedex</Title>

      <Content>
        <SearchPokemons />
        <MyPokemons />
        <ListPokemons />
      </Content>
    </Container>
  );
};

export default App;
