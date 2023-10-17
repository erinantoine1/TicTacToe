import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import App from './App';
import { defaultTheme } from './themes';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={defaultTheme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);

