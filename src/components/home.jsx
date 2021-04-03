import React,{useState} from 'react';
import {Container} from 'semantic-ui-react';
import TestAutoInput from './placesAutocomplete';
import TestMap from './map';

export default function HomePage() {
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
        <Container>
            <div>
                <h1>Bay Area Events</h1>
            </div>
            <div>
                <TestAutoInput setLocation={handleSetLocation}/>
                <TestMap location={location}/>
            </div>
        </Container>
    )
}