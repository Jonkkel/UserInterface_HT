import {
    Input,
    FormControl,
    Paper,
    Typography,
    Box,
    Avatar,
    IconButton,
} from '@mui/material';

import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useCallback } from 'react';

const items = [
    { type: "./Avatar1.png", name: "Jari Kalmari", relation: 'Group: Hahaa', distance: "1.5km away", online: "now", borderColor: "#ffa978" },
    { type: "./Avatar2.png", name: "Aatos Turunen", relation: 'Best friend', distance: "1.5km away", online: "now", borderColor: "#D000F2" },
    { type: "./Avatar3.png", name: "Anselmi Menovesi", relation: 'Friend', distance: "1km away", online: "7 min ago", borderColor: "#5200ff" },
    { type: "./Avatar3.png", name: "Vilma Turunen", relation: 'Group: Hahaa', distance: "23km away", online: "15 min ago", borderColor: "#ffa978" },
    { type: "./Avatar3.png", name: "Sara Kurki", relation: 'Group: Hahaa', distance: "3km away", online: "1 hour ago", borderColor: "#ffa978" },

    // { lat: 61.052, lng: 28.185, type: "./Avatar4.png", name: "Me", badge: "", distance: "Here", borderColor: "#ffa978"},
]

function App(props) {
    const { toggle, setToggle } = props;

    const handleClickAway = () => {
        if (toggle) {
            setToggle(false);
        }
    };

    return (
        // <ClickAwayListener onClickAway={handleClickAway}>
        <Box
            sx={{
                backgroundColor: '#FFF',
                position: 'fixed',
                bottom: 62,
                zIndex: 3000,
                overflow: 'auto',
                display: (toggle ? 'inline-flex' : 'none'),
                left: 0,
                right: 0,
                borderTop: '1px solid #909090',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
            }}>
            {items.map((el, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            px: 0.1,
                            py: 0.5,
                            borderRight: '1px dotted black',
                        }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            width: 'auto',
                            minWidth: 190

                        }}>
                            <Avatar
                                alt={el.name}
                                src={el.type}
                                sx={{ border: '3px solid' + (el.borderColor) }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>

                                <Box sx={{
                                    display: 'flex',
                                }}>
                                    <Typography display="inline" sx={{ fontSize: 14 }}>
                                        {el.name}
                                    </Typography>
                                    <Typography display="inline" sx={{ fontSize: 8, pl: 0.4, mt: 1.1 }}>
                                        {el.online}
                                    </Typography>
                                </Box>
                                <Typography textAlign={'start'} sx={{ fontSize: 8, mt: 1.1 }}>
                                    {el.relation}
                                </Typography>
                            </Box>
                        </Box>
                        <FormControl
                            variant="standard"
                            sx={{
                                display: 'flex',
                                mx: 'auto',
                                pb: 1,
                                width: 150,
                            }}>
                            <Input
                                id="input-with-icon-adornment"
                                placeholder='Quick chat'
                                variant="filled"
                                size="small"
                                endAdornment={
                                    <IconButton position="start">
                                        <SendIcon color='blue' />
                                    </IconButton>
                                }
                            />
                        </FormControl>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly'
                        }}>
                            <IconButton
                                sx={{
                                    width: 'auto',
                                    height: '30px',
                                    borderRadius: 5,
                                    display: 'flex',
                                    p: 0.5,
                                    border: '1px solid black',
                                    alignItems: 'center'
                                }}>


                                <Typography display="inline" sx={{ fontSize: 10 }} color={'#000'}>
                                    Ask/View
                                </Typography>
                                <LocationOnIcon />
                            </IconButton>
                            <IconButton
                                sx={{
                                    width: 'auto',
                                    height: '30px',
                                    borderRadius: 5,
                                    display: 'flex',
                                    p: 0.5,
                                    border: '1px solid black',
                                    alignItems: 'center'
                                }}>


                                <Typography display="inline" sx={{ fontSize: 10 }} color={'#000'}>
                                    Send
                                </Typography>
                                <LocationOnIcon />
                            </IconButton>

                        </Box>


                    </Box>
                )
            })}
        </Box >
        // </ClickAwayListener>

    )
}
export default App;