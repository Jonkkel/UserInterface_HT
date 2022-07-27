import {
    Typography
} from '@mui/material';

// Handles routing.
function App(props) {
    const { name } = props;

    return (
        <Typography
            variant={'h5'}
            sx={{
                textAlign: 'center',
                my: 'auto',
                fontSize: 19,
            }}>
            Here would be the {name} page!
        </Typography>
    );
}

export default App;
// rfce