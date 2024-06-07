import React, { useState } from 'react';

function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  });
  const [total, setTotal] = useState(null);

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked
    }));
  };

  const calcular = () => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
    let soma = numero1 + numero2;

    if (checkboxes.checkbox1) {
      soma += 2;
    }
    if (checkboxes.checkbox2) {
      soma += 5; // Valor associado à checkbox2
    }
    if (checkboxes.checkbox3) {
      soma += 10; // Valor associado à checkbox3
    }

    setTotal(soma);
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <form>
        <label>
          Número 1:
          <input type="number" value={num1} onChange={handleNum1Change} required />
        </label>
        <br />
        <label>
          Número 2:
          <input type="number" value={num2} onChange={handleNum2Change} required />
        </label>
        <br />
        <label>
          Adicionar Número 2?
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox1}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Adicionar Valor 5?
          <input
            type="checkbox"
            name="checkbox2"
            checked={checkboxes.checkbox2}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Adicionar Valor 10?
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkboxes.checkbox3}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <button type="button" onClick={calcular}>Calcular</button>
      </form>
      <br />
      <p>Resultado: {total !== null ? total : 'Nenhum cálculo realizado ainda'}</p>
    </div>
  );
}

export default Calculadora;
