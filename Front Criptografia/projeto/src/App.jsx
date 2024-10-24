import React, { useState } from 'react';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  // Estados para controlar as cores dos botões
  const [button1Color, setButton1Color] = useState('blue');
  const [button2Color, setButton2Color] = useState('red');

  // Função para alternar as cores dos botões
  const handleButtonClick = (button) => {
    if (button === 1) {
      setButton1Color('red');
      setButton2Color('blue');
    } else {
      setButton1Color('blue');
      setButton2Color('red');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh', // Centraliza verticalmente ocupando 100% da altura da viewport
    }}>
      {/* Div para os botões no topo da página */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={() => handleButtonClick(1)}
          style={{
            padding: '10px 20px',
            backgroundColor: button1Color,
            color: 'white',
            border: 'none',
            borderRadius: '5px 0 0 5px', // Borda arredondada no canto esquerdo
            cursor: 'pointer',
            marginRight: '0', // Remove o espaço entre os botões
          }}
        >
          Botão 1
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          style={{
            padding: '10px 20px',
            backgroundColor: button2Color,
            color: 'white',
            border: 'none',
            borderRadius: '0 5px 5px 0', // Borda arredondada no canto direito
            cursor: 'pointer',
            marginLeft: '0', // Remove o espaço entre os botões
          }}
        >
          Botão 2
        </button>
      </div>

      {/* Inserção dos inputs e seus botões */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Insira o primeiro valor"
            style={{ padding: '10px', width: '200px', marginRight: '10px' }}
          />
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Botão A
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Insira o segundo valor"
            style={{ padding: '10px', width: '200px', marginRight: '10px' }}
          />
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Botão C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
