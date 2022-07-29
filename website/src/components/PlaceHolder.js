import {
    Typography,
    Box
} from '@mui/material';

import BottomNavbar from './BottomNavbar';
// Handles routing.
function App(props) {
    const { name } = props;

    return (
        <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
            <Typography
                variant={'h5'}
                sx={{
                    textAlign: 'center',
                    my: 'auto',
                    fontSize: 19,
                }}>
                Here would be the {name} page!
            </Typography>
            <BottomNavbar />
        </Box>
    );
}

export default App;
// rfce