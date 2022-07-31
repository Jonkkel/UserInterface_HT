import './App.css';

// import Home from './components/Home/App';
// import PlaceHolder from './components/PlaceHolder';

// import BottomNavbar from './components/BottomNavbar';
// import TopNavbar from './components/TopNavbar';

import { useState, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles';
import { Container, Box } from '@mui/material'
import theme from './theme';
import Routes from './routes';

// Handles routing.
function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box className="App">
          <Routes />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
// rfce