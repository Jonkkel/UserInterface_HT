import {
    Typography,
    Box
} from '@mui/material';

import { use100vh } from 'react-div-100vh'

function App(props) {
    const { name } = props;

    return (
        <Box sx={{ display: 'flex', height: use100vh, flexDirection: 'column' }}>
            <Typography
                variant={'h5'}
                sx={{
                    textAlign: 'center',
                    my: 'auto',
                    fontSize: 19,
                }}>
                Here would be the {name} page!
            </Typography>
        </Box>
    );
}

export default App;
// rfce