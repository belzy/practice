import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  RockPaperScissors,
  Home,
  ArrayLimit,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={ <Home /> } />
        <Route path="/problem-1" element={ <RockPaperScissors /> } />
        <Route path="/problem-2" element={ <ArrayLimit /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;