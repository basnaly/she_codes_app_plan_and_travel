import React from 'react';

import { useSelector } from 'react-redux';
import { googleMapApiKey } from "../firebase-config";

const MapViewComponent = ( {place} ) => {

    const city = useSelector(state => state?.main?.trip?.city);

    return (

        <iframe
            width="100%"
            height="350"
            frameborder="0" style={{border:0 }}
            className="flex-shrink-0"
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${googleMapApiKey}&q=${place},${city}`}
            allowfullscreen>
        </iframe>
    )
}

export default MapViewComponent;
