import React from 'react';

const CoalDashboard = () => {
  return (
    <div>
      <iframe 
        src="https://coaldashboard.cmpdi.co.in/dashboard.php"
        title="Coal Production Dashboard"
        width="100%"
        height="800px"
        style={{ border: 'none' }}
        allowFullScreen
      />
    </div>
  );
};

export default CoalDashboard;
