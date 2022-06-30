import {
    Typography
} from '@mui/material';

// Handles routing.
function App(props) {
    const { name } = props;

    return (
        <Typography
            variant={'overline'}
            sx={{
                textAlign: 'center',
                fontSize: 19,
            }}>
            Here would be the {name} page!
        </Typography>
    );
}

export default App;
// rfce