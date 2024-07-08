import React, { useState, useEffect, useRef } from 'react';
import styles from './RndAStyleB.module.css';

function RandomizerA() {

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const randomize = () => {
    const delta = Math.ceil((Math.random()*(inputTwo - inputOne + 1)));
    setResult(inputOne - 1 + delta);
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        Random number from 
        <input 
          ref={inputRef}
          className={styles.input}
          type='number'
          placeholder='x'
          // onKeyDown={handleKeyDown}
          value={inputOne}
          onChange={(e) => setInputOne(e.target.value)}
        >
        </input> to 

        <input 
          className={styles.input}
          type='number'
          placeholder='y'
          value={inputTwo}
          onChange={(e) => setInputTwo(e.target.value)}
        >
        </input>
      </div>

      <button className={styles.button} onClick={() => randomize()}>Generate!</button>

      <div className={styles.result}>
        <h1>{result}</h1>
      </div>
    </div>
  )
}

export default RandomizerA
