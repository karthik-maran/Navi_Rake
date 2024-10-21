import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/VerticalProgressBar.css'; // Use external CSS for cleaner styling

const VerticalProgressBar = () => {
  const [stations, setStations] = useState({ start: "", end: "" });
  const [progress, setProgress] = useState(0); // Progress as a percentage (0-100)

  useEffect(() => {
    const fetchStations = async () => {
      try {
        // Uncomment the line below to fetch from your API
        // const response = await axios.get('/api/stations');
        
        // Mock data for demonstration
        const response = { data: { start: "Station A", end: "Station B" } };
        setStations(response.data);
        
        // Mock progress value (set this dynamically in real app)
        setProgress(80); // For example, 80% progress
      } catch (error) {
        console.error("Error fetching stations:", error);
      }
    };

    fetchStations();
  }, []);

  // Determine the number of steps and current step based on progress
  const steps = 4; // Total number of steps
  const currentStep = Math.floor((progress / 100) * steps);

  return (
    <div className="progress-container">
      <h3 className="station-label">{stations.start}</h3>
      <div className="progress-bar">
        {[...Array(steps)].map((_, index) => (
          <div key={index} className={`step ${index <= currentStep ? 'completed' : ''}`}>
            <div className="circle">
              {index <= currentStep ? <span>&#10003;</span> : ''}
            </div>
            {index < steps - 1 && <div className={`line ${index < currentStep ? 'completed' : ''}`}></div>}
          </div>
        ))}
      </div>
      <h3 className="station-label">{stations.end}</h3>
    </div>
  );
};

export default VerticalProgressBar;
