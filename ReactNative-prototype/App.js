import React, { useState } from 'react';
import { NativeBaseProvider, Text, Box } from 'native-base';
import BottomNavbar from './components/BottomNavbar'
import Map from './components/map/Map'
import Legend from './components/Legend'
import LocationShareButton from './components/location/LocationShareButton';
import FriendsButton from './components/friends/FriendsButton';
import FriendsList from './components/friends/FriendsList';

const text = ['Home', 'Community', 'Friends', 'Profile'];

export default function App() {
  const [selected, setSelected] = React.useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <NativeBaseProvider>
      {selected == 0 ?
        <NativeBaseProvider>
          <Map toggle={toggle} setToggle={setToggle} />
          <LocationShareButton />
          <FriendsButton toggle={toggle} setToggle={setToggle} />
          <FriendsList toggle={toggle} setToggle={setToggle} />
          <Legend />
        </NativeBaseProvider>
        :
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>Here would be {text[selected]} page.</Text>
        </Box>
      }
      <BottomNavbar selected={selected} setSelected={setSelected} />

    </NativeBaseProvider>
  );
}

