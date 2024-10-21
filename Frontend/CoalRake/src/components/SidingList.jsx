import React from 'react';

const SidingList = ({ sidingData, selectedSiding }) => {
  return (
    <div style={{ height:'100%',width: '50%', padding: '10px', overflowY: 'scroll',margin:'30px', border:'solid',height:'600px' }}>
      {/* If a siding is selected, show its details, otherwise show all siding locations */}
      {!selectedSiding ? (
        <>
          <strong style={{marginLeft:'200px'}} >Available Siding Locations</strong>
          <table style={{ width: '70%', borderCollapse: 'collapse', marginTop: '20px', marginLeft:'50px' }}>
            <thead>
              <tr>
                <th style={{ border: 'solid', padding: '10px', textAlign: 'center' }}>Siding Name</th>
                <th style={{ border: 'solid', padding: '10px', textAlign: 'center' }}>production</th>
              </tr>
            </thead>
            <tbody>
              {sidingData.map((siding, index) => (
                <tr key={index} style={{ borderBottom: 'solid' }}>
                  <td style={{ border: 'solid', padding: '10px' }}>
                    <strong>{siding.name}</strong>
                  </td>
                  <td style={{ border: 'solid', padding: '10px' }}>
                    <strong>{siding.production}</strong>
                  </td>
                 
                </tr>
                    
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div style={{ marginTop: '20px',marginLeft:'70px' }}>
          <strong>Selected Siding Details</strong>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', border:'solid' }}>
            <tbody>
              <tr>
                <td style={{ border: 'solid', padding: '10px', width: '50%' }}>
                  <strong>Name:</strong>
                </td>
                <td style={{ border: 'solid', padding: '10px', marginLeft:'2opx' }}>{selectedSiding.name}</td>
              </tr>
              {selectedSiding.image && (
                <tr>
                  <td style={{ border: 'solid', padding: '10px', width: '50%' }}>
                    <strong>Image:</strong>
                  </td>
                  <td style={{ border: 'solid', padding: '10px' }}>
                    <img
                      src={selectedSiding.image}
                      alt={selectedSiding.name}
                      style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '10px 0' }}
                    />
                  </td>
                </tr>
              )}
              <tr>
                <td style={{ border: 'solid', padding: '10px', width: '30%', marginLeft:'30px' }}>
                  <strong>Production:</strong>
                </td>
                <td style={{ border: 'solid', padding: '10px' }}>{selectedSiding.production}</td>
              </tr>
              <tr>
                <td style={{ border: 'solid', padding: '10px', width: '30%' }}>
                  <strong>Address:</strong>
                </td>
                <td style={{ border: 'solid', padding: '10px' }}>{selectedSiding.address}</td>
              </tr>
              <tr>
                <td style={{ border: 'solid', padding: '10px', width: '30%' }}>
                  <strong>Labors:</strong>
                </td>
                <td style={{ border: 'solid', padding: '10px' }}>{selectedSiding.labors}</td>
              </tr>
              <tr>
                <td style={{ border: 'solid', padding: '10px', width: '30%' }}>
                  <strong>Working Time:</strong>
                </td>
                <td style={{ border: 'solid', padding: '10px' }}>{selectedSiding.workingTime}</td>
              </tr>
              <tr>
                <td style={{ border: 'solid', padding: '10px', width: '30%' }}>
                  <strong>Available Rakes:</strong>
                </td>
                <td style={{ border: 'solid', padding: '10px' }}>{selectedSiding.rakes}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SidingList;
