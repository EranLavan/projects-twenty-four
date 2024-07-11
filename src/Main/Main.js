import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function Main() {
  // return (
  //   <div>
  //     Here's the main page
  //     <br />

  //     <a href='./#/milim'>Milim</a><br />
  //     <a href='./#/solubility'>Solubility Table</a><br />
  //     <a href='./#/quad'>Quadratic Equation root calculator</a><br />
  //     <a href='./#/randomizer'>Randomizer</a><br />
  //     <a href='./#/edge'>On the Edge of the World</a><br />
  //     <a href='./#/calendar'>Calendar</a><br />
  //   </div>
  // )

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.name}>Grigory Belov</h1>
        <h2 className={styles.nameCaption}>Chemist, Teacher and Web Developer</h2>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/grigory-belov-33a416234/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://github.com/EranLavan" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100093163406896" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} />
          </a>
        </div>
      </header>

      <div className={styles.projects}>
        <Link to="/milim" className={styles.projectLink}>
          <div className={styles.project}>
            <h2>Milim</h2>
          </div>
        </Link>
        <Link to="/solubility" className={styles.projectLink}>
          <div className={styles.project}>
            <h2>Solubility Table</h2>
          </div>
        </Link>
        <Link to="/quad" className={styles.projectLink}>
          <div className={styles.project}>
            <h2>Quadratic Equation Solver</h2>
          </div>
        </Link>
        <Link to="/randomizer" className={styles.projectLink}>
          <div className={styles.project}>
            <h2>Randomizer</h2>
          </div>
        </Link>
        <Link to="/calendar" className={styles.projectLink}>
          <div className={styles.project}>
            <h2>Calendar</h2>
          </div>
        </Link>
        <Link to="/edge" className={styles.projectLink}>
          <div className={styles.project}>
            <h2>Places</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Main
