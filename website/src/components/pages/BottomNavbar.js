
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

import Div100vh from 'react-div-100vh'
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
        <Box
            style={{
                backgroundColor: '#FFF',
                position: 'fixed',
                width: '100%',
                borderTop: '2px black solid',
                height: 'auto',

                bottom: 0,
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
            </Container>
        </Box>
    )
}

export default App;