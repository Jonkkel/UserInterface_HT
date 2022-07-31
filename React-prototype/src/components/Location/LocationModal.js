import React, { Suspense, useState } from 'react';

import { styled } from '@mui/material/styles';
import {
    Box,
    Modal,
    Typography,
    Button,
} from '@mui/material';

import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocationTime from './LocationTime'
import LocationReason from './LocationReason'



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
                    top: '50%',
                    left: '50%',
                    width: { xs: '80%', sm: '70%', md: '40%' },
                    transform: 'translate(-50%, -250px)',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    p: 3,
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <LocationOnSharpIcon sx={{ fontSize: "80px", color: "#facc15" }} />
                    </Box>
                    <Typography variant='h6' sx={{ textAlign: 'center' }}>
                        Turn on location sharing
                    </Typography>
                    <Typography variant='body2' sx={{ textAlign: 'center' }}>
                        Turn on location sharing so your friends can find you.
                    </Typography>
                    <Box sx={{width:'90%', mx: 'auto'}}>

                        <LocationTime placeholder={placeholder} setPlaceholder={setPlaceholder} />
                        {/* <LocationReason reason={reason} setReason={setReason} /> */}

                    </Box> 


                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            mt: 1
                        }}>

                        <Button
                            // variant='contained'
                            sx={{
                                border: '0.2px solid #909090',
                                bgcolor: "#f2da01",
                                color: '#000',
                                height: 60,
                                width: '40%',
                                "&:hover": {
                                    bgcolor: "#fef08a",
                                }
                            }}
                            onClick={() => locationOn()}>
                            Ok
                        </Button>
                        <Button
                            sx={{

                                border: '0.2px solid #909090',
                                bgcolor: "#e7e5e4",
                                color: '#000',
                                height: 60,
                                width: '40%'
                            }}
                            onClick={() => handleShowModal()}>
                            Cancel
                        </Button>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        {location === true ?
                            <Button
                                sx={{
                                    border: '0.2px solid #909090',
                                    bgcolor: "#fe4154",
                                    color: '#000',
                                    height: 60,
                                    mt: 1,
                                    width: '88%',
                                    "&:hover": {
                                        bgcolor: "#fecdd3",
                                    }
                                }}
                                color='warning'
                                onClick={() => locationOff()}>
                                Stop sharing location
                            </Button>
                            :
                            <></>
                        }

                    </Box>
                </Box>
            </Modal >
        </Box >
    )
}

export default App;