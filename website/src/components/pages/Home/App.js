import {
    Box,
    Typography,
    Button,
    Step,
    Link,
    Stepper,
    StepLabel,
    Container,
    Paper,
    Toolbar
} from '@mui/material';
import { useState, useCallback } from 'react';

import BottomNavbar from './BottomNavbar';
import TopNavbar from './TopNavbar';

import useToken from '../../useToken'
import Land from './../Land';
// Handles routing.
function App() {

    const { token, removeToken, saveToken } = useToken();
    const [location, setLocation] = useState(0);

    return (

        <Box>
            <Container sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <TopNavbar />
                {/* <Box className='bg-image' /> */}
                <Paper elevation={10}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 5,
                        p: 2.5,
                        borderRadius: 5,
                        mx: 'auto',
                        width: '60%'
                    }}>
                    <img src="./map.png" className="mapImage" />
                </Paper>

                <BottomNavbar />
            </Container>
        </Box>


    );
}

export default App;

  // rfce