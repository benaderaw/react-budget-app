import styles from "../App.module.css";

import React from "react";

export default function Transactions({ list }) {
  return (
    <div>
      {list.map((el) => (
        <div key={el.id} className={styles.transactionBox}>
          <h3 className={styles.transactionTitle}>{el.title}</h3>
          <h3 className={styles.transactionAmount}>{el.amount}</h3>
        </div>
      ))}
    </div>
  );
}
