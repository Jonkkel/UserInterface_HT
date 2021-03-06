﻿import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import MarkerGroup from './MarkerGroup';
// import Legend from './Legend';

import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const items = [
    { lat: 61.06, lng: 28.188, type: "./Avatar1.png", name: "Jari Kalmari", badge: <SportsBarRoundedIcon />, text: "Good party right here", online: "now", distance: "1.5km away", borderColor: "#ffa978" },
    { lat: 61.056, lng: 28.175, type: "./Avatar2.png", name: "Aatos Turunen", badge: <NewReleasesIcon />, text: "Send help", online: "now", distance: "1.5km away", borderColor: "#d000f2" },
    { lat: 61.06, lng: 28.178, type: "./Avatar3.png", name: "Anselmi Menovesi", badge: "", text: "", online: "7 min", distance: "1km away", borderColor: "#5200ff" },
    { lat: 61.0, lng: 28.178, type: "./Avatar3.png", name: "Vilhelmiina Turunen", badge: "", text: "", online: "15 min", distance: "23km away", borderColor: "#ffa978" },
    { lat: 61.05, lng: 28.22, type: "./Avatar3.png", name: "Sara Kurki", badge: <NewReleasesIcon />, text: "Send help", online: "1 hour", distance: "3km away", borderColor: "#d000f2" },
    { lat: 61.05, lng: 28.185, type: "./Avatar4.png", name: "Me", badge: "", text: "", online: "now", distance: "Here", borderColor: "#" },
]

const mapOptions = { fullscreenControl: false, disableDefaultUI: true, draggable: true }


const Map = (props) => {
    const [center, setCenter] = useState({ lat: 61.057, lng: 28.182 });
    const [zoom, setZoom] = useState(15);

    return (
        <GoogleMapReact
                // tracksViewChanges={false}
                litemode = { true}
            bootstrapURLKeys={{ key: 'AIzaSyAmpFNR28voaDnjiA3jdG6NdRmYW-U4Qoc' }}
            defaultCenter={center}
            defaultZoom={zoom}
            options={mapOptions}
            className={'map'}
        >
            {items.map((el, index) => {
                return (
                    <Marker
                        optimized={false}
                        tracksViewChanges={false}
                        litemode={true}
                        key={index}
                        lat={el.lat}
                        lng={el.lng}
                        el={el}
                        type={el.type}
                        text={el.text}
                        name={el.name}
                        distance={el.distance}
                        borderColor={el.borderColor}
                        badge={el.badge}
                        online={el.online}
                    />
                )
            })}

            {/* <MarkerGroup
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
                /> */}

        </GoogleMapReact>

    );
}

export default Map;