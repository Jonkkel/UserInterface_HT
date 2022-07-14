import {
    FormControl,
    InputLabel,
    Typography,
    Fab,
} from '@mui/material';


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
        <Fab
            // className={location ? 'icon' : ''}
            sx={{
                position: 'fixed',
                flexDirection: 'column',
                height: { xs: '60px', sm: '100px' },
                width: { xs: '60px', sm: '100px' },
                borderRadius: '50%',
                bottom: { xs: 45, sm: 40 },
                left: { xs: 'calc(50% - 30px)', sm: 'calc(50% - 50px)' },
                right: { xs: 'calc(50% - 30px)', sm: 'calc(50% - 50px)' },

            }}
            color={location ? 'success' : 'error'}

            aria-label="add"
            onClick={() => handleClick()}
        >
            {location ? <LocationOnOutlinedIcon sx={{ fontSize: { xs: '25px', sm: '40px' } }} /> : <LocationOffOutlinedIcon />}
            {location ?
                <Typography sx={{
                    fontSize: { xs: '13px', sm: '15px' }
                }}
                >
                    {timelist[time]}
                </Typography>
                :
                <Typography variant={'body1'}>Off</Typography>
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

    )
}
export default App;