import React from "react";
import styles from "../App.module.css";

export default function Display() {
  return (
    <>
      <div className={styles.displayBox}>
        <div>
          <h4>income</h4>
          <p>$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p>$0.00</p>
        </div>
      </div>
    </>
  );
}
