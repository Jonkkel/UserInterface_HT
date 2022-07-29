import React, { Suspense, useState } from 'react';

import {
    FormControl,
    Box,
    Modal,
    InputLabel,
    Typography,
    Button,
    Select,
    Divider,
    Avatar,
    IconButton
} from '@mui/material';

import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import CloseIcon from '@mui/icons-material/Close';

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
                    top: '50%',
                    left: '50%',
                    width: { xs: '70%', sm: '60%', md: '30%' },
                    transform: 'translate(-50%, -300px)',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    p: 3,

                }}>
                    <IconButton
                        sx={{
                            position: 'absolute',
                            right: 20
                        }}
                        onClick={() => setShowModal(false)}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant='h4' sx={{ textDecoration: 'underline', textAlign: 'center', display: 'block' }}>
                        Legend
                    </Typography>
                    <Divider sx={{ my: 1 }} />

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        mb: 0.5
                    }}>
                        <Box sx={{ backgroundColor: '#ffa978 ', minWidth: 30, minHeight: 30, m: 1 }} />
                        <Box>
                            <Typography variant='body1' fontSize={14}>
                                Group member
                            </Typography>
                            <Typography variant='body2' fontSize={12}>
                                This color is associated with those belonging to the same group
                            </Typography>
                        </Box>

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        mb: 0.5
                    }}>
                        <Box sx={{ backgroundColor: '#d000f2 ', minWidth: 30, minHeight: 30, m: 1 }} />

                        <Box>

                            <Typography variant='body1' fontSize={14}>
                                Best friend
                            </Typography>
                            <Typography variant='body2' fontSize={12}>
                                This color is associated with your Best friends
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        mb: 0.5
                    }}>
                        <Box sx={{
                            backgroundColor: '#5200ff ',
                            minWidth: 30,
                            minHeight: 30,
                            m: 1
                        }} />
                        <Box>

                            <Typography variant='body1' fontSize={14}>
                                Friend
                            </Typography>
                            <Typography variant='body2' fontSize={12}>
                                This color is associated with your Friends
                            </Typography>
                        </Box>

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        mb: 0.5
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

                            <Typography variant='body1' fontSize={14}>
                                Trail
                            </Typography>
                            <Typography variant='body2' fontSize={12}>
                                Trail shows you the previously treaded path of a person.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        mb: 0.5
                    }}>
                        <NewReleasesIcon
                            sx={{
                                width: 30,
                                height: 30,
                                m: 1
                            }} />
                        <Box>
                            <Typography variant='body1' fontSize={14}>
                                Help invite
                            </Typography>
                            <Typography variant='body2' fontSize={12}>
                                This marks a person who has posted an invite for help
                            </Typography>
                        </Box>

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        mb: 0.5
                    }}>
                        <SportsBarRoundedIcon
                            sx={{
                                width: 30,
                                height: 30,
                                m: 1
                            }} />

                        <Box>
                            <Typography variant='body1' fontSize={14}>
                                Drinking invite
                            </Typography>
                            <Typography variant='body2' fontSize={12}>
                                This marks a person who has posted an invite for something drinking related
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ mb: 1 }} />
                    <Button onClick={() => setShowModal(false)}
                        sx={{
                            bgcolor: "#facc15",
                            color: '#000',
                            border: '0.2px solid #000',
                            height: 60,
                            "&:hover": {
                                bgcolor: "#fef08a",
                            }
                        }}>
                        Ok
                    </Button>
                </Box>

            </Modal >
        </Box >
    )
}

export default App;