import {
    Box,
    Paper
} from '@mui/material';
import Map from '../../map/Map';
import { useState, useCallback } from 'react';
import LocationShareButton from './Location/LocationShareButton';
import FriendsButton from './Friends/FriendsButton';
import FriendsList from './Friends/FriendsList';

function App() {
    const [page, setPage] = useState(window.location.pathname.replace('/', '') === '' ? 'Home' : window.location.pathname.replace('/', ''));

    const [toggle, setToggle] = useState(false);



    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <Box
                sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    borderRadius: 5,
                    height: 'calc(100vh - 67px)',
                    width: '100%',
                }}>
                <Map />

                {page === ("Home") ?

                    <Box
                        sx={{
                            display: (!toggle ? 'flex' : 'none')
                        }}>
                        <LocationShareButton />
                        <FriendsButton toggle={toggle} setToggle={setToggle} />
                    </Box>
                    :
                    <></>
                }
                <FriendsList toggle={toggle} setToggle={setToggle} />
                {/* <Box
                    sx={{
                        backgroundColor: '#FFF',
                        position: 'absolute',
                        bottom: 65,
                        zIndex: 3000,
                        display: (toggle ? 'flex' : 'none'),
                        width: '100%',
                        height: 100
                    }}>
                    Perkele

                </Box> */}
            </Box>
        </Box>
    );
}

export default App;
  // rfce