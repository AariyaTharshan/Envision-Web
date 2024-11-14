import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100vw',
        }}
      >
        {/* Header */}
        <Header />

        <div
          style={{
            display: 'flex',
            flex: 1,
            overflow: 'hidden',
          }}
        >
          {/* Sidebar */}
          <Sidebar />
          <div
            style={{
              flex: 1,
              padding: '20px',
              overflow: 'hidden', 
            }}
          >
            {/* Content Goes Here */}
            <Routes>
              <Route path="/" element={<div>Content goes here</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
