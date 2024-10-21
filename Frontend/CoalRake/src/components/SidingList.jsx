import React from 'react';

const SidingList = ({ sidingData, selectedSiding }) => {
  return (
    <div style={{ width: '50%', padding: '20px', overflowY: 'scroll',marginLeft:'30px', border:'3px solid #ccc' }}>
      {/* If a siding is selected, show its details, otherwise show all siding locations */}
      {!selectedSiding ? (
        <>
          <strong style={{marginLeft:'200px'}} >Available Siding Locations</strong>
          <table style={{ width: '70%', borderCollapse: 'collapse', marginTop: '20px', marginLeft:'50px' }}>
            <thead>
              <tr>
                <th style={{ border: '3px solid #ccc', padding: '10px', textAlign: 'left' }}>Siding Name</th>
              </tr>
            </thead>
            <tbody>
              {sidingData.map((siding, index) => (
                <tr key={index} style={{ borderBottom: '3px solid #ccc' }}>
                  <td style={{ border: '3px solid #ccc', padding: '10px' }}>
                    <strong>{siding.name}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <strong>Selected Siding Details</strong>
          <table style={{ width: '80%', borderCollapse: 'collapse', marginTop: '20px', border:'3px solid #ccc' }}>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ccc', padding: '10px', width: '50%' }}>
                  <strong>Name:</strong>
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px', marginLeft:'2opx' }}>{selectedSiding.name}</td>
              </tr>
              {selectedSiding.image && (
                <tr>
                  <td style={{ border: '1px solid #ccc', padding: '10px', width: '50%' }}>
                    <strong>Image:</strong>
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                    <img
                      src={selectedSiding.image}
                      alt={selectedSiding.name}
                      style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '10px 0' }}
                    />
                  </td>
                </tr>
              )}
              <tr>
                <td style={{ border: '1px solid #ccc', padding: '10px', width: '30%', marginLeft:'30px' }}>
                  <strong>Production:</strong>
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{selectedSiding.production}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}>
                  <strong>Address:</strong>
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{selectedSiding.address}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}>
                  <strong>Labors:</strong>
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{selectedSiding.labors}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}>
                  <strong>Working Time:</strong>
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{selectedSiding.workingTime}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}>
                  <strong>Available Rakes:</strong>
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{selectedSiding.rakes}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SidingList;
