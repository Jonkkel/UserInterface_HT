import {
    Box,
    Paper
} from '@mui/material';

import { use100vh } from 'react-div-100vh'
import Map from '../map/Map';
import { useState, useCallback } from 'react';
import LocationShareButton from '../Location/LocationShareButton';
import FriendsButton from '../Friends/FriendsButton';
import FriendsList from '../Friends/FriendsList';
import Legend from './Legend';


function App() {

    const [toggle, setToggle] = useState(false);

    return (
        <Box sx={{ height: use100vh }}>
            <Map />
            <LocationShareButton />
            <FriendsButton toggle={toggle} setToggle={setToggle} />
            <FriendsList toggle={toggle} setToggle={setToggle} />
            <Legend />
        </Box>
    );
}

export default App;
  // rfce