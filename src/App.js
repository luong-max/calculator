import React, { useState } from 'react';
import './App.css';

//Utilisation de ChatGPT
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input className="input" type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '.', '=', '/'].map((item) => (
          <button key={item} onClick={() => (item === '=' ? handleCalculate() : handleClick(item))}>
            {item}
          </button>
        ))}
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="result">
        <span>Result: {result}</span>
      </div>
    </div>
  );
};

export default Calculator;
