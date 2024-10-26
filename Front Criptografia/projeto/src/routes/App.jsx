import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <button style={styles.button}>Botão 1</button>
      <button style={styles.button}>Botão 2</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Ocupa toda a altura da tela
  },
  button: {
    margin: 0, // Remove margem
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default App;


