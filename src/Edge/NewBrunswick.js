import React from 'react';
import styles from './Provinces.module.css';

function NewBrunswick() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        New Brunswick
      </h2>

      <div className={styles.innerContainer}>
        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nb1} src='' alt='New Brunswick 1'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nb2} src='' alt='New Brunswick 2'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nb3} src='' alt='New Brunswick 3'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nb4} src='' alt='New Brunswick 4'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nb5} src='' alt='New Brunswick 5'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nb6} src='' alt='New Brunswick 6'></img>
          </a>
        </div>



      </div>
    </div>
  )
}

export default NewBrunswick
