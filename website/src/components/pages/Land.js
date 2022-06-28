import React, { Suspense, useState } from 'react';
import useToken from '../useToken'
import {
    FormControl,
    Box,
    Button,
    Typography,
    Container,
} from '@mui/material';

import { Link } from 'react-router-dom';


function App() {

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
            <Typography variant='h3'
                sx={{ my: '5%' }}>
                Track your drunk friend app
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'column',
                    my: '5%'
                }}
            >

                <Button
                    component={Link}
                    to="/login"
                    variant="outlined"
                    sx={{m: 1}}>
                    Login

                </Button>
                <Button
                    component={Link}
                    to="/register"
                    variant="outlined" 
                    sx={{m: 1}}>
                    Register
                </Button>
            </Box>
        </Container>
    )
}

export default App;