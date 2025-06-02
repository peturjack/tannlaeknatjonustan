"use client";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Card from "./Card";

interface MapComponentProps {
  position: [number, number];
}

const MapComponent = ({ position }: MapComponentProps) => {
  return (
    <MapContainer
      center={position}
      zoom={17}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <Card />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
