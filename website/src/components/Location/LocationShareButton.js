import {
    FormControl,
    Box,
    Typography,
    Fab,
} from '@mui/material';
import { yellow, danger } from '@mui/material/colors';

import { useState, useCallback } from 'react';
import LocationModal from './LocationModal';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
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
        <Box
            sx={{
                position: 'fixed',
                // align: 'center',
                display: 'flex',
                // alignSelf: 'center',
                // textAlign: 'center',
                flexDirection: 'column',
                // height: { xs: '60px', sm: '100px' },
                width: { xs: '60px', sm: '100px' },
                // borderRadius: '50%',
                bottom: 70,
                // left: '50%',
                left: { xs: 'calc(50% - 20px)', sm: 'calc(50% - 40px)' },
                right: { xs: 'calc(50% - 20px)', sm: 'calc(50% - 40px)' },
                // border: '1px solid #909090',
                // bgcolor: (location ? "#123123" : "#123123"),
                // "&:hover": {
                //     bgcolor: (location ? "#321321" : "#321321"),
                // }


            }}>
            <Fab
                // className={location ? 'icon' : ''}

                sx={{
                    height: { xs: '60px', sm: '100px' },
                    width: { xs: '60px', sm: '100px' },
                    borderRadius: '50%',
                    // bottom: 80,
                    // left: { xs: 'calc(50% - 30px)', sm: 'calc(50% - 50px)' },
                    // right: { xs: 'calc(50% - 30px)', sm: 'calc(50% - 50px)' },
                    opacity: 0.95,
                    border: '5px solid #656700',
                    borderColor: (location ? "#656700" : "#f87171"),
                    bgcolor: (location ? "#FFF" : "#fff"),
                    "&:hover": {
                        bgcolor: (location ? "#e3e4d3" : "#fecaca"),
                    }
                }}
                aria-label="add"
                onClick={() => handleClick()}
            >

                {location ? <LocationOnSharpIcon sx={{ fontSize: { xs: '40px', sm: '80px' }, color: '#bdc000', }} /> : <LocationOffOutlinedIcon sx={{ fontSize: { xs: '40px', sm: '80px', color: '#909090' } }} />}
            </Fab>
            <Box>

                <Typography sx={{
                    fontSize: { xs: '13px', sm: '15px' },
                    fontWeight: 'bold',
                    color: (location ? '#636500' : '#909090')
                }}>
                    {location ? "GPS on" : "GPS off"}
                </Typography>

            </Box>

            <LocationModal
                showModal={showModal}
                setShowModal={setShowModal}
                location={location}
                setLocation={setLocation}
                time={time}
                setTime={setTime}
            />
        </Box >
    )
}
export default App;