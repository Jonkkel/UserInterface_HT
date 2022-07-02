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
  const { color, badge, name, type } = props;

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
            }}
            // overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            badgeContent={
              badge
            }>
            <Avatar
              alt="Travis Howard"
              src={type}
            />
          </Badge>

        </ClickAwayListener>
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <UserCard name={name} />
      </Popper>


    </Box >
  );
}

export default Marker;