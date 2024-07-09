import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NewBrunswick from './NewBrunswick';
import Newfoundland from './Newfoundland';
import Northwest from './Northwest';
import NovaScotia from './NovaScotia';
import Nunavut from './Nunavut';
import PrinceEdward from './PrinceEdward';
import Saskatchewan from './Saskatchewan';
import Yukon from './Yukon';
import styles from './Edge.module.css';

function Edge() {
  const location = useLocation();
  const isRootPath = location.pathname === '/edge';

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="newbrunswick" element={<NewBrunswick />} />
        <Route path="newfoundland" element={<Newfoundland />} />
        <Route path="northwest" element={<Northwest />} />
        <Route path="novascotia" element={<NovaScotia />} />
        <Route path="nunavut" element={<Nunavut />} />
        <Route path="princeedward" element={<PrinceEdward />} />
        <Route path="saskatchewan" element={<Saskatchewan />} />
        <Route path="yukon" element={<Yukon />} />
      </Routes>

      {isRootPath && (
        <>
        

      <h2 className={styles.header}>
        Places you would rather be
      </h2>

      <div className={styles.innerContainer}>



        <div className={styles.linkpic}>
          <a href='./#/edge/newfoundland'>
            <img className={styles.mainImage} src='https://images.unsplash.com/photo-1645249044358-c046fbcccb77?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Newfoundland & Labrador'></img>
          </a>
          <p className={styles.caption}>Newfoundland and Labrador</p>
        </div>


        <div className={styles.linkpic}>
          <a href='./#/edge/northwest'>
            <img className={styles.mainImage} src='https://images.unsplash.com/photo-1603062096192-41fe28d0fec3?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Northwest Territories'></img>
          </a>

          <p className={styles.caption}>Northwest Territories</p>
        </div>


        <div className={styles.linkpic}>
          <a href='./#/edge/newbrunswick'>
            <img className={styles.mainImage} src='https://images.unsplash.com/photo-1649803153066-ebf1a3ced231?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='New Brunswick'></img>
          </a>

          <p className={styles.caption}>New Brunswick</p>
        </div>


        <div className={styles.linkpic}>
          <a href='./#/edge/nunavut'>
            <img className={styles.mainImage} src='https://images.unsplash.com/photo-1570669405132-f4771bdf399a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Nunavut'></img>
          </a>

          <p className={styles.caption}>Nunavut</p>
        </div>


        <div className={styles.linkpic}>
          <a href='./#/edge/novascotia'>
            <img className={styles.mainImage} src='https://images.unsplash.com/photo-1635609163186-a68bfa590438?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Nova Scotia'></img>
          </a>

          <p className={styles.caption}>Nova Scotia</p>
        </div>


        <div className={styles.linkpic}>
          <a href='./#/edge/yukon'>
            <img className={styles.mainImage} src='https://images.unsplash.com/photo-1615809585071-02690b5475c1?q=80&w=1648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Yukon'></img>
          </a>

          <p className={styles.caption}>Yukon</p>
        </div>


        <div className={styles.linkpic}>
          <a href='./#/edge/saskatchewan'>
            <img className={styles.mainImage} src='https://images.unsplash.com/photo-1593132440320-4d8c32599ab8?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Saskatchewan'></img>
          </a>

          <p className={styles.caption}>Saskatchewan</p>
        </div>


        <div className={styles.linkpic}>
          <a href='./#/edge/princeedward'>
            <img className={styles.mainImage} src='https://images.unsplash.com/photo-1691727197579-3f76fca554dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Prince Edward Island'></img>
          </a>

          <p className={styles.caption}>Prince Edward Island</p>
        </div>


      </div>
      </>
      )}
    </div>
  );
}

export default Edge
