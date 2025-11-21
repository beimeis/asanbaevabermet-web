/* External dependencies */
import React from 'react';
import {Property} from 'csstype';
import {LatLng} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapContainer , TileLayer} from 'react-leaflet';

export default function MapApp() {
    const manchGeo = new LatLng(42.857327 , 74.605764);
    const mapStyle = {
        height : '100vh',
        position :'absolute' as Property.Position,
        width : '100vw',
        'z-index' : 0,
    };
    const zoomLevel = 17;
  return (
   <MapContainer style={mapStyle} center={manchGeo} scrollWheelZoom={true} zoom={zoomLevel} >
    <TileLayer 
    attribution='&copy; <a href="https://ww.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   </MapContainer>
  )
}

