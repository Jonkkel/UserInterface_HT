import React from 'react';
import { IconButton, Icon, Box, NativeBaseProvider } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { useState, useCallback } from 'react';
import LegendModal from './LegendModal'

const Legend = (props) => {
    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setShowModal(true);
    }

    return (
        <Box
            style={{
                flex: 1,
                zIndex: 2,
                // mx: 'auto',
                // my: 'auto',
                position: 'absolute',
                right: 20,
                top: 40,
                overflow: 'hidden',
                backgroundColor: 'white',
                elevation: 10,
                borderRadius: 10,
                // width: 30,
                // height: 30,
            }}>
            <IconButton icon={<Icon mb="1" as={<MaterialCommunityIcons name={'text-box-search-outline'} />} color="black" size="lg" />} onPress={() => handleClick()}>

            </IconButton>
            <LegendModal
                showModal={showModal}
                setShowModal={setShowModal}
            />

        </Box>
    );
}

export default Legend;



