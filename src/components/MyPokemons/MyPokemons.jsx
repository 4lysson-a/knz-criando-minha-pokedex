import React from "react";

import { PokemonContext } from "../../context/PokemonContext";

import { Container, Content, DeleteButton, Item } from "./styles";
import TrashIcon from './../../icons/TrashIcon';

const MyPokemons = () => {
  const { pokemons, deletePokemon } = React.useContext(PokemonContext);

  return (
    <Container>
      <div>
        <h1>Lista de pokemons</h1>
        <h2>({pokemons.length}) listados</h2>
      </div>

      <Content>
        {pokemons.map((pokemon) => (
          <Item key={pokemon.name}>
            <ul>
              <li>{pokemon.name}</li>
            </ul>

            <DeleteButton onClick={() => deletePokemon(pokemon.name)}>
              <TrashIcon />
            </DeleteButton>
          </Item>
        ))}
      </Content>

    </Container>
  );
};

export default MyPokemons;
