
import { styled } from '@mui/material/styles';
import {
    Box,
    Typography,
    Button,
    Step,
    Container,
    Fab,
    IconButton,
    AppBar,
    Toolbar
} from '@mui/material';

import { useState, useCallback } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';

import { Link } from 'react-router-dom';
import Modal from './pages/Home/Modal';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOffIcon from '@mui/icons-material/LocationOff';
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

const list = {
    name: ["Home", "Community", "Friends", "Profile"],
    icon: [HomeIcon, ForumIcon, GroupIcon, PersonIcon]
}

function App() {
    const [location, setLocation] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [time, setTime] = useState(1);
    const [page, setPage] = useState("Home");

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



                    <IconButton
                        color={page === "Home" ? "primary" : "secondary"}
                        aria-label="open drawer"
                        component={Link}
                        to="/"
                        onClick={() => setPage("Home")}
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <HomeIcon />
                        <Typography>Home</Typography>
                    </IconButton>
                    <IconButton
                        color={page === "Community" ? "primary" : "secondary"}
                        aria-label="open drawer"
                        component={Link}
                        to="/Community"
                        onClick={() => setPage("Community")}
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <ForumIcon />
                        <Typography>Community</Typography>
                    </IconButton>

                    <StyledFab
                        color={location ? 'success' : 'error'}

                        aria-label="add"
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
                    <IconButton
                        color={page === "Friends" ? "primary" : "secondary"}
                        component={Link}
                        to="/Friends"
                        onClick={() => setPage("Friends")}
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <GroupIcon />

                        <Typography>Friends</Typography>
                    </IconButton>
                    <IconButton
                        color={page === "Profile" ? "primary" : "secondary"}
                        component={Link}
                        to="/Profile"
                        onClick={() => setPage("Profile")}
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