import React from "react";
import styles from "./Contact.module.css";
import img1 from "../../images/contact/emailIcon.png"
import img2 from "../../images/contact/linkedinIcon.png"
import img3 from "../../images/contact/githubIcon.png"


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={img1} alt="Email icon" />
          <a href="mailto:vinayakmaheshwari57@gmail.com">melon-react@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={img2}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/melon_de">linkedin.com/melon</a>
        </li>
        <li className={styles.link}>
          <img src={img3} alt="Github icon" />
          <a href="https://www.github.com/melon_de">github.com/melon</a>
        </li>
      </ul>
    </footer>
  );
};