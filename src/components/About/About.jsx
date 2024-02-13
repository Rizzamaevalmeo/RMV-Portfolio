import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Information Technology</h3>
              <p>
                August 2020 - Present
              </p>
              <p>
                National University - Bulacan
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Pinciple of GraphicsDesign</h3>
              <p>
                February 2023 - March 2023
              </p>
              <p>
              University of the Philippines Open University
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Information and Communication Technology</h3>
              <p>
              June 2018 - July 2020
              </p>
              <p>
              Carlos F. Gonzales High School 
              <p>San Rafael, Bulacan</p>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
