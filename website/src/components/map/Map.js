﻿import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import MarkerGroup from './MarkerGroup';
import Legend from './Legend';

import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

import { Box } from '@mui/material'

const items = [
    { lat: 61.06, lng: 28.188, type: "./Avatar1.png", name: "Jari Kalmari", badge: <SportsBarRoundedIcon />, text: "Good party right here", distance: "1.5km away", borderColor: "#ffa978" },
    { lat: 61.056, lng: 28.175, type: "./Avatar2.png", name: "Aatos Turunen", badge: <NewReleasesIcon />, text: "Send help", distance: "1.5km away", borderColor: "#d000f2" },
    { lat: 61.06, lng: 28.178, type: "./Avatar3.png", name: "Anselmi Menovesi", badge: "", text: "", distance: "1km away", borderColor: "#5200ff" },
    { lat: 61.0, lng: 28.178, type: "./Avatar3.png", name: "Vilhelmiina Turunen", badge: "", text: "", distance: "23km away", borderColor: "#ffa978" },
    { lat: 61.05, lng: 28.22, type: "./Avatar3.png", name: "Sara Kurki", badge: <NewReleasesIcon />, text: "Send help", distance: "3km away", borderColor: "#d000f2" },
    { lat: 61.052, lng: 28.185, type: "./Avatar4.png", name: "Me", badge: "", text: "", distance: "Here", borderColor: "#" },
]

const mapOptions = { fullscreenControl: false, disableDefaultUI: true, draggable: true }


const Map = (props) => {
    const [center, setCenter] = useState({ lat: 61.057, lng: 28.182 });
    const [zoom, setZoom] = useState(15);

    return (
            <GoogleMapReact
                // tracksViewChanges={false}
                litemode={true}
                bootstrapURLKeys={{ key: 'AIzaSyAmpFNR28voaDnjiA3jdG6NdRmYW-U4Qoc' }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={mapOptions}
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
                            el = {el}
                            type={el.type}
                            text={el.text}
                            name={el.name}
                            distance={el.distance}
                            borderColor={el.borderColor}
                            badge={el.badge}
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