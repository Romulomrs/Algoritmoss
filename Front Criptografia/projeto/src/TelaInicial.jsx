// TelaInicial.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Criptografia from './Criptografia';

function TelaInicial() {
  const buttonStyle = {
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #ccc',
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  return (
    <Router>
      <div style={containerStyle}>
        <Link to="/criptografia">
          <button style={buttonStyle}>Button 1</button>
        </Link>
        <button style={buttonStyle}>Button 2</button>
      </div>

      <Routes>
        <Route path="/criptografia" element={<Criptografia />} />
      </Routes>
    </Router>
  );
}

export default TelaInicial;

