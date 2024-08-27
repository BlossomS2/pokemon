import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import "../Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="container">
        <img src={logo} alt="이미지 왜 안나옴..?"></img>
        <button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</button>
        {/* <button onClick={() => navigate("/PokemonList")}>포켓몬리스트</button> */}
      </div>
    </div>
  );
};

export default Home;
