import {
    Box,
    Paper
} from '@mui/material';

import Div100vh from 'react-div-100vh'
import Map from '../../map/Map';
import { useState, useCallback } from 'react';
import LocationShareButton from './Location/LocationShareButton';
import FriendsButton from './Friends/FriendsButton';
import FriendsList from './Friends/FriendsList';
import Legend from '../../map/Legend';

function App() {
    const [page, setPage] = useState(window.location.pathname.replace('/', '') === '' ? 'Home' : window.location.pathname.replace('/', ''));

    const [toggle, setToggle] = useState(false);



    return (
        <Div100vh >
                <Map />

                {page === ("Home") ?

                    <Box
                        sx={{
                            display: (!toggle ? 'flex' : 'none')
                        }}>
                        <LocationShareButton />
                        <FriendsButton toggle={toggle} setToggle={setToggle} />
                        <Legend />
                    </Box>
                    :
                    <></>
                }
                <FriendsList toggle={toggle} setToggle={setToggle} />
        </Div100vh>
    );
}

export default App;
  // rfce