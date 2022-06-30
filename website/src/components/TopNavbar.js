
import {
    Box,
    Typography,
    Button,
    Step,
    Container,
    AppBar,
    Toolbar,
    IconButton
} from '@mui/material';

import SportsBarIcon from '@mui/icons-material/SportsBar';

function App() {
    return (
        <AppBar position="static"
            sx={{
                backgroundColor: 'transparent',
                borderRadius: 3,
                top: 0,
                height: '7vh',
                zIndex: 3,
                
            }}>

            <Container maxWidth="md">
                <Toolbar disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        my: 'auto'
                    }}>
                    <SportsBarIcon color='beer'/>
                    <Typography variant='h6'
                        sx={{
                            color: 'black',
                            fontWeight: 'bold'
                        }}>
                        Track your drunk friend
                    </Typography>
                    <Box flexGrow={1} />

                    {/* <IconButton>
                    <SettingsIcon />
                </IconButton> */}

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default App;