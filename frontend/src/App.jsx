import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from "./pages/Game";
import Home from "./pages/Home";
import Pesquisa from "./pages/Pesquisa";

import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
