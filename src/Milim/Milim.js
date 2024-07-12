import React, { useState, useRef, useEffect } from 'react';
import styles from './Milim.module.css';
import './Milim.css';
import words from './words.js'

let alreadyUsedWords = [];
let incorrectAnswers = [];

let randomNumber = (Math.ceil(Math.random()*(words.length - 1)));

function getRandomUniqueNumber() {
  do {
    randomNumber = (Math.ceil(Math.random()*(words.length - 1)));
  } while (alreadyUsedWords.includes(randomNumber));
  return randomNumber;
}

const randomUniqueNumber = getRandomUniqueNumber();

alreadyUsedWords.push(randomUniqueNumber);


function Milim() {

  const [inputValue, setInputValue] = useState('');
  const [language, setLanguage] = useState('english');
  const [score, setScore] = useState(0);
  const [word, setWord] = useState(randomUniqueNumber - 1);
  const [counter, setCounter] = useState(1);
  const [message, setMessage] = useState('');
  const [showPronunciation, setShowPronunciation] = useState(false);
  const [showFinalResults, setFinalResults] = useState(false);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeLanguage = () => {
      language==='english' ?
      setLanguage('russian') :
      setLanguage('english')
  }
    
  const correctAnswerEng = `Correct! '${words[word].english}' is <span className='orange'>${words[word].hebrew}</span>.
  <span id='pronunciation'>Show pronunciation</span>`;

  const correctAnswerRus = `Верно! '${words[word].russian}' это <span className={styles.orange}>${words[word].hebrew}</span>.
  <span id='pronunciation'>Показать произношение</span>`;

  const incorrectAnswerEng = `<span className={styles.orange}>${inputValue}</span> was incorrect. 
  Correct answer: <span className={styles.orange}>${words[word].hebrew}</span>. <br>Try next word.`;

  const incorrectAnswerRus = `<span className={styles.orange}>${inputValue}</span> - это неправильный ответ. 
  Правильный ответ: <span className={styles.orange}>${words[word].hebrew}</span>. <br>Попробуйте следующее слово.`

  const checkAnswer = () => {

    function getRandomUniqueNumber() {
      do {
        randomNumber = (Math.ceil(Math.random()*(words.length - 1)));
      } while (alreadyUsedWords.includes(randomNumber));
      return randomNumber;
    }
    
    const randomUniqueNumber = getRandomUniqueNumber();

      if (inputValue === '') {
        language === 'english' ? 
        setMessage(`Type the word inside the input please`) :
        setMessage(`Напишите слово в поле, пожалуйста`);
      
      } else if (inputValue === words[word].hebrew && counter < words.length - 2) {

        setScore(score + 1);

        language === 'english' ?
        setMessage(correctAnswerEng) :
        setMessage(correctAnswerRus)

        setWord(randomUniqueNumber - 1);
        setCounter(counter + 1);

        alreadyUsedWords.push(randomUniqueNumber);

      } else if (counter < words.length - 2) {

        language === 'english' ?
        setMessage(incorrectAnswerEng) :
        setMessage(incorrectAnswerRus)
        
        setWord(randomUniqueNumber - 1);
        setCounter(counter + 1);

        alreadyUsedWords.push(randomUniqueNumber);
        incorrectAnswers.push(randomUniqueNumber);

      } else if (inputValue === words[word].hebrew) {

        setScore(score + 1);
        setFinalResults(true);
      
      } else {

        incorrectAnswers.push(randomUniqueNumber);
        setFinalResults(true);

      }

      console.log(`counter: ${counter}`);
      console.log(`score: ${score}`);
      console.log(`word: ${word}`);

      if ((previousWord) !== undefined) { 
        console.log(`previousWord.id - 1: ${previousWord.id - 1}`);
      } else {
        console.log(`previousWord.id - 1: undefined`)
      }

      console.log(`randomUniqueNumber: ${randomUniqueNumber}`);
      console.log(`alreadyUsedWords: ${alreadyUsedWords}`);
      console.log(`incorrectAnswers: ${incorrectAnswers}`);

      console.log(`_______________________________________\n_______________________________________`)

    
    setInputValue('');
    setShowPronunciation(false);

  }

  const skip = () => {

    function getRandomUniqueNumber() {
      do {
        randomNumber = (Math.ceil(Math.random()*(words.length - 1)));
      } while (alreadyUsedWords.includes(randomNumber));
      return randomNumber;
    }
    
    const randomUniqueNumber = getRandomUniqueNumber();

      checkAnswer();
      setMessage('');
      setWord(randomUniqueNumber - 1);
      setCounter(counter + 1);
      setShowPronunciation(false);

      alreadyUsedWords.push(randomUniqueNumber);

  }

  const stopQuiz = () => {
    checkAnswer();
    setFinalResults(true)
  }

  const previousWord = words[alreadyUsedWords[alreadyUsedWords.length - 2] - 1];

  const restart = () => {
    setFinalResults(false);
    setScore(0);
    setWord(randomNumber - 1);
    setMessage(``);
    setCounter(0);
    alreadyUsedWords = [];

  }

  const pronounce = () => {
      setShowPronunciation(true);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      buttonRef.current.click();
    }
  };

  const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.focus();
      }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, []);




  return (
  <>
    <div className={styles.container}>
      { showFinalResults ? (
      <>
        <div className={styles.milimResults}>
          <h2>
          {
          language === 'english' ? 
          `Your results:` :
          `Ваши результаты:`
          }</h2>
          <h2>
          {
          language === 'english' ?
          `${score} out of ${counter} were answered correctly (${Math.round(score/(counter)*10000)/100}%)` :
          `${score} из ${counter} слов были названы правильно (${Math.round(score/(counter)*10000)/100}%)`
          }</h2>
        </div>

      <div className={styles.center}>
        <button className={styles.clickButton} onClick={() => restart()}>
          {
          language === 'english' ?
          `Try again!` :
          `Попробуйте ещё раз!`
          }
        </button>
      </div>
      </>

      ) : (
    <>
      <div className={styles.milim}>

        <h2 className={styles.header}>
        {
        language === 'english' ?
        `Translate the following word to Hebrew:` :
        `Переведите слово на иврит:` 
        }</h2>
        <h2 className={styles.word}>
        {
        language === 'english' ?
        `${words[word].english}` :
        `${words[word].russian}`
        }
        </h2>

        <div>
          <input 
            ref={inputRef}
            className={styles.input}
            type='text'
            placeholder='הזן את המילה בעברית'
            onKeyDown={handleKeyDown}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}>
          </input>
        </div>

        <div className={styles.buttonDiv}>
          <button 
            ref={buttonRef} 
            className={styles.clickButton}
            onClick={() => checkAnswer()}
          >
            {
            language === 'english' ?
            `Check!` :
            `Проверить!`
            }
          </button>

          <button
            className={styles.clickButton}
            onClick={() => skip()}
          >
          {
            language === 'english' ?
            `Skip this word` :
            `Пропустить`
          }
          </button>

          <button 
            className={styles.clickButton}
            onClick={() => stopQuiz()}
          >
          {
            language === 'english' ?
            `Stop` :
            `Остановиться`
          }
        </button>
        </div>

        <h3 className={styles.h3}>
        {
        language === 'english' ?
        `Current score: ${score}` :
        `Текущий счёт: ${score}`
        }</h3>
        <div className={styles.oneLineDiv}>
          <div className={styles.h3 && styles.message} onClick={() => pronounce()}>
            {message.split('<br />').map((line, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </div>
          <div className={styles.hidden}> 
            {
              showPronunciation 
              ? 
              
              previousWord === undefined ? '' : (<div id='italic'>{
                language === 'english' ?
                words[previousWord.id - 1].pronuncEng :
                words[previousWord.id - 1].pronuncRus
                }</div>) 
              
                : ''
            }
          </div>
        </div>


      
      </div>

      </>
  )}
    </div>

    <div className={styles.languageSwitch}>
        <button 
          className={styles.languageSwitchButton} 
          onClick={() => changeLanguage()}>
          {
            language==='english' 
            ? 'Русский язык' 
            : 'English'
          }
        </button>
      </div>

  </>
  )
}

export default Milim
