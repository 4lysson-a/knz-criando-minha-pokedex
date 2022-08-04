import React from 'react';

import {
  getPokemonsFirstGeneration
} from './services/request';

import {
  PokemonContext
} from './context/PokemonContext';

import {
  Container,
  Content,
  Title,
} from './styles';

import MyPokemons from './components/MyPokemons/MyPokemons';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';

const App = () => {
  const { setPokemons } = React.useContext(PokemonContext);

  React.useEffect(() => {
    let mounted = true;

    getPokemonsFirstGeneration()
      .then((response) => {
        if (mounted) {
          setPokemons(response);
        }
      });

    return () => mounted = false;
  }, [])

  return (
    <Container>
      <Title>Minha Pokedex</Title>
      <Content>
        <CreatePokemon />
        <MyPokemons />
      </Content>
    </Container>
  );
};

export default App;
