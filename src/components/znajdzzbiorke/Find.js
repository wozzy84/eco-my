import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

import * as collectsData from "../../data/collects.json";
import * as expiredDrugsData from "../../data/expired_drugs.json";
import * as batteriesData from "../../data/batteries_accumulators.json";
import * as wasteData from "../../data/waste_collecting_places.json";
import * as realEstateData from "../../data/real_estate.json";
import Header from "../homepage/header/Header.js";

import { useLocation } from "react-router-dom";

const mapCenter = { lat: 51.131271, lng: 23.4745222 }; // Chełm city
const googleMapsApiKey = "AIzaSyDCYlmvsutOI1lUyi7gPJQlMEXqwTsdZQE";
// const googleMapsApiKey = process.env.REACT_APP_GOOGLE_KEY;
const googleMapURL = `https://maps.googleapis.com/maps/api/js?&key=${googleMapsApiKey}`;

const Map = ({ types }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const hasType = (type) => types && types.indexOf(type) > -1;

  return (
    <GoogleMap defaultZoom={14} defaultCenter={mapCenter}>
      {(hasType("clothes") || hasType("toys") || hasType("caps")) &&
        renderMarkers(collectsData.places, "charity", setSelectedPlace)}
      {hasType("meds") &&
        renderMarkers(expiredDrugsData.places, "pharmacy", setSelectedPlace)}
      {hasType("batteries") &&
        renderMarkers(batteriesData.places, "battery", setSelectedPlace)}
      {hasType("electro") &&
        renderMarkers(wasteData.places, "waste", setSelectedPlace)}
      {/*{(hasType('electro')) && renderMarkers(realEstateData.places, 'glass', setSelectedPlace)}*/}

      {!types &&
        renderMarkers(collectsData.places, "charity", setSelectedPlace)}
      {!types &&
        renderMarkers(expiredDrugsData.places, "pharmacy", setSelectedPlace)}
      {!types &&
        renderMarkers(batteriesData.places, "battery", setSelectedPlace)}
      {!types && renderMarkers(wasteData.places, "waste", setSelectedPlace)}
      {!types &&
        renderMarkers(realEstateData.places, "glass", setSelectedPlace)}

      {selectedPlace && (
        <InfoWindow
          position={{
            lat: selectedPlace.location.lat,
            lng: selectedPlace.location.lng,
          }}
          onCloseClick={() => setSelectedPlace(null)}
        >
          <div style={{ padding: "10px" }}>
            <h2>{getPlaceName(selectedPlace)}</h2>
            <h4>{selectedPlace.address}</h4>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const getPlaceName = (place) => {
  return (
    place.place ||
    (place.administrator
      ? `Miejsce gromadzenia odpadów MGO, administrator ${place.administrator}`
      : "KSON i szkło")
  );
};

const renderMarkers = (data, icon, onClick) => {
  return data
    .filter((place) => !!place.location)
    .map((place) => (
      <Marker
        key={generateKey()}
        position={{ lat: place.location.lat, lng: place.location.lng }}
        onClick={() => onClick(place)}
        icon={{
          url: `markers/${icon}.png`,
          scaledSize: new window.google.maps.Size(25, 25),
        }}
      />
    ));
};

const generateKey = () => Math.random().toString(36).substring(7);

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Find = ({ types }) => {
  const location = useLocation();
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      {location.pathname !== "/oddaj" && <Header />}
      <WrappedMap
        googleMapURL={googleMapURL}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        types={types}
      />
    </div>
  );
};

export default Find;
