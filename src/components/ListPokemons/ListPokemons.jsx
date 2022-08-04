import React from "react";

import { PokemonContext } from "../../context/PokemonContext";

import { Container, Content, AddButton, Item } from "./styles";
import AddIcon from '../../icons/AddIcon';

const ListPokemons = () => {
  const { filteredPokemons, addPokemonToPokedex } = React.useContext(PokemonContext);

  return (
    <Container>
      <div>
        <h1>Lista de pokemons</h1>
        <h2>({filteredPokemons?.length}) listados</h2>
      </div>

      <Content>
        {filteredPokemons?.map((pokemon) => (
          <Item key={pokemon.name}>
            <ul>
              <li>{pokemon.name}</li>
            </ul>

            <AddButton onClick={() => addPokemonToPokedex(pokemon.name)}>
              <AddIcon />
            </AddButton>
          </Item>
        ))}
      </Content>

    </Container>
  );
};

export default ListPokemons;
