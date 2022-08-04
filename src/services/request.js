import axios from "axios";

export const request = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemonsFirstGeneration = async () => {
  const { data } = await request.get("/pokemon/?limit=151");
  return data.results;
}
