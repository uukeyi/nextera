import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  // Пишем реальную высоту хедера в CSS-переменную --header-height
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setVar = () =>
      document.documentElement.style.setProperty("--header-height", `${el.offsetHeight}px`);

    setVar();

    // Следим за изменениями размеров (адаптив, смена шрифтов и т.д.)
    const ro = new ResizeObserver(setVar);
    ro.observe(el);

    // На ресайз тоже обновим
    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  // Блокируем скролл, когда меню открыто (на мобильных/планшетах)
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [menuOpen]);

  // Закрывать меню при переходе на другую страницу
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Закрывать по Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header ref={headerRef} className={styles.header} role="banner">
      <div className={styles.inner}>
        <Link to="/" aria-label="Home" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>

        {/* Burger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          type="button"
        >
          <span></span><span></span><span></span>
        </button>

        {/* Fullscreen nav panel */}
        <nav
          id="main-nav"
          className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
          aria-hidden={!menuOpen}
        >
          {/* Кликаем по фону — закрываем меню */}
          <div
            className={styles.navBackdrop}
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <ul className={styles.navList} onClick={() => setMenuOpen(false)}>
            <li><Link to="/about">О Нас</Link></li>
            <li><Link to="/projects">Проекты</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
            <li><Link to="/en">ENG</Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.line} />
    </header>
  );
}
