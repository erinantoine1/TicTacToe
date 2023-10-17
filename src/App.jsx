import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import MainMenu from './mainMenu/MainMenu';
import GameSettings from './gameSettings/GameSettings';
import Board from './inGame/Board';
import { Routes, Route } from 'react-router-dom';

function App() {
  const theme = useTheme();

  const [playerOne, setPlayerOne] = useState('Player 1');
  const [playerTwo, setPlayerTwo] = useState('Player 2');

  return (
    <div style={{
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      height: theme.custom.fullHeight,
      margin: theme.custom.margin,
      display: theme.custom.display,
      alignItems: theme.custom.alignItems,
      flexDirection: theme.custom.flexDirection
    }}>
      <h1>Tic Tac Toe</h1>
      <Routes>
        <Route exact path="/" element={<MainMenu/>} />
        <Route path="/gameSettings" element={<GameSettings playerOne={playerOne} playerTwo={playerTwo} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} />} />
        <Route path="/inGame" element={<Board playerOne={playerOne} playerTwo={playerTwo} />} />
      </Routes>
    </div>
  );
}

export default App;
