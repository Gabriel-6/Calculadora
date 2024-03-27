import React, { useState } from 'react'
import './index.css'

function App() {
  const [displayValue, setDisplayValue] = useState('0');



  return (
    <div className="bg-gray-500 w-80 mx-auto my-10 p-4 rounded-lg shadow-lg">
      <input className="w-full text-right pr-3 text-2xl bg-white text-black border-1 rounded-lg border-cyan-500" type='text' value={displayValue} disabled />

      <div className="grid grid-cols-4 gap-4 mt-4 text-white">
        <button className="transition duration-200 active: translate-x-1 col-span-2 text-xl" onClick={() => setDisplayValue("0")}>AC</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">Del</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">/</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setDisplayValue("7")}>7</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setDisplayValue("8")}>8</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setDisplayValue("9")}>9</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">*</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setDisplayValue("4")}>4</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setDisplayValue("5")}>5</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setDisplayValue("6")}>6</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">-</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setDisplayValue("1")}>1</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setDisplayValue("2")}>2</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setDisplayValue("3")}>3</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">+</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" disabled></button>
        <button className="transition duration-200 active: translate-x-1 text-xl" onClick={() => setDisplayValue("0")}>0</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">.</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">=</button>
      </div>
    </div>
  );
}

export default App;