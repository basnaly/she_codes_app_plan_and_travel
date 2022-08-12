import React from 'react';
import { useSelector } from 'react-redux';
import { googleMapApiKey } from "../../config";

const MapViewComponent = ( {place} ) => {

    const city = useSelector(state => state?.main?.trip?.city);

    return (

        <iframe
            data-testid="map-element"
            width="100%"
            height="350"
            frameBorder="0" style={{border:0 }}
            className="flex-shrink-0"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${googleMapApiKey}&q=${place},${city}`}
            allowFullScreen>
        </iframe>
    )
}

export default MapViewComponent;
