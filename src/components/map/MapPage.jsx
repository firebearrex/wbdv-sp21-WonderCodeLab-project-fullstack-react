import React, { useState } from 'react';
import PlacesAutoComplete from './PlacesAutoComplete';
import Map from './Map';

export default function MapPage() {
    const defaultProps = {
        center: {
            lat: 37.3382082,
            lng: -121.8863286,
        },
        zoom: 11,
    };
    const [location, setLocation] = useState(defaultProps);

  function handleSetLocation(latLng) {
    setLocation({ ...location, center: { lat: latLng.lat, lng: latLng.lng } });
  }

  return (
    <>
        <div>
            <h1>Bay Area Events</h1>
        </div>
        <div>
            <PlacesAutoComplete setLocation={handleSetLocation}/>
            <Map location={location}/>
        </div>
    </>
  );
}
