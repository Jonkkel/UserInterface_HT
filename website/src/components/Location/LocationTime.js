
import {
    FormControl,
    Box,
    Modal,
    InputLabel,
    Typography,
    MenuItem,
    Select,
    Button,
    Switch
} from '@mui/material';

function App(props) {

    const {placeholder, setPlaceholder} = props;
    return (
        <FormControl fullWidth sx={{ mt: 2,  }}>
            <InputLabel id="demo-simple-select-label">Time</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Time"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
            >
                <MenuItem value={0}>24 hours (Default)</MenuItem>
                <MenuItem value={1}>72 hours</MenuItem>
                <MenuItem value={2}>5 days</MenuItem>
                <MenuItem value={3}>Till turned off</MenuItem>
            </Select>
        </FormControl>
    )
}
export default App;