
import {
    Box,
    Typography,
    Button,
    Step,
    Link,
    Stepper,
    StepLabel,
    Container,
    AppBar,
    Toolbar,
    IconButton
} from '@mui/material';


import SettingsIcon from '@mui/icons-material/Settings';

const buttonNames = [
    'home',
    'friends',
    'xd', 'xd', 'xd'
]
function App() {


    return (
        <AppBar position="static"
            sx={{
                backgroundColor: 'transparent', top: 0,
                height: '7vh',
            }}>
            <Toolbar disableGutters
                sx={{ display: 'flex', justifyContent: 'center', my: 'auto' }}>

                {/* {buttonNames.map((el) => {
                    return (
                        <Button variant='contained'
                            sx={{
                                mx: { xs: '2%', md: 5 },
                            }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    display: 'flex',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    fontSize: { xs: 12, md: 15, lg: 18 }
                                }}
                            >
                                {el}
                            </Typography>
                        </Button>
                    )
                })} */}
                <Typography variant='h3'
                sx={{
                    color: 'black',
                    fontWeight: 'bold'
                }}>
                    Track your drunk friend
                </Typography>

                <IconButton>
                    <SettingsIcon />
                </IconButton>

            </Toolbar>
        </AppBar>
    )
}

export default App;