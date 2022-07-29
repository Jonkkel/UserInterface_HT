import {
    FormControl,
    Box,
    Typography,
    Fab,
} from '@mui/material';
import { yellow, danger } from '@mui/material/colors';

import { useState, useCallback } from 'react';
import LocationModal from './LocationModal';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocationOffOutlinedIcon from '@mui/icons-material/LocationOffOutlined';

const timelist = [
    ">23h", "~3 days", "~5 days", "On"
]


function App(props) {
    const [showModal, setShowModal] = useState(false);

    const [time, setTime] = useState(0);
    const [location, setLocation] = useState(false);

    function handleClick() {
        setShowModal(!showModal);
    }

    return (
        <Box>
            <Fab
                // className={location ? 'icon' : ''}
                sx={{
                    position: 'fixed',
                    flexDirection: 'column',
                    height: { xs: '60px', sm: '100px' },
                    width: { xs: '60px', sm: '100px' },
                    borderRadius: '50%',
                    bottom: 80,
                    left: { xs: 'calc(50% - 30px)', sm: 'calc(50% - 50px)' },
                    right: { xs: 'calc(50% - 30px)', sm: 'calc(50% - 50px)' },
                    opacity: 0.95,
                    border: '1px solid #909090',
                    bgcolor: (location ? "#facc15" : "#f87171"),
                    "&:hover": {
                        bgcolor: (location ? "#fef08a" : "#fecaca"),
                    }


                }}

                aria-label="add"
                onClick={() => handleClick()}
            >
                {location ? <LocationOnOutlinedIcon sx={{ fontSize: { xs: '25px', sm: '40px' } }} /> : <LocationOffOutlinedIcon />}
                {location ?
                    <Typography sx={{
                        fontSize: { xs: '13px', sm: '15px' }
                    }}
                    >
                        GPS on
                        {/* {timelist[time]} */}
                    </Typography>
                    :
                    <Typography sx={{
                        fontSize: { xs: '12px', sm: '15px' },
                    }} variant={'body1'}>GPS off</Typography>
                }
                <LocationModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    location={location}
                    setLocation={setLocation}
                    time={time}
                    setTime={setTime}
                />
            </Fab>
        </Box >

    )
}
export default App;