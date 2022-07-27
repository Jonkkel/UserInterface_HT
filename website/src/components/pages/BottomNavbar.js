
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
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';

import { Link } from 'react-router-dom';

import LocationShareButton from './Home/Location/LocationShareButton';
import FriendsButton from './Home/Friends/FriendsButton';

const StyledFab = styled(Fab)({
    position: 'absolute',
    flexDirection: 'column',
    height: 100,
    width: 100,
    borderRadius: '50%',
    top: { xs: -150, sm: -50 },
    zIndex: 1,
    left: 0,
    right: 0,
    margin: 'auto',
    margin: 'auto',
});

const list = [
    { name: "Home", icon: HomeOutlinedIcon, selectedIcon: HomeIcon, link: "/" },
    { name: "Community", icon: ForumOutlinedIcon, selectedIcon: ForumIcon, link: "/Community" },
    { name: "Friends", icon: GroupOutlinedIcon, selectedIcon: GroupIcon, link: "/Friends" },
    { name: "Profile", icon: PersonOutlinedIcon, selectedIcon: PersonIcon, link: "/Profile" },
    // name: ["Home", "Community", "Friends", "Profile"],
    // icon: [HomeOutlinedIcon, ForumOutlinedIcon, GroupOutlinedIcon, PersonOutlinedIcon],
    // selectedIcon: [HomeIcon, ForumIcon, GroupIcon, PersonIcon],
]



function App() {

    const [page, setPage] = useState(window.location.pathname.replace('/', '') === '' ? 'Home' : window.location.pathname.replace('/', ''));



    return (
        <AppBar position="fixed"
            color="white"
            sx={{
                borderTop: '2px black solid',
                minHeight: '65px',
                bottom: 0,
                top: 'calc(100vh - 67px)',
                zIndex: 3002
            }}>
            <Container maxWidth="sm">
                <Toolbar disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                    {list.map((el, index) => {
                        return (
                            <IconButton
                                key={el.name}
                                color={page === (el.name) ? "primary" : "black"}
                                aria-label="open drawer"
                                component={Link}
                                to={el.link}
                                onClick={() => setPage(el.name)}
                                sx={{
                                    flexDirection: 'column',
                                    my: 'auto'
                                }}>
                                {page === (el.name) ? <el.selectedIcon fontSize="medium" /> : <el.icon fontSize="medium" />}
                                <Typography>{el.name}</Typography>
                            </IconButton>
                        )
                    })}
                </Toolbar>



                {/* <IconButton
                        color={page === "Home" ? "primary" : "secondary"}
                        aria-label="open drawer"
                        component={Link}
                        to="/"
                        onClick={() => setPage("Home")}
                        sx={{
                            flexDirection: 'column',
                            my: 'auto'
                        }}>
                        {page === "Home" ? <HomeIcon fontSize="medium" /> : <HomeOutlinedIcon fontSize="medium" />}
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
                        <ForumOutlinedIcon fontSize="medium" />
                        <Typography>Community</Typography>
                    </IconButton>


                    <IconButton
                        color={page === "Friends" ? "primary" : "secondary"}
                        component={Link}
                        to="/Friends"
                        onClick={() => setPage("Friends")}
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <GroupOutlinedIcon fontSize="medium" />

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
                        <PersonOutlinedIcon fontSize="medium" />

                        <Typography>Profile</Typography>
                    </IconButton> */}

            </Container>
        </AppBar>
    )
}

export default App;