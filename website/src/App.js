import './App.css';
import useToken from './components/useToken';

import Land from './components/pages/Land';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';

import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material'

// Determining the used colors and pallette
const theme = createTheme({
  palette: {
    primary: {
      main: '#4a8bd4',
    },
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
  const { token, removeToken, saveToken } = useToken();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box className="App">
          {!token && token !== "" && token !== undefined ?
            <Land/>
            : (
              <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
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
              </>
            )}

        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
// rfce