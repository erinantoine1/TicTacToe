/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

function Square({ value, onClick, isDisabled, isWinner, currentPlayer }) {
  const theme = useTheme();

  const hoverBackground = currentPlayer === 'X' ? 'lightblue' : 'lightcoral';

  return (
    <Button
      onClick={onClick}
      disabled={isDisabled}
      sx={{
        fontSize: '20px',
        background: isWinner ? (value === 'X' ? 'blue' : 'red') : theme.square.background,
        width: theme.square.width,
        height: theme.square.height,
        padding: theme.square.padding,
        border: theme.square.border,
        margin: theme.square.margin,
        transition: theme.square.transition,
        '&:hover': {
          background: hoverBackground,
        },
      }}
      style={{
        color: isWinner ? theme.square.color : (value === 'X' ? 'blue' : 'red'),
      }}
    >
      {value}
    </Button>
  );
}

export default Square;
