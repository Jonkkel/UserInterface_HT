import {
    Box,
    Paper
} from '@mui/material';

import Div100vh from 'react-div-100vh'
import Map from '../map/Map';
import { useState, useCallback } from 'react';
import LocationShareButton from '../Location/LocationShareButton';
import FriendsButton from '../Friends/FriendsButton';
import FriendsList from '../Friends/FriendsList';
import Legend from './Legend';

import BottomNavbar from '../BottomNavbar';

function App() {
    const [page, setPage] = useState(window.location.pathname.replace('/', '') === '' ? 'Home' : window.location.pathname.replace('/', ''));

    const [toggle, setToggle] = useState(false);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Map />
            <LocationShareButton />
            <FriendsButton toggle={toggle} setToggle={setToggle} />
            <FriendsList toggle={toggle} setToggle={setToggle} />
            <Legend />
            <BottomNavbar />
        </Box>
    );
}

export default App;
  // rfce