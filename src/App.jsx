import { useState } from 'react';

function App() {
  const [input, setInput] = useState(''); // State to handle input values

  const handleClick = (value) => {
    setInput(input + value); // Append clicked values to input
  };

  const calculate = () => {
    try {
      setInput(eval(input)); // Evaluate the expression
    } catch {
      setInput('Error'); // Handle invalid expressions
    }
  };

  const clearInput = () => {
    setInput(''); // Clear input field
  };

  const clearLast = () => {
    setInput(input.slice(0, -1)); // Remove the last character
  };

  const handlePercentage = () => {
    try {
      setInput((parseFloat(input) / 100).toString()); // Convert input to percentage
    } catch {
      setInput('Error'); // Handle invalid input
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[black]">
      <div className="bg-[yellow] p-8 rounded-lg shadow-lg w-80">
        <div className="text-right mb-4 text-3xl p-4 bg-gray-200 rounded-md">
          {input || '0'}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button className="btn" onClick={clearInput}>C</button>
          <button className="btn" onClick={() => handleClick('/')}>/</button>
          <button className="btn" onClick={() => handleClick('*')}>*</button>
          <button className="btn" onClick={clearLast}>×</button> {/* Cross button */}

          <button className="btn" onClick={() => handleClick('7')}>7</button>
          <button className="btn" onClick={() => handleClick('8')}>8</button>
          <button className="btn" onClick={() => handleClick('9')}>9</button>
          <button className="btn" onClick={() => handleClick('-')}>-</button> {/* - button above + */}

          <button className="btn" onClick={() => handleClick('4')}>4</button>
          <button className="btn" onClick={() => handleClick('5')}>5</button>
          <button className="btn" onClick={() => handleClick('6')}>6</button>
          <button className="btn" onClick={() => handleClick('+')}>+</button> {/* + button below - */}

          <button className="btn" onClick={() => handleClick('1')}>1</button>
          <button className="btn" onClick={() => handleClick('2')}>2</button>
          <button className="btn" onClick={() => handleClick('3')}>3</button>
          
          {/* Vertically spanned `=` button */}
          <button className="btn row-span-2" onClick={calculate}>=</button>

          {/* Percentage Button */}
          <button className="btn" onClick={handlePercentage}>%</button>

          {/* 0 Button taking 2 columns */}
          <button className="btn col-span-1" onClick={() => handleClick('0')}>0</button>
          <button className="btn" onClick={() => handleClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
