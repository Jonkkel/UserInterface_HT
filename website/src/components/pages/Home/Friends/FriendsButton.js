import {
    FormControl,
    Paper,
    Fab,
    ClickAwayListener,
    Typography,
} from '@mui/material';


import { useState, useCallback } from 'react';

import GroupIcon from '@mui/icons-material/Group';


function App(props) {
    const { toggle, setToggle } = props;


    const handleClick = () => {
        setToggle(true);

        // console.log(toggle);
    }
    const handleClickAway = () => {
        setToggle(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Fab
                sx={{
                    position: 'fixed',
                    flexDirection: 'column',
                    height: { xs: '60px', sm: '100px' },
                    width: { xs: '60px', sm: '100px' },
                    borderRadius: '50%',
                    bottom: { xs: 80, sm: 70 },
                    left: { xs: 'calc(10% - 30px)', sm: 'calc(10% - 50px)' },
                    right: { xs: 'calc(50% - 30px)', sm: 'calc(50% - 50px)' },
                    opacity: 0.9,
                    border: '1px solid black'

                }}
                color="white"
                aria-label="add"
                onClick={(e) => handleClick(e)}
            >
                <GroupIcon />
                <Typography
                    sx={{
                        fontSize: { xs: '13px', sm: '15px' },
                        fontWeight: 'bold'
                    }}
                >
                    Friends
                </Typography>
            </Fab>
        </ClickAwayListener>
    )
}
export default App;