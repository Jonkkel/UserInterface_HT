import React, { Suspense, useState } from 'react';

import {
    FormControl,
    Box,
    Modal,
    InputLabel,
    Typography,
    MenuItem,
    Select,
    Button,
    Avatar,
    IconButton
} from '@mui/material';

import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function App(props) {

    const {
        showModal,
        setShowModal,
    } = props;

    const handleShowModal = () => {
        setShowModal(!showModal);
    }

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
                    display: 'flex',
                    flexDirection: 'column',
                    top: '350px',
                    left: '50%',
                    width: { xs: '70%', sm: '60%', md: '30%' },
                    transform: 'translate(-50%, -300px)',
                    bgcolor: 'background.paper',
                    borderRadius: 5,
                    p: 3,

                }}>
                    <IconButton
                        sx={{
                            position: 'absolute',
                            right: 20
                        }}
                        onClick={() => setShowModal(false)}>
                        <HighlightOffIcon />
                    </IconButton>
                    <Typography variant='h4' sx={{ textDecoration: 'underline', textAlign: 'center', display: 'block', mb: 2 }}>
                        Legend
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Box sx={{ backgroundColor: '#ffa978 ', minWidth: 30, minHeight: 30, m: 1 }} />
                        <Box>
                            <Typography>
                                Group member
                            </Typography>
                            <Typography variant='body2'>
                                This color is associated with those belonging to the same group
                            </Typography>
                        </Box>

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Box sx={{ backgroundColor: '#00ff94 ', minWidth: 30, minHeight: 30, m: 1 }} />

                        <Box>

                            <Typography>
                                Best friend
                            </Typography>
                            <Typography variant='body2'>
                                This color is associated with your Best friends
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            backgroundColor: '#5200ff ',
                            minWidth: 30,
                            minHeight: 30,
                            m: 1
                        }} />
                        <Box>

                            <Typography>
                                Friend
                            </Typography>
                            <Typography variant='body2'>
                                This color is associated with your Friends
                            </Typography>
                        </Box>

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Avatar
                            alt="Trail icon"
                            src={'./route.png'}
                            sx={{
                                width: 30,
                                height: 30,
                                m: 1
                            }}
                        />
                        <Box>

                            <Typography>
                                Trail
                            </Typography>
                            <Typography variant='body2'>
                                Trail shows you the previously treaded path of a person.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <NewReleasesIcon
                            sx={{
                                width: 30,
                                height: 30,
                                m: 1
                            }} />
                        <Box>
                            <Typography>
                                Help invite
                            </Typography>
                            <Typography variant='body2'>
                                This marks a person who has posted an invite for help
                            </Typography>
                        </Box>

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <SportsBarRoundedIcon
                            sx={{
                                width: 30,
                                height: 30,
                                m: 1
                            }} />

                        <Box>
                            <Typography>
                                Drinking invite
                            </Typography>
                            <Typography variant='body2'>
                                This marks a person who has posted an invite for something drinking related
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Modal >
        </Box >
    )
}

export default App;