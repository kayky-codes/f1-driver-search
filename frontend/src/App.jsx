import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Pesquisa from './pesquisa';
import Game from './game';
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
