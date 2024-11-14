import React from 'react';
import { FaCamera, FaSnapchatGhost, FaSave, FaFileAlt, FaSyncAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <div
      style={{
        width: '255px', // Sidebar width
        background: '#fff',
        borderRadius: '15px',
        padding: '10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        height: '100vh', // Full viewport height
        overflowY: 'auto', // Handle overflow if needed inside the sidebar
      }}
    >
      {/* First Half */}
      <div style={{ marginBottom: '20px' }}>
        {/* First Button with Camera Icon */}
        <button
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            background: '#007bff',
            color: '#fff',
            border: 'none',
            fontSize: '14px',
          }}
        >
          <FaCamera style={{ height: '16px', marginRight: '8px' }} />
          Camera
        </button>

        {/* Second Button with Snap Icon */}
        <button
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            background: '#007bff',
            color: '#fff',
            border: 'none',
            fontSize: '14px',
          }}
        >
          <FaSnapchatGhost style={{ height: '16px', marginRight: '8px' }} />
          Snap
        </button>

        {/* Third Button with Floppy Disk Icon */}
        <button
          style={{
            width: '100%',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            background: '#007bff',
            color: '#fff',
            border: 'none',
            fontSize: '14px',
          }}
        >
          <FaSave style={{ height: '16px', marginRight: '8px' }} />
          Save
        </button>
      </div>

      {/* Second Half */}
      <div>
        {/* Mag X Label and Dropdown */}
        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: '8px', fontSize: '12px' }}>Mag X:</label>
          <select
            style={{
              flex: 1,
              padding: '5px',
              fontSize: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          >
            <option value="1">1</option>
            <option value="1000">1000</option>
          </select>
        </div>

        {/* Location Input and Button */}
        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: '2px', fontSize: '12px' }}>Location:</label>
          <input
            type="text"
            style={{
              flex: 1,
              padding: '5px',
              fontSize: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              marginRight: '4px',
            }}
          />
          <button
            style={{
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
            }}
          >
            <FaFileAlt style={{ height: '18px' }} />
          </button>
        </div>

        {/* From and To Date Inputs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <div style={{ marginRight: '8px' }}>
            <label style={{ fontSize: '12px' }}>From:</label>
            <input
              type="date"
              style={{
                padding: '4px',
                fontSize: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc'
              }}
            />
          </div>
          
          <div style={{ marginRight: '8px' }}>
            <label style={{ fontSize: '12px' }}>To:</label>
            <input
              type="date"
              style={{
                padding: '4px',
                fontSize: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc'
              }}
            />
          </div>

          <button
            style={{
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
            }}
          >
            <FaSyncAlt style={{ height: '16px' }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
