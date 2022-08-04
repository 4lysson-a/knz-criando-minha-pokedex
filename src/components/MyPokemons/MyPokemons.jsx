import React from "react";

import { PokemonContext } from "./../../context/PokemonContext";

import { DeleteButton, Container, Item } from "./styles";
import TrashIcon from "./../../icons/TrashIcon";

const MyPokemons = () => {
  const { pokedex, deletePokemonFromPokedex } =
    React.useContext(PokemonContext);

  const Title = () => <h1>Meu Time de pokemons</h1>;

  if (!pokedex || pokedex.length === 0) {
    return (
      <Container>
        <Title />
        <p>Nenhum pokemon na pokedex</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title />

      {pokedex?.map((pokemon) => (
        <Item key={pokemon.name}>
          <ul>
            <li>{pokemon.name}</li>
          </ul>

          <DeleteButton onClick={() => deletePokemonFromPokedex(pokemon.name)}>
            <TrashIcon />
          </DeleteButton>
        </Item>
      ))}
    </Container>
  );
};

export default MyPokemons;
