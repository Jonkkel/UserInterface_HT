
import { styled } from '@mui/material/styles';
import {
    Box,
    Typography,
    Button,
    Step,
    Link,
    Container,
    Fab,
    IconButton,
    AppBar,
    Toolbar
} from '@mui/material';

import { useState, useCallback } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import Modal from './Modal';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOffIcon from '@mui/icons-material/LocationOff';
import PersonIcon from '@mui/icons-material/Person';
const StyledFab = styled(Fab)({
    position: 'absolute',
    height: 80,
    width: 80,
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

function App() {
    const [location, setLocation] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [time, setTime] = useState(1)

    function handleClick() {
        // setLocation(!location);
        setShowModal(!showModal);
    }

    return (
        <AppBar position="static"
            sx={{
                backgroundColor: 'transparent',
                height: '7vh',
                borderRadius: 3,
                borderTop: '2px black solid'
            }}>
            <Container maxWidth="md">
                <Toolbar disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly'
                    }}>



                    <IconButton color="primary" aria-label="open drawer"
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <HomeIcon />
                        <Typography>Home</Typography>
                    </IconButton>
                    <IconButton color="secondary" aria-label="open drawer"
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <ForumIcon />
                        <Typography>Community</Typography>
                    </IconButton>

                    <StyledFab color={location ? 'success' : 'error'} aria-label="add"
                        sx={{
                            flexDirection: 'column'
                        }}
                        onClick={() => handleClick()}
                    >

                        {location ? <LocationOnIcon /> : <LocationOffIcon />}

                        {location ?
                            <Typography variant={'body1'}>on</Typography>
                            :
                            <Typography variant={'body1'}>off</Typography>
                        }
                    </StyledFab>

                    <Modal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        location={location}
                        setLocation={setLocation}
                        time={time}
                        setTime={setTime}
                    />
                    <IconButton color="secondary"
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <GroupIcon />

                        <Typography>Friends</Typography>
                    </IconButton>
                    <IconButton color="secondary"
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <PersonIcon />

                        <Typography>Profile</Typography>
                    </IconButton>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default App;