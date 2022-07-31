import React, { useState, useCallback } from 'react';
// import { IconButton, Modal, Box, Text, Image } from 'native-base';
import { Button, Modal, FormControl, Input, Box, Icon, Center, Text } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import LocationTime from './LocationTime'
// import LocationReason from './LocationReason'

function App(props) {

    const { showModal,
        setShowModal,
        location,
        setLocation,
        time,
        setTime
    } = props;

    const handleShowModal = () => {
        setShowModal(!showModal);
        setPlaceholder(0);
        setReason(1);
    }

    const locationOn = () => {
        handleShowModal();
        setTime(placeholder);
        setLocation(true);
    }

    const locationOff = () => {
        handleShowModal();
        setLocation(false);
    }

    // const [checked, setChecked] = useState(false);
    const [reason, setReason] = useState(1);
    const [placeholder, setPlaceholder] = useState(0);


    return (
        <Box style={{ display: 'flex' }}>
            {console.log(placeholder)}


            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content>
                    <Modal.CloseButton />

                    {/* <Modal.Header>
                        <Text fontSize="2xl" textAlign={'center'} fontWeight={'bold'}>
                            Legend
                        </Text>

                    </Modal.Header> */}

                    <Modal.Body>
                        <Center>
                            <Icon
                                as={Ionicons}
                                name={"location"}
                                size="20"
                                color='yellow.400'
                            />
                            <Text fontSize="xl">
                                Turn on location sharing
                            </Text>
                            <Text fontSize="md" style={{ textAlign: 'center' }}>
                                Turn on location sharing so your friends can find you.
                            </Text>
                        </Center>
                        <LocationTime placeholder={placeholder} setPlaceholder={setPlaceholder} />

                    </Modal.Body>
                    <Modal.Footer>
                        <Box flex={1}>
                            <Box flexDirection={'row'} justifyContent={'space-evenly'}>
                                <Button
                                    height={60}
                                    width='40%'
                                    borderRadius={10}
                                    borderWidth={0.5}
                                    bg="#f2da01"
                                    _pressed={{
                                        bg: "yellow.200"
                                    }}
                                    _text={{
                                        color: "#1F2937"
                                    }}
                                    onPress={() => locationOn()}>
                                    Confirm
                                </Button>
                                <Button

                                    height={60}
                                    width='40%'
                                    borderRadius={10}
                                    borderWidth={0.5}
                                    bg="light.200"
                                    _pressed={{
                                        bg: "light.50"
                                    }}
                                    _text={{
                                        color: "#1F2937"
                                    }}
                                    onPress={() => handleShowModal()}>
                                    Cancel
                                </Button>
                            </Box>
                            <Center>
                                {location === true ?
                                    <Button
                                        marginTop={3}
                                        margin='auto'
                                        height={60}
                                        width='85%'
                                        borderRadius={10}
                                        borderWidth={0.5}
                                        bg="danger.400"
                                        _pressed={{
                                            bg: "danger.200"
                                        }}
                                        _text={{
                                            color: "#1F2937"
                                        }}
                                        onPress={() => locationOff()}>
                                        Stop sharing location
                                    </Button>
                                    :
                                    <></>
                                }
                            </Center>
                        </Box>



                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Box >
    );
}



export default App;