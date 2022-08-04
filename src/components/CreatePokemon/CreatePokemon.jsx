import React from "react";
import { PokemonContext } from "../../context/PokemonContext";

import { Form, Input, Button, InputContainer,Container } from "./styles";

const CreatePokemon = () => {
  const [name, setName] = React.useState("");

  const { addPokemon } = React.useContext(PokemonContext);

  return (
    <Container>
      <h1>Criar o meu pokemon</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addPokemon(name);
        }}
      >
        <InputContainer>
          <label for="name">
            Nome do pokemon
          </label>
          <Input
            type="text"
            name="name"
            placeholder="Nome do pokemon"
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>

        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default CreatePokemon;
