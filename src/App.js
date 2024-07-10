import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "0" && input === "") return;
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const res = eval(input);
      setResult(res);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <motion.h1 
        initial={{ y: -200 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Simple Calculator
      </motion.h1>
      <motion.div 
        className="calculator"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </motion.div>
        <div className="buttons">
          {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "C", "/", "="].map((btn, index) => (
            <motion.button 
              key={index} 
              onClick={btn === "C" ? handleClear : btn === "=" ? handleCalculate : () => handleClick(btn)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {btn}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default App;
