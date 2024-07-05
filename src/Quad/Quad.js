import React, { useState } from 'react';
import './Quad.css';

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
    setIsHidden(false)

  }
    
  return (
    <div>
      <div className='header'>
        <h2>Calculate roots</h2>
      </div>

      <div>
        <input 
          className='inputA'
          type='number'
          placeholder='a'
          value={inputAValue}
          onChange={(e) => setInputAValue(e.target.value)}
        ></input>x<sup>2</sup> + 
        
        <input 
          className='inputB'
          type='number'
          placeholder='b'
          value={inputBValue}
          onChange={(e) => setInputBValue(e.target.value)}
        ></input>x + 
        
        <input 
          className='inputC'
          type='number'
          placeholder='c'
          value={inputCValue}
          onChange={(e) => setInputCValue(e.target.value)}
        ></input> = 0
      </div>

      <div className='button'>
        <button
          // ref={buttonRef}
          className='button-button'
          onClick={() => findx()}
        >Find x</button>
      </div>

      <div className={isHidden ? 'equation-display hidden' : 'equation-display visible'}>
        {displayAValue}x<sup>2</sup> + {displayBValue}x + {displayCValue} = 0
      </div>

      <div className={isHidden ? 'discr hidden' : 'discr visible'}>
        Discr = 
      </div>

      <div className={isHidden ? 'roots hidden' : 'roots visible'}>
        x<sub>1</sub> = {x1}
        <br /> 
        x<sub>2</sub> = {x2}
      </div>

      <div className={isHidden ? 'viete hidden' : 'viete visible'}>
        x<sub>1</sub>x<sub>2</sub> = {displayCValue}
        <br />
        x<sub>1</sub> + x<sub>2</sub> = {displayBValue !== 'b' ? displayBValue*(-1) : '-b'}
      </div>
    </div>
  )
}

export default Quad
