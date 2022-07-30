import {
    FormControl,
    Paper,
    Fab,
    ClickAwayListener,
    Typography,
} from '@mui/material';


import { useState, useCallback } from 'react';

import GroupSharpIcon from '@mui/icons-material/GroupSharp';


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
                    height: { xs: '60px', sm: '80px' },
                    width: { xs: '60px', sm: '80px' },
                    borderRadius: '50%',
                    bottom: 80,
                    left: { xs: 'calc(5% - 30px)', sm: 'calc(5% - 50px)' },
                    right: { xs: 'calc(50% - 30px)', sm: 'calc(50% - 50px)' },
                    opacity: 0.95,
                    border: '5px solid #909090',
                    bgcolor: "#fafaf9",
                    "&:hover": {
                        bgcolor: "#e5e5e5",
                    }
                }}
                aria-label="add"
                onClick={(e) => handleClick(e)}
            >
                <GroupSharpIcon sx={{color: '#'}}/>
                <Typography
                    sx={{
                        fontSize: { xs: '12px', sm: '15px' },
                        fontWeight: 'bold',
                        color: '#002747'
                    }}
                >
                    Friends
                </Typography>
            </Fab>
        </ClickAwayListener>
    )
}
export default App;