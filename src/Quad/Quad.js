import React, { useState } from 'react';
import styles1 from './Quad.module.css';
import styles2 from './Quad1.module.css';

function Quad() {

  const [styles, setStyles] = useState(styles2);
  const toggleStyle = () => {
    setStyles(styles === styles1 ? styles2 : styles1)
  }

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
    <div className={styles.container}>
      <label className={styles.switch}>
        <input type='checkbox' onChange={toggleStyle} />
        <span className={styles.sliderRound}></span>
      </label>

      <div className={styles.header}>
        <h3>Calculate roots of a quadratic equation:</h3>
      </div>

      <div className={styles.inputContainer}>
        <input 
          className={styles.inputA}
          type='number'
          placeholder='a'
          value={inputAValue}
          onChange={(e) => setInputAValue(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>x<sup>2</sup> + 
        
        <input 
          className={styles.inputB}
          type='number'
          placeholder='b'
          value={inputBValue}
          onChange={(e) => setInputBValue(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>x + 
        
        <input 
          className={styles.inputC}
          type='number'
          placeholder='c'
          value={inputCValue}
          onChange={(e) => setInputCValue(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input> = 0
      </div>

      <div className={styles.button}>
        <button
          className={styles.buttonButton}
          onClick={() => findx()}
        >Find x</button>
      </div>

      <div className={isHidden ? styles.equationDisplay && styles.hidden : styles.equationDisplay && styles.visible}>
        {displayAValue}x<sup>2</sup> + {displayBValue}x + {displayCValue} = 0
      </div>

      <br />

      <div className={isHidden ? styles.discr && styles.hidden : styles.discr && styles.visible}>
        D = {discr}
      </div>

      <br />

      <div className={isHidden ? styles.roots && styles.hidden : styles.roots && styles.visible}>
        x<sub>1</sub> = {isNaN(x1) ? 'No roots' : x1}
        <br /> 
        x<sub>2</sub> = {isNaN(x2) ? 'No roots' : x2}
      </div>

    </div>
  )
}

export default Quad
