import './App.css';

import Home from './components/pages/Home/App';
import PlaceHolder from './components/pages/PlaceHolder';

import BottomNavbar from './components/pages/BottomNavbar';
// import TopNavbar from './components/TopNavbar';

import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box } from '@mui/material'

// Determining the used colors and pallette
const theme = createTheme({
  palette: {
    primary: {
      main: '#2F8F9D', //Blue
      light: '#00ff94', //Teal
      dark: '#5200ff', //Blue/purple
      // main: '#ffa978', //orange
      contrastText: '#000',


    },
    secondary: {
      main: '#101010',
    },
    beer: {
      main: '#ff9f29',
      light: '#ffc176',
      dark: '##dc7900',
      contrastText: '#FFF',
    },
    white: {
      main: '#FFF',
      light: '#2cff78',
      dark: '#F0EBE3',
      contrastText: '#000',
    },
    black: {
      main: '#000',
      light: '#2C3639',
      dark: '#576F72',
      contrastText: '#FFF',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: [
      "Poppins",
      'sans-serif'
    ].join(','),
  },

});


// Handles routing.
function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box
          className='background'
          sx={{
            height: '-webkit-fill-available',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          {/* <TopNavbar /> */}
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Community" element={<PlaceHolder name={"Community"} />} />
            <Route path="/Friends" element={<PlaceHolder name={"Friends"} />} />
            <Route path="/Profile" element={<PlaceHolder name={"Profile"} />} />
            <Route
              path="*"
              element={
                <Box style={{ padding: "1rem", color: 'black' }}>
                  <p>There's nothing here!</p>
                </Box>
              }
            />
          </Routes>
          <BottomNavbar />

        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
// rfce