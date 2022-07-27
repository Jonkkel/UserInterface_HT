import React from 'react';
import './Marker.css';
import { styled } from '@mui/material/styles';

import {
  Box,
  IconButton,
  Avatar,
  Popper,
  Badge,
  ClickAwayListener,
  Tooltip
} from '@mui/material';
import UserCard from './UserCard';



const Marker = (props) => {
  const { text, badge, name, type, distance, borderColor } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  // console.log(type)
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
      >
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
          <Badge
            sx={{
              color: '#000',
              zIndex: 1
            }}
            // overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            badgeContent={
              badge
            }>
            <Avatar
              alt="Travis Howard"
              src={type}
              sx={{ border: '3px solid' + (borderColor) }}
            />
          </Badge>

        </ClickAwayListener>
      </IconButton>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        keepMounted={false}
        sx={{ zIndex: 3001}}
        disablePortal={true}
      >
        <UserCard name={name} text={text} badge={badge} distance={distance} />
      </Popper>


    </Box >
  );
}

export default Marker;