import React, { createContext } from "react";

export const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = React.useState([]);

  const deletePokemon = (name) => {
    setPokemons(pokemons.filter((pokemon) => pokemon.name !== name));
  };

  const validatePokemon = (name) => {
    if (name === "") {
      return false;
    } else if (pokemons.some((pokemon) => pokemon.name === name)) {
      return false;
    } else {
      return true;
    }
  };

  const addPokemon = (name) => {
    if (validatePokemon(name)) {
      setPokemons([{ name }, ...pokemons]);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        addPokemon,
        deletePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
