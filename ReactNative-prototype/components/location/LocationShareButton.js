import React, { useState, useCallback } from 'react';
import { Fab, Icon, Box, Button, Center, Text, Flex } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// import { IconButton, Text, NativeBaseProvider, Icon, Center, Box } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import LocationModal from './LocationModal';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import LocationOffOutlinedIcon from '@mui/icons-material/LocationOffOutlined';

const timelist = [
    ">23h", "~3 days", "~5 days", "On"
]


function App(props) {
    const [showModal, setShowModal] = useState(false);

    const [time, setTime] = useState(0);
    const [location, setLocation] = useState(false);

    function handleClick() {
        setShowModal(true);
    }

    return (
        <Center >
            <Button
                position={'absolute'}
                bottom={7}
                zIndex={2}
                height={75}
                width={75}
                elevation={5}
                borderRadius={50}
                borderWidth={5}
                opacity={0.9}
                borderColor={(location ? "#656700" : "#f87171")}
                bg={(location ? "#FFF" : "#fff")}
                _pressed={{
                    bg: (location ? "#e3e4d3" : "#fecaca")
                }}

                onPress={() => handleClick()}
            >
                <Icon
                    as={MaterialCommunityIcons}
                    name={location ? "map-marker" : "map-marker-off"}
                    size="50"
                    color={location ? "#bdc000" : "#909090"} />

            </Button>
            <Text fontSize="xs"
                position={'absolute'}
                bottom={2}
                zIndex={2}
            >
                {location ? "GPS on" : "GPS off"}
            </Text>

            <LocationModal
                showModal={showModal}
                setShowModal={setShowModal}
                location={location}
                setLocation={setLocation}
                time={time}
                setTime={setTime}
            />
        </Center>
        /* <Box
            style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                // left: '50%',
                // right: '50%',
                bottom: 10,
                // mx: 'auto',
                zIndex: 2,
                // width: 30,
                // overflow: 'hidden',
                backgroundColor: 'white',
                elevation: 5,
                borderRadius: 75,

                opacity: 0.7
                // width: 30,
                // height: 30,
            }}>
            <Button
                bg={location ? "amber.400" : "danger.400"}
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    borderRadius: 50,
                    borderWidth: 0.5

                }}
                onPress={() => handleClick()}
            >

                <Icon
                    mb="1"
                    as={MaterialCommunityIcons}
                    name={location ? "map-marker" : "map-marker-off"}
                    size="5"
                    style={{ color: '#000', flex: 1, marginLeft: 'auto', marginRight: 'auto' }}
                    color="black" />
                <Text fontSize="xs">
                    {location ? "GPS on" : "GPS off"}
                </Text>

                <LocationModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    location={location}
                    setLocation={setLocation}
                    time={time}
                    setTime={setTime}
                />
            </Button>
        </Box > */
        // </Center >


    );
}
export default App;