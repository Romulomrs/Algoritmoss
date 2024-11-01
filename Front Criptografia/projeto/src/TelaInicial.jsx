import { Link } from 'react-router-dom';
import React from 'react';

function TelaInicial() {
  return (
      <div>
        <nav>
          <button><Link to="/App">Criptografia</Link></button>
  
          <button><Link to="/Descriptografia">Descriptografia</Link></button>
        </nav>
      </div>
    );
  }

export default TelaInicial;

