import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  RockPaperScissorsPage,
  HomePage,
  ArrayLimitPage,
  ClockPage,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={ <HomePage /> } />
        <Route path="/problem-1" element={ <RockPaperScissorsPage /> } />
        <Route path="/problem-2" element={ <ArrayLimitPage /> } />
        <Route path="/problem-3" element={ <ClockPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;