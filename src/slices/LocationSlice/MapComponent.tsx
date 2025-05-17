"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const markerIcon = "/node_modules/leaflet/dist/images/marker-icon.png";
const markerIcon2x = "/node_modules/leaflet/dist/images/marker-icon-2x.png";
const markerShadow = "/node_modules/leaflet/dist/images/marker-shadow.png";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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
      <Marker icon={customIcon} position={position}>
        <Popup>
          <div>
            <p>
              Tannlæknaþjónustan <br />
              Reykjavík
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
