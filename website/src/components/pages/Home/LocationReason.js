import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';

import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

function App(props) {

    const { reason, setReason } = props;
    return (
        <FormControl fullWidth
            sx={{ mt: 2 }}
        >
            <InputLabel id="demo-simple-select-label">Why share location?</InputLabel>
            <Select
                // hiddenLabel
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Why share location?"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
            >
                <MenuItem value={1}>Want to tell my friends (Default)</MenuItem>
                <MenuItem value={2}>
                    <SportsBarRoundedIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                    Good party right here
                </MenuItem>
                <MenuItem value={3}>
                    <NewReleasesIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                    I'm wasted, help!
                </MenuItem>
            </Select>
        </FormControl>
    )
}
export default App;