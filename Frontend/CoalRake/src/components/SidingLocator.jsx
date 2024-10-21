import React from 'react';
import { MapContainer, TileLayer, Marker, Popup ,LayersControl} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// India's bounding box (approximate)
const indiaBounds = [
  [8.4, 68.7],  // Southwest corner
  [37.6, 97.25] // Northeast corner
];

const SidingMap = ({ sidingData, handleMarkerClick }) => {
  return (
    <div style={{ width: '80%' }}>
      <MapContainer
        center={[0.5, 79.0]} // Centered on India
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%',margin:"30px",border:"solid" }}
        maxBounds={indiaBounds} // Restrict panning outside India
        maxBoundsViscosity={1.0} // How "sticky" the bounds are
        minZoom={5} // Set minimum zoom level
        //maxZoom={8} // Set maximum zoom level
      >
        <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={19}
      />
      
      {/* OpenRailwayMap Layer */}
      <TileLayer
        url="https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png"
        attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        maxZoom={19}
      />

        


        {/* Markers for each siding */}
        {sidingData.map((siding, index) => (
          <Marker
            key={index}
            position={siding.position}
            eventHandlers={{
              click: () => {
                handleMarkerClick(siding);
              },
            }}
          >
            <Popup>
              <div>
                <h2>{siding.name}</h2>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SidingMap;
