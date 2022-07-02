import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import MarkerGroup from './MarkerGroup';

import LiquorIcon from '@mui/icons-material/Liquor';

import NewReleasesIcon from '@mui/icons-material/NewReleases';

const items = {
    lat: [61.06, 61.068, 61.056, 61.055],
    lng: [28.188, 28.18, 28.175, 28.178],
    type: ["person", "group", "runner", "group"],
    text: ["Jari", "JeeGroup", "Kari", "ryhmä25"]
}


const SimpleMap = (props) => {
    const [center, setCenter] = useState({ lat: 61.06070905720617, lng: 28.188641124711868 });
    const [zoom, setZoom] = useState(14);

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAmpFNR28voaDnjiA3jdG6NdRmYW-U4Qoc' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <Marker
                    lat={61.06}
                    lng={28.188}
                    type="./Avatar1.png"
                    name="Jari Kalmari"
                    badge={<LiquorIcon />}
                />
                <MarkerGroup
                    lat={61.068}
                    lng={28.18}
                    name="Ryhmä 1 JeeJee"
                    badge={<LiquorIcon />}
                />

                <Marker
                    lat={61.056}
                    lng={28.175}
                    type="./Avatar2.png"
                    name="Aatos Turunen"
                    badge={<NewReleasesIcon />}
                />

                <Marker
                    lat={61.06}
                    lng={28.178}
                    type="./Avatar3.png"
                    name="Anselmi Menovesi"
                    badge=""
                />

                <Marker
                    lat={61.0}
                    lng={28.178}
                    type="./Avatar3.png"
                    name="Vilhelmiina Turunen"
                    badge=""
                />

                <MarkerGroup
                    lat={61.05}
                    lng={28.16}
                    type="./Avatar2.png"
                    name="Teemukissa"
                    badge=""
                />

                <Marker
                    lat={61.05}
                    lng={28.22}
                    type="./Avatar3.png"
                    name="Sara Kurki"
                    badge={<NewReleasesIcon />}
                />
            </GoogleMapReact>
        </div>
    );
}

export default SimpleMap;