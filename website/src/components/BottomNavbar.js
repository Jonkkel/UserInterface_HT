
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
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import HomeSharpIcon from '@mui/icons-material/Home';
import ForumSharpIcon from '@mui/icons-material/Forum';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import PersonSharpIcon from '@mui/icons-material/Person';

import { Link } from 'react-router-dom';

import LocationShareButton from './Location/LocationShareButton';
import FriendsButton from './Friends/FriendsButton';

const list = [
    { name: "Home", icon: HomeOutlinedIcon, selectedIcon: HomeSharpIcon, link: "/" },
    { name: "Community", icon: ForumOutlinedIcon, selectedIcon: ForumSharpIcon, link: "/Community" },
    { name: "Friends", icon: GroupsOutlinedIcon, selectedIcon: GroupsSharpIcon, link: "/Friends" },
    { name: "Profile", icon: PersonOutlinedIcon, selectedIcon: PersonSharpIcon, link: "/Profile" },
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
                // position: 'fixed',
                marginTop: 'auto',
                width: '100%',
                borderTop: '1px #909090 solid',
                height: '67px',
                // bottom: 0
                // zIndex: 3002
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
                                color={page === (el.name) ? "black" : "black"}
                                aria-label="open drawer"
                                component={Link}
                                
                                to={el.link}
                                onClick={() => setPage(el.name)}
                                sx={{
                                    flexDirection: 'column',
                                    my: 'auto',
                                }}>
                                {page === (el.name) ? <el.selectedIcon fontSize="medium" /> : <el.icon fontSize="medium" />}
                                <Typography fontSize={14}>{el.name}</Typography>
                            </IconButton>
                        )
                    })}
                </Toolbar>
            </Container>
        </Box>
    )
}

export default App;