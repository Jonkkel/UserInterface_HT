import React from 'react';
import {
    NativeBaseProvider,
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Icon,
    HStack,
    Center,
    Pressable,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

function Example(props) {
    // const [selected, setSelected] = React.useState(1);
    const { selected, setSelected } = props;
    return (
        <Box
            zIndex={3}
            bg="white"
            width="100%"
            alignSelf="center"
            bottom={0}
            borderTopWidth={1}
            borderTopRadius={5}
            borderColor={"#909090"}>
            <HStack bg="light.50" alignItems="center" safeAreaBottom shadow={6}>
                <Pressable
                    cursor="pointer"
                    opacity={selected === 0 ? 1 : 0.5}
                    py="3"
                    flex={1}
                    onPress={() => setSelected(0)}>
                    <Center>
                        <Icon
                            mb="1"
                            as={
                                <MaterialCommunityIcons
                                    name={selected === 0 ? 'home' : 'home-outline'}
                                />
                            }
                            color={selected === 0 ? "#d0d401" : "black"}
                            size="md"
                        />
                        <Text color="black" fontSize="12">
                            Home
                        </Text>
                    </Center>
                </Pressable>
                <Pressable
                    cursor="pointer"
                    opacity={selected === 1 ? 1 : 0.5}
                    py="2"
                    flex={1}
                    onPress={() => setSelected(1)}>
                    <Center>
                        <Icon
                            mb="1"
                            as={
                                <MaterialCommunityIcons
                                    name={selected === 1 ? 'forum' : 'forum-outline'}
                                />
                            }
                            color={selected === 1 ? "#d0d401" : "black"}
                            size="md"
                        />
                        <Text color="black" fontSize="12">
                            Community
                        </Text>
                    </Center>
                </Pressable>
                <Pressable
                    cursor="pointer"
                    opacity={selected === 2 ? 1 : 0.6}
                    py="2"
                    flex={1}
                    onPress={() => setSelected(2)}>
                    <Center>
                        <Icon
                            mb="1"
                            as={
                                <MaterialCommunityIcons
                                    name={
                                        selected === 2 ? 'account-group' : 'account-group-outline'
                                    }
                                />
                            }
                            color={selected === 2 ? "#d0d401" : "black"}
                            size="md"
                        />
                        <Text color="black" fontSize="12">
                            Friends
                        </Text>
                    </Center>
                </Pressable>
                <Pressable
                    cursor="pointer"
                    opacity={selected === 3 ? 1 : 0.5}
                    py="2"
                    flex={1}
                    onPress={() => setSelected(3)}>
                    <Center>
                        <Icon
                            mb="1"
                            as={
                                <MaterialCommunityIcons
                                    name={selected === 3 ? 'account' : 'account-outline'}
                                />
                            }
                            color={selected === 3 ? "#d0d401" : "black"}
                            size="md"
                        />
                        <Text color="black" fontSize="12">
                            Profile
                        </Text>
                    </Center>
                </Pressable>
            </HStack>
        </Box>
    );
}
export default Example;
// export default (props) => {
//     const { selected, setSelected } = props;
//     return (
//         <NativeBaseProvider zIndex={3}>
//             {/* <Center flex={1} px="3"> */}
//             <Example selected={selected} setSelected={setSelected} />
//             {/* </Center> */}
//         </NativeBaseProvider>
//     );
// };
