import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function MainMenu() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate('/gameSettings');
  };

  return (
    <div>
      <Button style={{
        color: theme.button.color,
        height: theme.button.height,
        width: theme.button.width,
        padding: theme.button.padding,
        border: theme.button.border,
      }} onClick={handleStartButtonClick}>
        New Game
      </Button>
    </div>
  );
}

export default MainMenu;
