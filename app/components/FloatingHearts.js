import React from "react";
import styles from "./FloatingHearts.module.css";

const FloatingHearts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.heart} ${styles.x1}`}></div>
      <div className={`${styles.heart} ${styles.x2}`}></div>
      <div className={`${styles.heart} ${styles.x3}`}></div>
      <div className={`${styles.heart} ${styles.x4}`}></div>
      <div className={`${styles.heart} ${styles.x5}`}></div>
      <div className={`${styles.heart} ${styles.x6}`}></div>
    </div>
  );
};

export default FloatingHearts;
