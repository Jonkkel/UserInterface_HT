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
  Typography
} from '@mui/material';
import UserCard from './UserCard';



const Marker = (props) => {
  const { text, badge, name, type, distance, borderColor,online } = props;

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
      textAlign: 'center',
      // flex: 1,
      // width: 55,

      // bgcolor: '#000'
    }}>
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
        sx={{p: 0}}
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
      {/* <Box sx={{bgcolor: '#fff', p: 0, borderRadius: 3}}>
        <Typography variant='inline' sx={{ fontSize: '12px' }}>
          {name.split(' ')[0]}
        </Typography>
        <Typography variant='inline' sx={{ fontSize: '8px', ml: 0.5 }}>
          {online}
        </Typography>
      </Box> */}
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        keepMounted={false}
        sx={{ zIndex: 3001 }}
        disablePortal={true}
      >
        <UserCard name={name} text={text} badge={badge} distance={distance} />
      </Popper>


    </Box >
  );
}

export default Marker;