
import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <video autoPlay loop muted className={styles.video}>
        {/* <source src="/video/hero-background.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        <h1>NextEra Production</h1>
        <p>Мы — продакшн полного цикла, готовый воплотить в жизнь самые смелые идеи</p>
      </div>
    </div>
  );
}

export default Hero;
