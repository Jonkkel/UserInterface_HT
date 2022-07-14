import {
    Box,
} from '@mui/material';
import Map from '../../map/Map';

function App() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <Box
                sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    borderRadius: 5,
                    height: 'calc(100vh - 72px)',
                    width: '100%',
                }}>
                <Map />
            </Box>
        </Box>
    );
}

export default App;
  // rfce