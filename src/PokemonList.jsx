import React from "react";
import "./mock";

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={{ pokemon }}
          onAdd={() => onAddPokemon(pokemon)}
          isSelected={selectedPokemonIds.includes(pokemon.id)}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
