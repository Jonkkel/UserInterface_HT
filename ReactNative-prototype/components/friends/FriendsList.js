

import React, { useState, useCallback } from 'react';
import { Input, ScrollView, Box, Image, FormControl, Text, Button, Icon, Center, IconButton } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


const items = [
    { type: require("../../assets/Avatar1.png"), name: "Jari Kalmari", relation: 'Group: Hahaa', distance: "1.5km away", online: "now", borderColor: "#ffa978" },
    { type: require("../../assets/Avatar2.png"), name: "Aatos Turunen", relation: 'Best friend', distance: "1.5km away", online: "now", borderColor: "#D000F2" },
    { type: require("../../assets/Avatar3.png"), name: "Anselmi Menovesi", relation: 'Friend', distance: "1km away", online: "7 min ago", borderColor: "#5200ff" },
    { type: require("../../assets/Avatar3.png"), name: "Vilhelmiina Turunen", relation: 'Group: Hahaa', distance: "23km away", online: "15 min ago", borderColor: "#ffa978" },
    { type: require("../../assets/Avatar3.png"), name: "Sara Kurki", relation: 'Group: Hahaa', distance: "3km away", online: "1 hour ago", borderColor: "#ffa978" },
    // { lat: 61.052, lng: 28.185, type: "./Avatar4.png", name: "Me", badge: "", distance: "Here", borderColor: "#ffa978"},
]

function App(props) {
    const { toggle, setToggle } = props;

    return (
        // <ClickAwayListener onClickAway={handleClickAway}>
        // <Box width={'100%'}>


        <Box
            position={'absolute'}
            bottom={0}
            style={{
                width: '100%',
                backgroundColor: '#FFF',
                zIndex: 2,
                // marginBottom: 20,

                display: (toggle ? 'flex' : 'none'),
                left: 0,
                right: 0,
                flexDirection: 'row',

                borderTopWidth: 1,
                // borderTop: '1px solid black',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
            }}
            onBackdropPress={() => setToggle(false)}>
            <ScrollView horizontal={true}>
                {items.map((el, index) => {
                    return (
                        <Box
                            key={index}
                            style={{
                                padding: 3,
                                py: 0.5,

                                flexDirection: 'column',
                                borderRightWidth: 1,
                                // borderWidth: 1,
                                borderStyle: 'dotted',
                            }}>
                            <Box
                                marginTop={2}
                                flexDirection='row'>
                                <Image
                                    alt={el.name}
                                    source={el.type}
                                    width={45}
                                    height={45}
                                    borderRadius={75}
                                    overflow='hidden'
                                    borderWidth={3}
                                    marginLeft={1}
                                    borderColor={(el.borderColor)}

                                    resizeMode="cover"
                                />
                                <Box
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>

                                    <Box
                                        style={{
                                            // display: 'flex',
                                            // flexDirection: 'row'
                                        }}>
                                        <Text fontSize={"sm"} marginLeft={1}>
                                            {el.name}
                                        </Text>
                                        <Text fontSize={8} marginLeft={1.5} color={el.online == "now" ? 'green.700' : "light.900"} fontWeight="bold">
                                            {el.online}
                                        </Text>
                                        <Text fontSize={9} marginLeft={1.5}>
                                            {el.relation}
                                        </Text>
                                    </Box>

                                </Box>

                            </Box>
                            <FormControl>

                                <Center flexDirection={'row'}>


                                    <Input
                                        width={120}
                                        marginLeft={3}
                                        // margin={'auto'}
                                        variant="underlined" placeholder="Quick chat">

                                    </Input>
                                    <IconButton
                                        width={10}
                                        height={10}
                                        icon={<Icon
                                            position={'absolute'}
                                            // right={2}
                                            // bottom={2}
                                            as={MaterialCommunityIcons}
                                            name={"send"}
                                            color="black" />}>

                                    </IconButton>
                                </Center>
                            </FormControl>
                            <Box
                                display='flex' justifyContent='space-evenly'
                                flexDirection='row' m={2}>
                                <Button borderRadius={35} bg='amber.50' borderWidth={0.5}>
                                    <Box flexDirection={'row'} marginY='auto'>
                                        <Text fontSize="10" marginY='auto'>
                                            Ask/View
                                        </Text>
                                        <Icon

                                            as={MaterialCommunityIcons}
                                            name={"map-marker"}
                                            size="5"
                                            style={{ color: '#000', flex: 1, marginLeft: 'auto', marginRight: 'auto' }}
                                            color="black" />
                                    </Box>
                                </Button>

                                <Button borderRadius={35} bg='amber.50' borderWidth={0.5}>
                                    <Box flexDirection={'row'} marginY='auto'>
                                        <Text fontSize="10" marginY='auto'>
                                            Send
                                        </Text>
                                        <Icon

                                            as={MaterialCommunityIcons}
                                            name={"map-marker"}
                                            size="5"
                                            style={{ color: '#000', flex: 1, marginLeft: 'auto', marginRight: 'auto' }}
                                            color="black" />
                                    </Box>
                                </Button>

                            </Box>
                        </Box>
                    )
                })}
            </ScrollView>
        </Box>
        // </Box>
    )
}


{/* <FormControl
                            variant="standard"
                            sx={{
                                display: 'flex',
                                mx: 'auto',
                                pb: 1,
                                width: 150,
                            }}>
                            <Input
                                id="input-with-icon-adornment"
                                placeholder='Quick chat'
                                variant="filled"
                                size="small"
                                endAdornment={
                                    <IconButton position="start">
                                        <SendIcon color='blue' />
                                    </IconButton>
                                }
                            />
                        </FormControl>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly'
                        }}>
                            <IconButton
                                sx={{
                                    width: 'auto',
                                    height: '30px',
                                    borderRadius: 5,
                                    display: 'flex',
                                    p: 0.5,
                                    border: '1px solid black',
                                    alignItems: 'center'
                                }}>


                                <Typography display="inline" sx={{ fontSize: 10 }} color={'#000'}>
                                    Ask/View
                                </Typography>
                                <LocationOnIcon />
                            </IconButton>
                            <IconButton
                                sx={{
                                    width: 'auto',
                                    height: '30px',
                                    borderRadius: 5,
                                    display: 'flex',
                                    p: 0.5,
                                    border: '1px solid black',
                                    alignItems: 'center'
                                }}>


                                <Typography display="inline" sx={{ fontSize: 10 }} color={'#000'}>
                                    Send
                                </Typography>
                                <LocationOnIcon />
                            </IconButton>

                        </Box> */}


{/* </Box> */ }
{/* ) */ }
{/* })} */ }
{/* </Box >
        </Box > */}
{/* // </ClickAwayListener> */ }


export default App;