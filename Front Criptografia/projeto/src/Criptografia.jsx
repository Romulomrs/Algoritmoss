import React, { useState } from 'react';
import Descriptografia from './Descriptografia';

function Criptografia() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  // Estados para controlar as cores dos botões
  const [button1Color, setButton1Color] = useState('red');
  const [button2Color, setButton2Color] = useState('white');
  

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

  // Função para alternar as cores dos botões
  const handleButtonClick = (button) => {
    if (button === 1) {
      setButton1Color('red');
      setButton2Color('white');
    } else {
      setButton1Color('white');
      setButton2Color('red');
    }
  };
  if (button1Color === 'red') {
    return (
  <Criptografia/>
    );
  }
   else if (button2Color === 'blue') {
    return <Descriptografia />;
  }



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
            marginLeft: '42%',
            backgroundColor: button1Color,
            color: 'white',
            border: 'none',
            borderRadius: '5px 0 0 5px',
            cursor: 'pointer',
            marginTop: '50px',
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
            marginTop: '50px',
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
      }}>
        <div style={{
          display: 'flex',
          marginBottom: '10px',
          width: '80%', // Faz com que a div ocupe 80% da largura
        }}>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Insira o primeiro valor"
            style={{ padding: '10px', width: '200px', marginRight: '10px', marginLeft: '10%' }}
          />
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '50%',
            }}
          >
            Botão A
          </button>
        </div>

        <div style={{
          display: 'flex',
          marginBottom: '10px',
          width: '80%',
        }}>
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Insira o segundo valor"
            style={{ padding: '10px', width: '200px', marginRight: '10px', marginLeft: '10%', marginTop: '5%' }}
          />
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '50%',
              marginTop: '5%'
            }}
          >
            Botão C
          </button>
        </div>

        {/* Matriz e novo input ao lado */}

          <div>
  <label style={{ marginBottom: '5px', display: 'block', margin:'20px 0 15px 65.8%',width:'15%',marginright:'-500px',borderColor:'ActiveBorder' ,borderStyle: 'solid', borderWidth: '2px' }}>Novo Input:</label>
  <input
    type="text"
    placeholder="Novo input"
    style={{
      padding: '10px',
      width: '200px',
      height: '50px',
      margin:'10px 0 15px 65.8%',
      borderColor:'ActiveBorder' ,borderStyle: 'solid', borderWidth: '2px' 

    }}
  />
</div>

          {/* Matriz */}
          <div style={{ position:'absolute',marginLeft:'7.1%',marginTop:'150px'}}>
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
                      margin: '10px',
                      textAlign:'center',
position: 'relative'
                      
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

export default Criptografia;
