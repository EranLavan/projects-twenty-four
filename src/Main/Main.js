import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function Main() {

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
            <h2>Quadratic Equation</h2>
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

      <div className={styles.bgAttribution}>
        <a href='https://www.freepik.com/free-vector/chrome-hex-pattern-background-gradient_79007664.htm#fromView=search&page=2&position=9&uuid=9f4ef5dd-5bd0-4d90-baf4-1713374c292c'>Background</a> by <a href='https://www.freepik.com/author/juicy-fish'>JuicyFish</a> on Freepik
      </div>

      <div className={styles.bgAttribution}>
        <a href=''></a>
      </div>
    </div>
  );
}

export default Main
