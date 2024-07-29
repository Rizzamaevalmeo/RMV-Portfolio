import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Rizza Mae</h1>
        <p className={styles.description}>
        A motivated and diligent fresh graduate with an excellent academic background and a passion for UI/UX, mobile, web, and software development. Eager to gain practical experience and enhance my skills in a dynamic and challenging environment.
        </p>
        <a href="mailto:rizzamaevalmeo@outlook.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/DSC_0064.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
