import React, { Suspense, useState } from 'react';

import { styled } from '@mui/material/styles';
import {
    Box,
    Modal,
    Typography,
    Button,
} from '@mui/material';


import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocationTime from './LocationTime'
import LocationReason from './LocationReason'

const StyledButton = styled(Button)({
    width: '80%',
    height: '60px',
    display: 'flex',
    margin: '0 auto',
    marginTop: '10px',
    borderRadius: '10px'
});

function App(props) {

    const { showModal,
        setShowModal,
        location,
        setLocation,
        time,
        setTime
    } = props;

    const handleShowModal = () => {
        setShowModal(!showModal);
        setPlaceholder(0);
        setReason(1);
    }

    const locationOn = () => {
        handleShowModal();
        setTime(placeholder);
        setLocation(true);
    }

    const locationOff = () => {
        handleShowModal();
        setLocation(false);
    }

    // const [checked, setChecked] = useState(false);
    const [reason, setReason] = useState(1);
    const [placeholder, setPlaceholder] = useState(0);

    return (
        <Box sx={{ display: 'flex', color: 'black', flexDirection: { xs: 'column', sm: 'column' } }}>
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                onClick={(e) => e.stopPropagation()}
                sx={{ overflow: 'scroll' }}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '350px',
                    left: '50%',
                    width: { xs: '70%', sm: '60%', md: '30%' },
                    transform: 'translate(-50%, -300px)',
                    bgcolor: 'background.paper',
                    borderRadius: 5,
                    p: 3,
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <LocationOnOutlinedIcon sx={{ fontSize: "60px" }} />
                    </Box>
                    <Typography variant='h6' sx={{ textAlign: 'center' }}>
                        Turn on location sharing
                    </Typography>
                    <Typography variant='body2' sx={{ textAlign: 'center' }}>
                        Turn on location sharing so your friends can find you.
                    </Typography>
                    <LocationTime placeholder={placeholder} setPlaceholder={setPlaceholder} />
                    {/* <LocationReason reason={reason} setReason={setReason} /> */}
                    <StyledButton
                        variant='contained'
                        color='black'
                        onClick={() => locationOn()}>
                        Ok
                    </StyledButton>
                    <StyledButton
                        variant='contained'
                        color='white'
                        onClick={() => handleShowModal()}>
                        Cancel
                    </StyledButton>
                    {location === true ?
                        <StyledButton
                            variant='contained'
                            color='warning'
                            onClick={() => locationOff()}>
                            Stop sharing location
                        </StyledButton>
                        :
                        <></>
                    }

                </Box>
            </Modal >
        </Box >
    )
}

export default App;