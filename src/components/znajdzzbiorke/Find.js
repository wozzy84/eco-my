import React, {useState} from "react";
import {GoogleMap, Marker, InfoWindow, withScriptjs, withGoogleMap} from "react-google-maps";

import * as collectsData from '../../data/collects.json';
import * as expiredDrugsData from '../../data/expired_drugs.json';
import * as batteriesData from '../../data/batteries_accumulators.json';
import * as wasteData from '../../data/waste_collecting_places.json';
import * as realEstateData from '../../data/real_estate.json';

const mapCenter = {lat: 51.131271, lng: 23.4745222}; // Chełm city
// const googleMapsApiKey = 'AIzaSyDCYlmvsutOI1lUyi7gPJQlMEXqwTsdZQE';
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_KEY;
const googleMapURL = `https://maps.googleapis.com/maps/api/js?&key=${googleMapsApiKey}`;

const Map = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return <GoogleMap
    defaultZoom={14}
    defaultCenter={mapCenter}
  >
    {renderMarkers(collectsData.places, 'charity', setSelectedPlace)}
    {renderMarkers(expiredDrugsData.places, 'pharmacy', setSelectedPlace)}
    {renderMarkers(batteriesData.places, 'battery', setSelectedPlace)}
    {renderMarkers(wasteData.places, 'waste', setSelectedPlace)}
    {renderMarkers(realEstateData.places, 'glass', setSelectedPlace)}

    {selectedPlace && (
      <InfoWindow
        position={{lat: selectedPlace.location.lat, lng: selectedPlace.location.lng}}
        onCloseClick={() => setSelectedPlace(null)}
      >
        <div style={{padding: '10px'}}>
          <h2>{getPlaceName(selectedPlace)}</h2>
          <h4>{selectedPlace.address}</h4>
        </div>
      </InfoWindow>
    )}
  </GoogleMap>
}

const getPlaceName = (place) => {
  return place.place || (place.administrator
    ? `Miejsce gromadzenia odpadów MGO, administrator ${place.administrator}`
    : 'KSON i szkło');
}

const renderMarkers = (data, icon, onClick) => {
  return data
    .filter(place => !!place.location)
    .map(place => (
      <Marker
        key={generateKey()}
        position={{lat: place.location.lat, lng: place.location.lng}}
        onClick={() => onClick(place)}
        icon={{
          url: `markers/${icon}.png`,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
      />
    ));
}

const generateKey = () => Math.random().toString(36).substring(7);

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Find = () => {
  return <div style={{width: '100%', height: '100vh'}}>
    <WrappedMap
      googleMapURL={googleMapURL}
      loadingElement={<div style={{height: '100%'}}/>}
      containerElement={<div style={{height: '100%'}}/>}
      mapElement={<div style={{height: '100%'}}/>}
    />
  </div>;
};

export default Find;
