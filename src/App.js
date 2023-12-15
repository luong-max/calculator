import React, { useState } from 'react';
import './App.css';

//Utilisation de ChatGPT
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
      setInput(calculatedResult.toString());

    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
      <button className="clear" onClick={handleClear}>
          AC
        </button>
        {['%','/',7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='].map((item) => (
          <button key={item} onClick={() => (item === '=' ? handleCalculate() : handleClick(item))}>
            {item}
          </button>
        ))}
        
      </div>
    </div>
  );
};

export default Calculator;
