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
        color: theme.blackButton.color,
        height: theme.blackButton.height,
        width: theme.blackButton.width,
        padding: theme.blackButton.padding,
        border: theme.blackButton.border,
      }} onClick={handleStartButtonClick}>
        New Game
      </Button>
    </div>
  );
}

export default MainMenu;
