import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const fetchRailwayData = async (start, end) => {
    const query = `
        [out:json];
        (
            way["railway"](around:5000, ${start[0]}, ${start[1]});
            way["railway"](around:5000, ${end[0]}, ${end[1]});
        );
        out body;
    `;

    try {
        const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
        const data = await response.json();

        // Check if the elements are available
        console.log('Overpass API response:', data);

        // Ensure data.elements exists and is an array
        if (!data || !data.elements || !Array.isArray(data.elements)) {
            throw new Error("Invalid data format from Overpass API");
        }

        // Filter elements that have geometry and map them
        const coordinates = data.elements
            .filter(element => element.type === "way" && element.geometry)  // Ensure we only process elements with geometry
            .map(element => 
                element.geometry.map(geom => [geom.lat, geom.lon])  // Extract lat, lon
            ).flat();
        
        return coordinates;
    } catch (error) {
        console.error("Error fetching railway data:", error);
        return [];  // Return an empty array if there's an error
    }
};


const ShortestRailwayRoute = () => {
    const [start, setStart] = useState([11.516278, 79.429398]); // Example start coordinates
    const [end, setEnd] = useState([12.971598, 77.594566]); // Example end coordinates
    const [railwayPath, setRailwayPath] = useState([]);

    const findRailwayPath = async () => {
        const pathCoordinates = await fetchRailwayData(start, end);
        setRailwayPath(pathCoordinates);
    };

    return (
        <div>
            <h1>Shortest Railway Path</h1>
            <button onClick={findRailwayPath}>Find Railway Path</button>
            <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <TileLayer
                    url="https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openrailwaymap.org">OpenRailwayMap</a>'
                />
                <Marker position={start} />
                <Marker position={end} />
                {/* Render the polyline that follows the railway routes */}
                {railwayPath.length > 0 && (
                    <Polyline positions={railwayPath} color="blue" weight={4} />
                )}
            </MapContainer>
        </div>
    );
};

export default ShortestRailwayRoute;
