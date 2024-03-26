import React, { useState } from 'react'
import './index.css'

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  

  return (
    <div className="bg-gray-500 w-80 mx-auto my-10 p-4 rounded-lg shadow-lg">
      <input className="w-full text-right text-2xl bg-transparent text-white border-1 border-cyan-500" type='text' value={displayValue} disabled />

      <div className="grid grid-cols-4 gap-4 mt-4">
        <button className="transition duration-200 active: translate-x-1 col-span-2 text-xl">AC</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">Del</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">/</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">7</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">8</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">9</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">*</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">4</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">5</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">6</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">-</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">1</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">2</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">3</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">+</button>
        <button className="transition duration-200 active: translate-x-1 text-xl" disabled></button>
        <button className="transition duration-200 active: translate-x-1 text-xl">0</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">.</button>
        <button className="transition duration-200 active: translate-x-1 text-xl">=</button>
      </div>
    </div>
  );
}

export default App;