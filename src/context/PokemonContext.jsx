import React, { createContext, useEffect, useState } from "react";

import { getPokemonsFirstGeneration } from "../services/request";

export const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  const searchPokemons = (name) => {
    setFilteredPokemons(
      pokemons.filter((pokemon) => pokemon.name.includes(name))
    );
  };

  const addPokemonToPokedex = (pokemon) => {
    if (pokedex.length >= 6) {
      alert("Você já possui 6 pokemons");
    } else if (pokedex.find((p) => p.name === pokemon)) {
      alert("Você já possui este pokemon");
    } else {
      setPokedex([...pokedex, { name: pokemon }]);
    }
  };

  const deletePokemonFromPokedex = (name) => {
    setPokedex(pokedex.filter((pokemon) => pokemon.name !== name));
  };

  useEffect(() => {
    let mounted = true;

    getPokemonsFirstGeneration().then((response) => {
      if (mounted) {
        setPokemons(response);
        setFilteredPokemons(response);
      }
    });

    return () => (mounted = false);
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokedex,
        pokemons,
        setPokemons,
        searchPokemons,
        filteredPokemons,
        addPokemonToPokedex,
        deletePokemonFromPokedex,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
