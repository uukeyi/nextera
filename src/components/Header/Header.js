import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          <ul>
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

export default Header;
