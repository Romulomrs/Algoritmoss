import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Descriptografia() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

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

  // Estado para o novo input ao lado da matriz
  const [sideInput, setSideInput] = useState('');

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
            backgroundColor: 'blue',
            border: 'none',
            borderRadius: '5px 0 0 5px',
            cursor: 'pointer',
            marginTop: '50px',
            width:'10%',
          }}
        ><Link to="/Criptografia"
        style={{color: 'white', textDecoration: 'none',

        }} >Criptografia</Link>

        </button>
        
        <button
          onClick={() => handleButtonClick(2)}
          style={{
            padding: '10px 20px',
            backgroundColor: 'red',
            border: 'none',
            color: 'white',
            borderRadius: '0 5px 5px 0',
            cursor: 'pointer',
            marginTop: '50px',
            width:'10%'
          }}
        >Descriptografia
          
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
            placeholder="INPUT 01 - CHAVE IV"
            style={{ padding: '10px', width: '200px', margin:'0 10px 0 10%', height:'20px'}}
          />
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              margin: '60px 0 0 50%',
              

            }}
          >
            DECODIFICAR
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
            placeholder="INPUT 02 - CHAVE SECRETA"
            style={{ padding: '10px', width: '200px', marginRight: '10px', marginLeft: '10%' }}
          />
        </div>

        {/* Matriz e novo input ao lado */}

          <div>
  <label style={{ marginBottom: '5px', display: 'block', margin:'20px 0 15px 65%',width:'25%', }}>OUTPUT - MATRIZ DESCRIPTOGRAFADA</label>
  <label style={{  display: 'block', margin:'-25px 0 0px 8%',width:'35%' }}>INPUT - ÁREA DE INSERIR A MATRIZ CRIPTOGRAFADA</label>
  <input
    type="text"
    placeholder="RERE56ER62D8A4ED8A1ED5F"
    style={{
      padding: '10px',
    width: '350px',
    height: '50px',
      margin:'10px 0 15px 8%',
      borderColor: 'ActiveBorder',
      borderStyle: 'solid',
      borderWidth: '1px',
      whiteSpace: 'nowrap'


    }}
  />
</div>

          {/* Matriz */}
          <div style={{ position:'absolute',marginLeft:'63.5%',marginTop:'200px'}}>
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

export default Descriptografia;
