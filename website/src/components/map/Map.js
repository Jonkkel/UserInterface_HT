import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import MarkerGroup from './MarkerGroup';
import Legend from './Legend';

import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

// const items = {
//     lat: [61.06, 61.056, 61.06, 61.0, 61.05, 61.052],
//     lng: [28.188, 28.175, 28.178, 28.178, 28.22, 28.185],
//     type: ["./Avatar1.png", "./Avatar2.png", "./Avatar3.png", "./Avatar3.png", "./Avatar3.png", "./Avatar4.png"],
//     name: ["Jari Kalmari", "Aatos Turunen", "Anselmi Menovesi", "Vilhelmiina Turunen", "Sara Kurki"],
//     badge: [<SportsBarRoundedIcon />, <SportsBarRoundedIcon />, <NewReleasesIcon />, "", "", <NewReleasesIcon />]
// }

const items = [
    { lat: 61.06, lng: 28.188, type: "./Avatar1.png", name: "Jari Kalmari", badge: <SportsBarRoundedIcon />, distance: "1.5km away", borderColor: "#ffa978"},
    { lat: 61.056, lng: 28.175, type: "./Avatar2.png", name: "Aatos Turunen", badge: <NewReleasesIcon />, distance: "1.5km away", borderColor: "#00ff94"},
    { lat: 61.06, lng: 28.178, type: "./Avatar3.png", name: "Anselmi Menovesi", badge: "", distance: "1km away", borderColor: "#5200ff"},
    { lat: 61.0, lng: 28.178, type: "./Avatar3.png", name: "Vilhelmiina Turunen", badge: "", distance: "23km away", borderColor: "#ffa978"},
    { lat: 61.05, lng: 28.22, type: "./Avatar3.png", name: "Sara Kurki", badge: <NewReleasesIcon />, distance: "3km away", borderColor: "#ffa978"},
    { lat: 61.052, lng: 28.185, type: "./Avatar4.png", name: "Me", badge: "", distance: "Here", borderColor: "#ffa978"},
]

const mapOptions = { fullscreenControl: false, disableDefaultUI: true, draggable: true }


const Map = (props) => {
    const [center, setCenter] = useState({ lat: 61.057, lng: 28.182 });
    const [zoom, setZoom] = useState(15);

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                // resetBoundsOnResize={true}
                bootstrapURLKeys={{ key: 'AIzaSyAmpFNR28voaDnjiA3jdG6NdRmYW-U4Qoc' }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={mapOptions}
            >
                {items.map((el, index) => {
                    return (
                        <Marker
                            lat={el.lat}
                            lng={el.lng}
                            type={el.type}
                            name={el.name}
                            distance={el.distance}
                            borderColor={el.borderColor}
                            badge={el.badge}
                        />
                    )
                })}

                <MarkerGroup
                    lat={61.068}
                    lng={28.18}
                    name="Ryhmä 1 JeeJee"
                    text="Good party right here"
                    distance="2km away"
                    badge={<SportsBarRoundedIcon />}
                />
                <MarkerGroup
                    lat={61.05}
                    lng={28.16}
                    type="./Avatar2.png"
                    name="Teemukissa"
                    text="Want to tell my friends"
                    distance="2.5km away"
                    badge=""
                />

            </GoogleMapReact>
            <Legend />
        </div>
    );
}

export default Map;