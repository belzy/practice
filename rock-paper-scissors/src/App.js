import './App.css';
import {
  ChoiceButton,
  RpsIcon,
} from './components';
import { useState, useEffect } from 'react';


const generateRandomChoice = () => {
  const choices = ['paper', 'rock', 'scissors']
  const rand = Math.floor(( Math.random() * 3 ))
  return choices[rand];
};

const determineWinner = (userChoice, randomChoice) => {
  if (userChoice === randomChoice) return 0;
  if (
    userChoice === 'paper' && randomChoice === 'rock' ||
    userChoice === 'rock' && randomChoice === 'scissors' ||
    userChoice === 'scissors' && randomChoice === 'paper'
   ) return 1;
   else return 2;
};


function App() {
  const [message, setMessage] = useState('Choose One');
  const [round, setRound] = useState(0);
  const [choices, setChoices] = useState([]);
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    if (choices.length > 0) {
      const [userChoice, randomChoice] = choices;
      setIcons(choices);
      const winner = determineWinner(userChoice, randomChoice);
      console.log(winner);
  
      if (winner === 0) {
        setMessage('It\s a Tie.');
      } else if (winner === 1) {
        setMessage('You Won!');
      } else if (winner === 2) {
        setMessage('You Lost...');
      }

      setChoices([]);
    }

  }, [choices]);
  
  const handleChoiceClick = (e, userChoice) => {
    setChoices([
      userChoice,
      generateRandomChoice(),
    ]);
  };

  return (
    <div className="App">
      <div className="rps-container">
        <h1>Welcome To Rock Paper Scissors!</h1>

        <div className="icons-container">

          <div className="icon">
            <h3 style={{ marginBottom: '10px' }}>You: { icons.length > 0 && icons[0] }</h3>
            { icons.length > 0 && <RpsIcon icon={ icons[0] } /> }
          </div>

          <div className="icon">
            <h3 style={{ marginBottom: '10px' }}>Opponent: { icons.length > 0 && icons[1] }</h3>
            { icons.length > 0 && <RpsIcon icon={ icons[1] } /> }
          </div>

        </div>


        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '10px' }}>{ message }</h3>
          <div className="button-container">
            <ChoiceButton choice='rock' onClick={ handleChoiceClick } />
            <ChoiceButton choice='paper' onClick={ handleChoiceClick } />
            <ChoiceButton choice='scissors' onClick={ handleChoiceClick } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
