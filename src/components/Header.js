import React from "react";
import styles from "../App.module.css";

export default function Header() {
  return (
    <div className={styles.headerBox}>
      {" "}
      <h2 className={styles.header}>Expense tacker</h2>
    </div>
  );
}
