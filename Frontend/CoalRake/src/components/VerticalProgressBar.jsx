import React, { useEffect, useState } from "react";
import axios from "axios";

const VerticalProgressBar = () => {
  const [stations, setStations] = useState({ start: "", end: "" });
  const [progress, setProgress] = useState(0); // Assuming progress is a percentage (0-100)

  useEffect(() => {
    const fetchStations = async () => {
      // Simulate fetching data (replace this with your actual fetch logic)
      // For example, using axios to fetch from an API endpoint
      try {
        // Uncomment the line below to fetch from your API
        // const response = await axios.get('/api/stations');
        
        // Mock data for demonstration
        const response = { data: { start: "Station A", end: "Station B" } };
        setStations(response.data);
        
        // Mock progress value
        setProgress(80); // Set this value dynamically as needed
      } catch (error) {
        console.error("Error fetching stations:", error);
      }
    };

    fetchStations();
  }, []);

  return (
    <div style={{ width: "200px", padding: "10px" ,marginLeft:"100px"}}>
      <h3 style={{ textAlign: "center" }}>{stations.start} </h3>
      <div style={{
        position: "relative",
        height: "500px",
        width:"50px" ,// Height of the progress bar
        background: "#e0e0e0",
        borderRadius: "10px",
        overflow: "hidden",
      }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: `${progress}%`, // Use progress state
            width: "100%",
            background: "#76c7c0",
            transition: "height 0.5s ease", // Smooth transition
          }}
        ></div>
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <span>{stations.end}</span>
      </div>
    </div>
  );
};

export default VerticalProgressBar;
