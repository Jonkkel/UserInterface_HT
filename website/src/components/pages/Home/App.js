import {
    Box,
    Container,
    Paper,
} from '@mui/material';
import { useState, useCallback } from 'react';

import BottomNavbar from '../../BottomNavbar';
import TopNavbar from '../../TopNavbar';

import useToken from '../../useToken'

import Map from '../../map/Map';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
// Handles routing.
function App() {

    const { token, removeToken, saveToken } = useToken();
    const [location, setLocation] = useState(0);

    return (

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            {/* <TopNavbar /> */}
            {/* <Box className='bg-image' /> */}
            <Box
                sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    borderRadius: 5,
                    height: '93vh',
                    width: '100%',
                    // my: 2,
                }}>
                {/* <img src='./Avatar1.png' height={200} /> */}
                {/* <img src="./map2.png" className="mapImage" /> */}

                <Map />
            </Box>
            {/* <BottomNavbar /> */}
        </Box>


    );
}

export default App;
  // rfce