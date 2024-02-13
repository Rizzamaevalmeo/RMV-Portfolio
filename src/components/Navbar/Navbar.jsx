import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="">About</a>
          </li>
          <li>
          <a href="#about">Education</a>
          </li>
          <li>
          <a href="#experience">Experience</a>
          </li>
          <li>
          <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
