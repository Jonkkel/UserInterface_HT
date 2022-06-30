import './App.css';
import useToken from './components/useToken';


import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home/App';
import PlaceHolder from './components/pages/PlaceHolder';

import BottomNavbar from './components/BottomNavbar';
import TopNavbar from './components/TopNavbar';

import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box } from '@mui/material'

// Determining the used colors and pallette
const theme = createTheme({
  palette: {
    primary: {
      main: '#02ad6f',
    },
    secondary: {
      main: '#868787',
    },
    beer: {
      main: '#ffbf00',
    }
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
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <TopNavbar />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Community" element={<PlaceHolder name={"Community"} />} />
            <Route path="/Friends" element={<PlaceHolder name={"Friends"} />} />
            <Route path="/Profile" element={<PlaceHolder name={"Profile"} />} />
            <Route path="/register" element={<Register />} />
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