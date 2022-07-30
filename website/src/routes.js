import Home from './components/Home/index';
import PlaceHolder from './components/PlaceHolder';
import BottomNavbar from './components/BottomNavbar';

import { Routes, Route } from 'react-router-dom'

import { use100vh } from 'react-div-100vh'
import { Box } from '@mui/material'


// Handles routing.
function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: use100vh }}>
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
    );
}

export default App;
// rfce