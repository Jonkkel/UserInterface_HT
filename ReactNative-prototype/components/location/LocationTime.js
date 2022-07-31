import React, { useState, useCallback } from 'react';
// import { IconButton, Modal, Box, Text, Image } from 'native-base';
import { Button, Select, FormControl, Input, Box, Icon, Center, Text } from "native-base";

function App(props) {

    const {placeholder, setPlaceholder} = props;
    return (
        <FormControl fullWidth sx={{ mt: 2 }}>
            {[console.log("time:" + placeholder)]}
            <FormControl.Label>Time</FormControl.Label>
            {/* <InputLabel id="demo-simple-select-label">Time</InputLabel> */}
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Time"
                selectedValue={placeholder}
                onValueChange={itemValue => setPlaceholder(itemValue)}
            >
                <Select.Item label="24 hours (Default)" value={0} />
                <Select.Item label="72 hours" value={1} />
                <Select.Item label="5 days" value={2} />
                <Select.Item label="Till turned off" value={3} />
            </Select>
        </FormControl>
    )
}
export default App;