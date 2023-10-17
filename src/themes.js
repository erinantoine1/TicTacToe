import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#111',
    },
    text: {
      primary: '#f5f5f5',
    },
  },
  custom: {
    fullHeight: '100vh',
    margin: '20px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  board: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '32px'
  },
  square: {
    border: '#f5f5f5 solid 1px',
    color: '#f5f5f5',
    padding: '5px',
    width: '150px',
    height: '50px',
    margin: '10px',
    transition: 'background 0.3s',
    background: '#f5f5f5'
  },
  blackButton: {
    border: '#f5f5f5 solid 1px',
    color: '#f5f5f5',
    padding: '5px',
    width: '150px',
    height: '50px',
    margin: '10px'
  },
  textField: {
    border: 'grey solid 1px',
    borderRadius: '10px',
    marginBottom: '5px'
  }
});