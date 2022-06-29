
import {
    Box,
    Typography,
    Button,
    Step,
    Icon,
    AppBar,
    Toolbar,
    IconButton
} from '@mui/material';

import SportsBarIcon from '@mui/icons-material/SportsBar';
import SettingsIcon from '@mui/icons-material/Settings';

function App() {
    return (
        <AppBar position="static"
            sx={{
                backgroundColor: 'transparent',
                borderRadius: 3,
                top: 0,
                height: '7vh',
            }}>
            <Toolbar disableGutters
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    my: 'auto'
                }}>
                <SportsBarIcon color='primary'
                    sx={{ ml: 10 }} />
                <Typography variant='h6'
                    sx={{
                        color: 'black',
                        fontWeight: 'bold'
                    }}>
                    Track your drunk friend
                </Typography>
                <Box flexGrow={1} />

                <IconButton>
                    <SettingsIcon />
                </IconButton>

            </Toolbar>
        </AppBar>
    )
}

export default App;