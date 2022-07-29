import Home from './components/pages/Home/App';
import PlaceHolder from './components/pages/PlaceHolder';
import BottomNavbar from './components/pages/BottomNavbar';
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
            <BottomNavbar />
        </Box>
    );
}

export default App;
// rfce