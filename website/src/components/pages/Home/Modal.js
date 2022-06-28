import React, { Suspense, useState } from 'react';

import {
    FormControl,
    Box,
    Modal,
    InputLabel,
    Typography,
    MenuItem,
    Select,
    Button
} from '@mui/material';



function App() {

    const [open, setOpen] = useState(true);

    const handleShowModal = () => {
        setOpen(true);
    }


    return (
        <Box sx={{ display: 'flex', color: 'black', flexDirection: { xs: 'column', sm: 'column' } }}>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
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
                    <Typography variant='h6'>
                        Use location
                    </Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Length</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Length"
                        >
                            <MenuItem value={10}>1 day</MenuItem>
                            <MenuItem value={20}>2 days</MenuItem>
                            <MenuItem value={30}>5 days</MenuItem>
                            <MenuItem value={40}>Till turned off</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant='contained'
                        sx={{
                            mx: 'auto',
                            display: 'flex',
                            mt: 2
                        }}
                        onClick={() => setOpen(false)}>
                        Selkee
                    </Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default App;