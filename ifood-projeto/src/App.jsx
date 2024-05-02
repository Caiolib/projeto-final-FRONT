import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Finalization from './pages/Finalization';
import Register from './pages/Register';
import Listing from './pages/Listing';
import Sidebar from './components/Sidebar';
import './index.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/lista" element={<Listing />} />
            <Route path="/finalizado" element={<Finalization />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
