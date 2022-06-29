
import { styled } from '@mui/material/styles';
import {
    Box,
    Typography,
    Button,
    Step,
    Link,
    Container,
    Fab,
    IconButton,
    AppBar,
    Toolbar
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import MoreIcon from '@mui/icons-material/MoreVert';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

function App() {


    return (
        <AppBar position="static"
            sx={{
                backgroundColor: 'transparent',
                height: '7vh',
                borderTop: '2px black solid'
            }}>
            <Container maxWidth="md">
                <Toolbar disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly'
                    }}>



                    <IconButton color="secondary" aria-label="open drawer"
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <HomeIcon />
                        <Typography>Home</Typography>
                    </IconButton>
                    <IconButton color="secondary" aria-label="open drawer"
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <ForumIcon />
                        <Typography>Community</Typography>
                    </IconButton>

                    <StyledFab color="secondary" aria-label="add"
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <LocationSearchingIcon />
                    </StyledFab>
                    <IconButton color="secondary"
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <GroupIcon />

                        <Typography>Friends</Typography>
                    </IconButton>
                    <IconButton color="secondary"
                        sx={{
                            flexDirection: 'column'
                        }}>
                        <MoreIcon />

                        <Typography>More</Typography>
                    </IconButton>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default App;