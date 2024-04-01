import React, { useState } from 'react'
import './index.css'

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [selectedOperator, setSelectOperator] = useState(false)

  const setNumber = (number) => {
    if(selectedOperator) {
      setDisplayValue(displayValue + number)
      setSelectOperator(false)
    }else{
      setDisplayValue(displayValue === '0' ? number: displayValue + number)
    }
  }

  const setOperation = (operation) => {
    if(!selectedOperator){
      setDisplayValue(displayValue + operation)
      setSelectOperator(true)
    }
  }

  const clearDisplay = () => {
    setOperation(true)
    setDisplayValue('0')
  }

  const deleteDigit = () => {
    setDisplayValue(displayValue.slice(0, (displayValue.length-1)))
  }

  const calculate = () => {
    setDisplayValue(eval(displayValue))
  }

 

  return (
    <div className="bg-gray-500 w-80 mx-auto my-10 p-4 rounded-lg shadow-lg">
      <input className="w-full text-right pr-3 text-2xl bg-white text-black border-1 rounded-lg border-cyan-500" type='text' value={displayValue} disabled />

      <div className="grid grid-cols-4 gap-4 mt-4 text-white">
        <button className="transition duration-200 active: translate-x-1 col-span-2 text-xl" onClick={() => clearDisplay()}>AC</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => deleteDigit()}>Del</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setOperation('/')}>/</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setNumber("7")}>7</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setNumber("8")}>8</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setNumber("9")}>9</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setOperation('*')}>*</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setNumber("4")}>4</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setNumber("5")}>5</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setNumber("6")}>6</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setOperation('-')}>-</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setNumber("1")}>1</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setNumber("2")}>2</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setNumber("3")}>3</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setOperation('+')}>+</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" disabled></button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setNumber("0")}>0</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">.</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => calculate()}>=</button>
      </div>
    </div>
  );
}

export default App;