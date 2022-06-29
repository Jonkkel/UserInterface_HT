import {
    Box,
    Typography
} from '@mui/material';
// Handles routing.
function App(props) {

    const { name } = props;

    return (

        <Typography
            variant={'h3'}
            sx={{
                textAlign: 'center'
            }}>
            Here would be the {name} page!
        </Typography>


    );
}

export default App;

  // rfce