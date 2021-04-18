import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export default function PlacesAutoComplete({setLocation}) {
  const [address, setAddress] = useState('');

  function handleChange(address) {
    setAddress(address);
  }

  function handleSelect(address) {
    geocodeByAddress(address)
        .then((results) => getLatLng(results[0]))
        .then((latLng) => {
          console.log('Target latitude & longitude', latLng);
          setLocation(latLng);
        })
    setAddress(address);
  }

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Please enter a place',
              className: 'location-search-input',
            })}
          />
          <div className='autocomplete-dropdown-container'>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
              return (
                  <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                      })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
