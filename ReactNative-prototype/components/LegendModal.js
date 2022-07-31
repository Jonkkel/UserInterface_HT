import React from 'react';
// import { IconButton, Modal, Box, Text, Image } from 'native-base';
import { Button, Modal, FormControl, Input, Box, Icon, Center, Text, Divider } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
// import {
//     FormControl,
//     Box,
//     Modal,
//     InputLabel,
//     Typography,
//     MenuItem,
//     Select,
//     Button,
//     Avatar,
//     IconButton
// } from '@mui/material';

// import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
// import NewReleasesIcon from '@mui/icons-material/NewReleases';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// map-marker


function App(props) {

    const {
        showModal,
        setShowModal,
    } = props;

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const handleShowModal = () => {
        setShowModal(false);
    }

    return (
        <Box style={{ display: 'flex' }}>
            {console.log(showModal)}


            <Modal isOpen={showModal} onClose={() => setShowModal(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
                <Modal.Content>
                    <Modal.CloseButton />

                    <Modal.Header>
                        <Text fontSize="2xl" textAlign={'center'} fontWeight={'bold'}>
                            Legend
                        </Text>

                    </Modal.Header>

                    <Modal.Body>
                        <Box style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Box bg="#ffa978" style={{ width: 33, height: 33 }} />

                            <Box marginX={1}>
                                <Text>
                                    Group member
                                </Text>
                                <Text fontSize="xs">
                                    This color is associated with those belonging to the same group
                                </Text>
                            </Box>
                        </Box>
                        <Divider bg="primary.50" thickness="2" my="1" orientation="horizontal" />
                        <Box style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Box bg="#d000f2" style={{ width: 33, height: 33 }} />

                            <Box marginX={1}>
                                <Text>
                                    Best friend
                                </Text>
                                <Text fontSize="xs">
                                    This color is associated with your Best friends.
                                </Text>
                            </Box>
                        </Box>
                        <Divider bg="primary.50" thickness="2" my="1" orientation="horizontal" />
                        <Box style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Box bg="#5200ff" style={{ width: 33, height: 33 }} />

                            <Box marginX={1}>
                                <Text>
                                    Friend
                                </Text>
                                <Text fontSize="xs">
                                    This color is associated with your Friends.
                                </Text>
                            </Box>
                        </Box>
                        <Divider bg="primary.50" thickness="2" my="1" orientation="horizontal" />


                        <Box style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Icon
                                as={<MaterialCommunityIcons />}
                                name={"map-marker-path"}
                                size="8"
                                style={{ color: '#000' }}
                            />
                            <Box marginX={1}>
                                <Text>
                                    Trail
                                </Text>
                                <Text fontSize="xs">
                                    Trail shows you the previously treaded path of a person.
                                </Text>
                            </Box>
                        </Box>
                        <Box style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Icon
                                as={Ionicons}
                                name={"warning-outline"}
                                size="8"
                                style={{ color: '#000' }}
                            />
                            <Box marginX={1}>

                                <Text>
                                    Help invite
                                </Text>
                                <Text fontSize="xs" marginRight={8}>
                                    This marks a person who has posted an invite for help
                                </Text>
                            </Box>

                        </Box>

                        <Box style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Icon
                                as={Ionicons}
                                name={"beer-outline"}
                                size="8"
                                style={{ color: '#000' }}
                            />
                            <Box marginX={1}>

                                <Text>
                                    Drinking invite
                                </Text>
                                <Text fontSize="xs" marginRight={8}>
                                    This marks a person who has posted an invite for something drinking related
                                </Text>
                            </Box>

                        </Box>
                    </Modal.Body>
                    <Modal.Footer>
                        <Box width={'100%'} alignItems={'center'}>


                            <Button
                                style={{
                                    height: 60,
                                    width: '80%',
                                    borderRadius: 10,
                                    borderWidth: 0.5
                                }}
                                background="#f2da01"
                                _text={{
                                    color: "#1F2937"
                                }}
                                onPress={() => {
                                    setShowModal(false);
                                }}>
                                Ok
                            </Button>
                        </Box>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Box >
    )
}

export default App;