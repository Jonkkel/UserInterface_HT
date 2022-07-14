import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import MarkerGroup from './MarkerGroup';
import Legend from './Legend';

import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const items = {
    lat: [61.06, 61.068, 61.056, 61.055],
    lng: [28.188, 28.18, 28.175, 28.178],
    type: ["./Avatar1.png", "./Avatar4.png", "./Avatar2.png", "./Avatar3.png", "./Avatar3.png", "./Avatar3.png"],
    text: ["Jari", "JeeGroup", "Kari", "ryhmä25"]
}

const mapOptions = { fullscreenControl: false, disableDefaultUI: true }


const Map = (props) => {
    const [center, setCenter] = useState({ lat: 61.06070905720617, lng: 28.188641124711868 });
    const [zoom, setZoom] = useState(14);

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                // resetBoundsOnResize={true}
                bootstrapURLKeys={{ key: 'AIzaSyAmpFNR28voaDnjiA3jdG6NdRmYW-U4Qoc' }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={mapOptions}
            >
                <Marker
                    lat={61.06}
                    lng={28.188}
                    type="./Avatar1.png"
                    name="Jari Kalmari"
                    text="Good party right here"
                    distance="1.5km away"
                    borderColor="#ffa978"
                    badge={<SportsBarRoundedIcon />}
                />
                <Marker
                    lat={61.056}
                    lng={28.175}
                    type="./Avatar2.png"
                    name="Aatos Turunen"
                    text="Help I am wasted!"
                    distance="1km away"
                    borderColor="#00ff94"
                    badge={<NewReleasesIcon />}
                />

                <Marker
                    lat={61.06}
                    lng={28.178}
                    type="./Avatar3.png"
                    name="Anselmi Menovesi"
                    text="Want to tell my friends"
                    distance="1.5km away"
                    borderColor="#5200ff"
                    badge=""
                />

                <Marker
                    lat={61.0}
                    lng={28.178}
                    type="./Avatar3.png"
                    name="Vilhelmiina Turunen"
                    text="Want to tell my friends"
                    distance="23km away"
                    badge=""
                />


                <Marker
                    lat={61.05}
                    lng={28.22}
                    type="./Avatar3.png"
                    name="Sara Kurki"
                    text="Help I am wasted!"
                    distance="3km away"
                    badge={<NewReleasesIcon />}
                />
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
                <Marker
                    lat={61.052}
                    lng={28.185}
                    type="./Avatar4.png"
                    name="Me"
                    text="Good party right here"
                    distance="Here"
                    badge=""
                />
            </GoogleMapReact>
            <Legend />
        </div>
    );
}

export default Map;