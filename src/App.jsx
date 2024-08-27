import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Dex from "./pages/Dex";
import Home from "./pages/Home";
import PokemonList from "./PokemonList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/list/:id" element={<PokemonList />} />
        {/* 포켓몬도감과 디테일페이지 추가 */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
