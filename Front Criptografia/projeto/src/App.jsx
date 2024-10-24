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

  // Estado para a matriz (inicialmente em branco)
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', '']
  ]);

  // Função para lidar com mudanças nos inputs da matriz
  const handleInputChange = (rowIndex, cellIndex, value) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[rowIndex][cellIndex] = value;
    setMatrix(updatedMatrix);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%', // Centraliza verticalmente ocupando 100% da altura da viewport
    }}>
      {/* Div para os botões no topo da página */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={() => handleButtonClick(1)}
          style={{
            padding: '10px 20px',
            marginLeft:'42%',            backgroundColor: button1Color,
            color: 'white',
            border: 'none',
            borderRadius: '5px 0 0 5px',
            cursor: 'pointer',
            marginTop:'50px',

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
            borderRadius: '0 5px 5px 0',
            cursor: 'pointer',
            marginTop:'50px',
          }}
        >
          Botão 2
        </button>
      </div>

      {/* Inserção dos inputs e seus botões */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        marginTop: '100px',
// Aumenta a margem superior para puxar os inputs mais para baixo
      }}>
        <div style={{ 
          display: 'flex',  
          marginBottom: '10px',
          width: '80%', // Faz com que a div ocupe 100% da largura
        }}>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Insira o primeiro valor"
            style={{ padding: '10px', width: '200px', marginRight: '10px',marginLeft:'10%' }}
          />
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft:'50%',
            }}
          >
            Botão A
          </button>
        </div>

        <div style={{ 
          display: 'flex', 
          marginBottom: '10px',
          width: '80%', // Faz com que a div ocupe 100% da largura
        }}>
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Insira o segundo valor"
            style={{ padding: '10px', width: '200px', marginRight: '10px',marginLeft:'10%',height:'10%', marginTop:'5%'}}
          />
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft:'50%',
              marginTop:'5%'
            }}
          >
            Botão C
          </button>
        </div>


      <div style={{ 
        marginTop: '100px', 
        display: 'flex', 
        flexDirection: 'column', 
        marginLeft:'7.8%',
      }}>
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((cell, cellIndex) => (
              <input
                key={cellIndex}
                type="text"
                value={cell}
                onChange={(e) => handleInputChange(rowIndex, cellIndex, e.target.value)}
                style={{
                  width: '50px',
                  height: '50px',
                  margin: '2px',
                }}
              />
            ))}
          </div>
        ))}
              </div>
      </div>
    </div>
  );
}

export default App;

