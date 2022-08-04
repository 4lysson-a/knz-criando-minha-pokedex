import React from "react";

import { PokemonContext } from "../../context/PokemonContext";

import {
  Form,
  Input,
  Container,
  InputContainer,
} from "./styles";

const SearchPokemons = () => {
  const { searchPokemons } = React.useContext(PokemonContext);

  return (
    <Container>
      <h1>Buscar Pokemon</h1>
      <Form>
        <InputContainer>
          <label htmlFor="name">Nome do pokemon</label>
          <Input
            type="text"
            name="name"
            placeholder="Nome do pokemon"
            onChange={(e) => searchPokemons(e.target.value)}
          />
        </InputContainer>
      </Form>
    </Container>
  );
};

export default SearchPokemons;
