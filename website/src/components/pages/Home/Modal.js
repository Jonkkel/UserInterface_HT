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
    Switch
} from '@mui/material';



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
        setLocation(checked);
    }

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

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
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                        <Typography variant='h6' flexGrow={1}>
                            Use location
                        </Typography>
                        <Switch
                            label='aria-label'
                            checked={checked}
                            onChange={handleChange}
                            color="success" />

                    </Box>
                    <FormControl fullWidth disabled={checked ? false : true}>
                        <InputLabel id="demo-simple-select-label">Length</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Length"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            <MenuItem value={1}>1 day</MenuItem>
                            <MenuItem value={2}>2 days</MenuItem>
                            <MenuItem value={5}>5 days</MenuItem>
                            <MenuItem value={10}>Till turned off</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant='contained'
                        sx={{
                            mx: 'auto',
                            display: 'flex',
                            mt: 2
                        }}
                        onClick={() => handleShowModal()}>
                        Selkee
                    </Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default App;