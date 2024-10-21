import React from "react";
import ShortestRouteMap from "../components/ShortestRouteMap";
import VerticalProgressBar from "../components/VerticalProgressBar";

const Shortestpathmap = () => {
  return (
    <div 
      className="dashboard-content" 
      style={{
        display: "flex", 
        flexDirection: "row",  // Ensures the progress bar and map are side by side
        alignItems: "flex-start",  // Aligns both components at the top
        width: "100%",  // Ensures the div takes full width of the screen/parent container
        height: "100vh",  // Takes the full viewport height
        padding: "20px"  // Adds padding for a better layout
      }}
    > 
      
      <ShortestRouteMap />
      <VerticalProgressBar />
    </div>
  );
};

export default Shortestpathmap;
