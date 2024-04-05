import React, { useState } from 'react'
import './index.css'

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [selectedOperator, setSelectOperator] = useState(false)
  const [decimalAllowed, setDecimalAllowed] = useState(true)

  const setNumber = (number) => {
    if(selectedOperator) {
      if(!decimalAllowed && number === '.'){
        return
      }
      setDisplayValue(displayValue === '0' || displayValue === 'Não Possivel Calcular' ? number: displayValue + number)
      setSelectOperator(false)
      setDecimalAllowed(false)
    }else{
      if(!decimalAllowed && number === '.'){
        return
      }
      setDisplayValue(displayValue === '0' || displayValue === 'Não Possivel Calcular' ? number: displayValue + number)
      setDecimalAllowed(number !== '.')
    }
  }

  const setOperation = (operation) => {
    const lastChar = displayValue[displayValue.length - 1]
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
      setDisplayValue(displayValue.slice(0, -1) + operation)
    } else {
      setDisplayValue(displayValue + operation)
    }
    setSelectOperator(true)
    setDecimalAllowed(true)
  }

  const setDot = (dot) => {
    if(!selectedOperator){
      if(!decimalAllowed) {
        return
      }
      setDisplayValue(displayValue + dot)
      setSelectOperator(true)
    }
  }

  const clearDisplay = () => {
    setOperation(true)
    setDecimalAllowed(false)
    setDisplayValue('0')
  }


  const deleteDigit = () => {
    if(typeof displayValue === 'string' && displayValue.length > 0) {
      const finalDigit = displayValue[displayValue.length-1]
      const newValue = displayValue.slice(0, -1)
      if(finalDigit === '.') {
        console.log(finalDigit)
        setDecimalAllowed(true)
      }
      setDisplayValue(newValue)
    }
  }

  const verifyNumber = (number) => {
    return String(number).includes('.') ? true : false
  }


  const calculate = () => {
    try{
      const result = eval(displayValue)
      if(result === Infinity || isNaN(result)){
        setDisplayValue("Não Possivel Calcular")
      }
      else{
        if(verifyNumber(result)) {
          setDisplayValue(String(result.toFixed(2)))
        } else {
          setDisplayValue(String(result))
        }
      }
    }catch(error){
      setDisplayValue('Não Possivel Calcular')
    } 
  }

 

  return (
    <div className="bg-gray-500 w-80 mx-auto my-10 p-4 rounded-lg shadow-lg">
      <input className="w-full text-right pr-3 text-2xl bg-white text-black border-1 rounded-lg h-16 border-cyan-500" type='text' value={displayValue} disabled />

      <div className="grid grid-cols-4 gap-4 mt-8">
        <button className="col-span-2 text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => clearDisplay()}>AC</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => deleteDigit()}>Del</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setOperation('/')}>/</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setNumber("7")}>7</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setNumber("8")}>8</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setNumber("9")}>9</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setOperation('*')}>*</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setNumber("4")}>4</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setNumber("5")}>5</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setNumber("6")}>6</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setOperation('-')}>-</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setNumber("1")}>1</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setNumber("2")}>2</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setNumber("3")}>3</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setOperation('+')}>+</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" disabled></button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setNumber("0")}>0</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => setDot(".")}>.</button>
        <button className="text-xl py-3 bg-gray-800 text-white rounded-lg" onClick={() => calculate()}>=</button>
      </div>
    </div>
  );
}

export default App;