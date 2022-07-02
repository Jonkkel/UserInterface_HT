
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
                zIndex: 3,
            }}>

            <Container maxWidth="md">
                <Toolbar disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <SportsBarIcon color='beer'/>
                    <Typography variant='body1'
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