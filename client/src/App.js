import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  RockPaperScissors,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/problem-1" element={ <RockPaperScissors /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;