import React, { useState, useEffect } from 'react';
import SidingList from '../components/SidingList';
import SidingMap from '../components/SidingLocator';

const SidingLocator = () => {
  const [sidingData, setSidingData] = useState([]);
  const [selectedSiding, setSelectedSiding] = useState(null);

  // Fetch siding data from the server
  useEffect(() => {
    const fetchSidingData = async () => {
      try {
        const response = await fetch('http://localhost:5000/sidings'); // Adjust the API endpoint as needed
        const data = await response.json();
        setSidingData(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching siding data:', error);
      }
    };

    fetchSidingData();
  }, []); // Empty dependency array means it runs only once after the component mounts

  // Function to handle marker click
  const handleMarkerClick = (siding) => {
    setSelectedSiding(siding);
  };

  return (
    
    <div style={{ display: 'flex' ,gap:'10px',flexDirection: 'row', height: '650px'}}>
      {/* Siding Map component */}
      <SidingMap sidingData={sidingData} handleMarkerClick={handleMarkerClick} />

      {/* Siding List component */}
      <SidingList sidingData={sidingData} selectedSiding={selectedSiding} />
    </div>
  );
};

export default SidingLocator;
