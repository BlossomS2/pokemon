import React from "react";
import MOCK_DATA from "./mock";

const PokemonCard = ({ pokemon, onAdd, isSelected }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.img_url} alt={pokemon.name} /> {/* 이미지 URL을 사용 */}
      <button onClick={onAdd}>{isSelected ? "선택됨" : "선택하기"}</button>
    </div>
  );
};
export default PokemonCard;
