import Home from './components/Home/index';
import PlaceHolder from './components/PlaceHolder';
// import BottomNavbar from './components/BottomNavbar';
// import TopNavbar from './components/TopNavbar';

import { Routes, Route } from 'react-router-dom'

import { Box } from '@mui/material'


// Handles routing.
function App() {
    return (
        <Box>
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
        </Box>
    );
}

export default App;
// rfce