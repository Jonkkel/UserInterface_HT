import {
    Box,
    Typography,
    IconButton,
    Paper
} from '@mui/material';

import { useState, useCallback } from 'react';
import LegendModal from './LegendModal'

import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';

const Legend = (props) => {
    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setShowModal(!showModal);
    }

    return (
        <Paper
            sx={{
                position: 'absolute',
                right: 20,
                top: 20,
                overflow: 'hidden',

            }}>
            <IconButton onClick={() => handleClick()}>
                <ManageSearchRoundedIcon
                    fontSize='large'
                    sx={{
                        color: '#000',
                    }} />
            </IconButton>
            <LegendModal
                showModal={showModal}
                setShowModal={setShowModal}
            />

        </Paper>
    );
}

export default Legend;