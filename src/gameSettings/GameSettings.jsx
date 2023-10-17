/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';


function GameSettings(props) {

  const [playerOneTextFieldValue, setPlayerOneTextFieldValue] = useState('');
  const [playerTwoTextFieldValue, setPlayerTwoTextFieldValue] = useState('');

  const navigate = useNavigate();
  const theme = useTheme();


  const handlePlayerOneTextFieldValueChange = (e) => {
    setPlayerOneTextFieldValue(e.target.value);
  };

  const handlePlayerTwoTextFieldValueChange = (e) => {
    setPlayerTwoTextFieldValue(e.target.value);
  };


  const handleStartGameButtonClick = () => {
    if (playerOneTextFieldValue === '') {
      props.setPlayerOne('Player 1');
    } else {
      props.setPlayerOne(playerOneTextFieldValue);
    }

    if (playerTwoTextFieldValue === '') {
      props.setPlayerTwo('Player 2');
    } else {
      props.setPlayerTwo(playerTwoTextFieldValue);
    }

    navigate('/inGame');
  };

  return (
    <div>
      <h2>{"Who's Playing?"}</h2>
      <div>
        <TextField
          placeholder={props.playerOne}
          value={playerOneTextFieldValue}
          onChange={handlePlayerOneTextFieldValueChange}
          style={{
            border: theme.textField.border,
            borderRadius: theme.textField.borderRadius,
            marginBottom: theme.textField.marginBottom
          }}
        />
      </div>
      <div>
        <TextField
          placeholder={props.playerTwo}
          value={playerTwoTextFieldValue}
          onChange={handlePlayerTwoTextFieldValueChange}
          style={{
            border: theme.textField.border,
            borderRadius: theme.textField.borderRadius,
            marginBottom: theme.textField.marginBottom
          }}
        />
      </div>
      <div>
        <Button sx={{border: theme.blackButton.border, color: theme.blackButton.color, padding: theme.blackButton.padding, width: theme.blackButton.width, height: theme.blackButton.height, margin: theme.blackButton.margin}} onClick={handleStartGameButtonClick}>
          Start!
        </Button>
      </div>
    </div>
  );
}

export default GameSettings;
