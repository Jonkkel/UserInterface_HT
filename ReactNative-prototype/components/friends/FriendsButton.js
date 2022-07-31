// import {
//     FormControl,
//     Paper,
//     Fab,
//     ClickAwayListener,
//     Typography,
// } from '@mui/material';

import React, { useState, useCallback } from 'react';
import { Fab, Icon, Box, Button, Container, Text, ClickAwayListener } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


function App(props) {
    const { toggle, setToggle } = props;


    const handleClick = () => {
        setToggle(!toggle);
        { console.log("toggle: " + toggle) }

    }
    const handleClickAway = () => {
        setToggle(false);
    };

    return (
        <Box>
            <Button
                position={'absolute'}
                left={2}
                bottom={2}
                zIndex={2}
                elevation={5}
                bg={'#fafaf9'}
                width={70}
                height={70}
                borderRadius={50}
                borderWidth={5}
                borderColor={"#909090"}
                opacity={0.9}
                _pressed={{
                    bg: '#e5e5e5'
                }}
                onPress={() => handleClick()}
            >
                <Icon
                    // mb="1"
                    as={MaterialCommunityIcons}
                    name={"account-multiple"}
                    size="5"
                    style={{ color: '#000', flex: 1, marginLeft: 'auto', marginRight: 'auto' }}
                    color="black" />

                <Text fontSize="xs">
                    Online
                </Text>
            </Button>
        </Box >
    )
}
export default App;