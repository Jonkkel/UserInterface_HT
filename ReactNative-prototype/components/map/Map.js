import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Image, Badge, Dimensions, View } from 'react-native';
import { Marker } from 'react-native-maps';

const items = [
  { lat: 61.06, lng: 28.188, type: require("../../assets/Avatar1.png"), name: "Jari Kalmari", distance: "1.5km away", borderColor: "#ffa978" },
  { lat: 61.056, lng: 28.175, type: require("../../assets/Avatar2.png"), name: "Aatos Turunen", distance: "1.5km away", borderColor: "#d000f2" },
  { lat: 61.06, lng: 28.178, type: require("../../assets/Avatar3.png"), name: "Anselmi Menovesi", distance: "1km away", borderColor: "#5200ff" },
  { lat: 61.0, lng: 28.178, type: require("../../assets/Avatar3.png"), name: "Vilhelmiina Turunen", distance: "23km away", borderColor: "#ffa978" },
  { lat: 61.05, lng: 28.22, type: require("../../assets/Avatar3.png"), name: "Sara Kurki", distance: "3km away", borderColor: "#d000f2" },
  { lat: 61.052, lng: 28.185, type: require("../../assets/Avatar4.png"), name: "Me", distance: "Here", borderColor: "transparent" },
]

const test = {
  latitude: 61.0575,
  longitude: 28.182,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
}

const App = (props) => {
  const { toggle, setToggle } = props;
  const [region, setRegion] = useState();

  useEffect(() => {
    setRegion({
      latitude: 61.0575,
      longitude: 28.182,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    });
  }, []);



  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region} onPress={() => {setToggle(false)}}>
        {items.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.lat, longitude: marker.lng }}
            title={marker.name}
            description={marker.distance}>
            <Image
              source={marker.type}
              style={{
                width: 40,
                height: 40,
                borderRadius: 150 / 2,
                overflow: 'hidden',
                borderWidth: 3,
                borderColor: marker.borderColor,
              }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: "100%",
    zIndex: 1,
  },
  container: {
    flex: 1,
  },
});
