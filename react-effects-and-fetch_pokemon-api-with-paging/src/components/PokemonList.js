import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offsetValue, setOffsetValue] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offsetValue}`
        );
        const data = await response.json();
        console.log(data);
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(offsetValue);
    loadPokemon();
  }, [offsetValue]);

  return (
    <main>
      <button type="button">Previous Page</button>
      <button type="button" onClick={() => setOffsetValue(offsetValue + 20)}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
