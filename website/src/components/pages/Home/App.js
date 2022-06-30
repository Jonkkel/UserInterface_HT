import {
    Box,
    Container,
    Paper,
} from '@mui/material';
import { useState, useCallback } from 'react';

import BottomNavbar from '../../BottomNavbar';
import TopNavbar from '../../TopNavbar';

import useToken from '../../useToken'
import Land from './../Land';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
// Handles routing.
function App() {

    const { token, removeToken, saveToken } = useToken();
    const [location, setLocation] = useState(0);

    return (

        <Container sx={{
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
                    height: '85vh',
                    width: '100%',
                    px: 0,
                    m: 0,
                }}>
                <Paper
                    elevation={10}
                    sx={{ borderRadius: 5 }}>
                    <img src="./map2.png" className="mapImage" />
                </Paper>
            </Box>

            {/* <BottomNavbar /> */}
        </Container>


    );
}

export default App;

  // rfce