import React, { useEffect, useState, useRef } from "react";
import styles from "./Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  const [showText, setShowText] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const inactivityTimer = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setShowText(true);
      return;
    }

    const resetInactivityTimer = () => {
      setAnimateOut(false); // отменяем анимацию исчезновения
      setShowText(true);
      clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        setAnimateOut(true); // запускаем анимацию исчезновения
        setTimeout(() => setShowText(false), 500); // убираем из DOM после анимации
      }, 3000);
    };

    window.addEventListener("mousemove", resetInactivityTimer);

    return () => {
      window.removeEventListener("mousemove", resetInactivityTimer);
      clearTimeout(inactivityTimer.current);
    };
  }, []);

  return (
    <div className={styles.hero}>
      <video autoPlay loop muted className={styles.video}>
        {/* <source src="/video/hero-background.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        {showText && (
          <div
            className={`${styles.textBlock} ${animateOut ? styles.zoomOut : styles.zoomIn}`}
          >
            <h1>NextEra Production</h1>
            <p>
              Мы — продакшн полного цикла, готовый воплотить в жизнь самые смелые идеи
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
