import React, { useState } from 'react';
import './Quad2.css';

function Quad() {

  const [isHidden, setIsHidden] = useState(true);
  const [inputAValue, setInputAValue] = useState('');
  const [inputBValue, setInputBValue] = useState('');
  const [inputCValue, setInputCValue] = useState('');
  const [displayAValue, setDisplayAValue] = useState('a');
  const [displayBValue, setDisplayBValue] = useState('b');
  const [displayCValue, setDisplayCValue] = useState('c');
  const [discr, setDiscr] = useState('');
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');

  const findx = () => {
    const a = parseFloat(inputAValue);
    const b = parseFloat(inputBValue);
    const c = parseFloat(inputCValue);

    const discriminant = b**2 - 4*a*c;
    const x1Value = (-b - Math.sqrt(discriminant)) / (2*a);
    const x2Value = (-b + Math.sqrt(discriminant)) / (2*a);

    setDisplayAValue(a);
    setDisplayBValue(b);
    setDisplayCValue(c);
    setDiscr(discriminant);
    setX1(x1Value);
    setX2(x2Value);
    setIsHidden(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      findx();
    }
  };
    
  return (
    <div className='container'>
      <div className='header'>
        <h3>Calculate roots of a quadratic equation:</h3>
      </div>

      <div>
        <input 
          className='inputA'
          type='number'
          placeholder='a'
          value={inputAValue}
          onChange={(e) => setInputAValue(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>x<sup>2</sup> + 
        
        <input 
          className='inputB'
          type='number'
          placeholder='b'
          value={inputBValue}
          onChange={(e) => setInputBValue(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>x + 
        
        <input 
          className='inputC'
          type='number'
          placeholder='c'
          value={inputCValue}
          onChange={(e) => setInputCValue(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input> = 0
      </div>

      <div className='button'>
        <button
          className='button-button'
          onClick={() => findx()}
        >Find x</button>
      </div>

      <div className={isHidden ? 'equation-display hidden' : 'equation-display visible'}>
        {displayAValue}x<sup>2</sup> + {displayBValue}x + {displayCValue} = 0
      </div>

      <br />

      <div className={isHidden ? 'discr hidden' : 'discr visible'}>
        D = {discr}
      </div>

      <br />

      <div className={isHidden ? 'roots hidden' : 'roots visible'}>
        x<sub>1</sub> = {x1}
        <br /> 
        x<sub>2</sub> = {x2}
      </div>

      {/* <div className={isHidden ? 'viete hidden' : 'viete visible'}>
        x<sub>1</sub>x<sub>2</sub> = {displayCValue}
        <br />
        x<sub>1</sub> + x<sub>2</sub> = {displayBValue !== 'b' ? displayBValue*(-1) : '-b'}
      </div> */}
    </div>
  )
}

export default Quad
