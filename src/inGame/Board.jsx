/* eslint-disable react/prop-types */
import { useState } from 'react';
import Square from './Square';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

function Board({ playerOne, playerTwo }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const goToMainMenu = () => {
    navigate('/');
  };

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      onClick={() => handleClick(i)}
      isDisabled={squares[i] || calculateWinner(squares)}
      isWinner={calculateWinner(squares) && calculateWinner(squares).includes(i)}
      currentPlayer={xIsNext ? 'X' : 'O'}
    />
  );

  const winner = calculateWinner(squares);

  const isCatsGame = !winner && squares.every((square) => square);

  return (
    <div style={{display: theme.board.display, alignItems: theme.board.alignItems, flexDirection: theme.board.flexDirection, fontSize: theme.board.fontSize}}>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {winner ? (
        <div>
          Winner: {squares[winner[0]]}
        </div>
      ) : isCatsGame ? (
        <div>Tie/CATS</div>
      ) : (
        <div style={{ display: 'inline-flex' }}>
          <div style={{ color: 'blue' }}>{'X: ' + playerOne}</div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>/</div>
          <div style={{ color: 'red' }}>{'O: ' + playerTwo}</div>
        </div>
      )}
      <div>
        <Button sx={{border: theme.blackButton.border, color: theme.blackButton.color, padding: theme.blackButton.padding, width: theme.blackButton.width, height: theme.blackButton.height, margin: theme.blackButton.margin}} onClick={resetBoard}>Reset</Button>
        <Button sx={{border: theme.blackButton.border, color: theme.blackButton.color, padding: theme.blackButton.padding, width: theme.blackButton.width, height: theme.blackButton.height, margin: theme.blackButton.margin}} onClick={goToMainMenu}>Main Menu</Button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }

  return null;
}


export default Board;
