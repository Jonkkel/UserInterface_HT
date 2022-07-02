import React from 'react';
import './Marker.css';
import { styled } from '@mui/material/styles';

import {
    Box,
    AvatarGroup,
    Avatar,
    IconButton,
    Badge,
    Popper,
    Tooltip
} from '@mui/material';
import UserCard from './UserCard';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));


const Marker = (props) => {
    const { color, badge, name, type } = props;


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
        }}>


            <IconButton
                aria-describedby={id}
                onClick={handleClick}
            >
                <Badge
                    sx={{
                        color: '#000',
                    }}
                    // overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    badgeContent={
                        badge
                    }>
                    <AvatarGroup max={3}>
                        <Avatar alt="Remy Sharp" src='./Avatar1.png' />
                        <Avatar alt="Remy Sharp" src='./Avatar2.png' />
                        <Avatar alt="Remy Sharp" src='./Avatar3.png' />
                        <Avatar alt="Remy Sharp" src='./Avatar1.png' />
                        <Avatar alt="Remy Sharp" src='./Avatar1.png' />
                    </AvatarGroup>
                </Badge>
            </IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <UserCard name={name} />
            </Popper>
        </Box>
    );
};

export default Marker;