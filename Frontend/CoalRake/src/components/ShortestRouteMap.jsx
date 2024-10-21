import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import axios from 'axios';

const ShortestRouteMap = () => {
    const [pathCoordinates, setPathCoordinates] = useState([]);
    const startCoords = [10.997549,76.966352];  // skl
    const endCoords = [13.077725,80.261253];    // tsi


    useEffect(() => {
        const fetchPath = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:5000/api/shortest-railway-path', {
                    start_coords: startCoords,
                    end_coords: endCoords
                },
                {
                    headers: {
                        'Content-Type': 'application/json'  // Explicitly set the Content-Type to application/json
                    }
                }
            );
                setPathCoordinates(response.data.path_coordinates);
            } catch (error) {
                console.error('Error fetching path:', error);
            }
        };

        fetchPath();
    }, []);

    return (
        
        <MapContainer center={startCoords} zoom={13} style={{ height: '600px', width: '60%',border:"solid",margin:'30px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {pathCoordinates.length > 0 && (
                <Polyline positions={pathCoordinates.map(coord => [coord[0], coord[1]])} color="blue" />
            )}
            <Marker position={startCoords} />
            <Marker position={endCoords} />
        </MapContainer>
    );
};

export default ShortestRouteMap;
