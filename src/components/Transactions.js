import styles from "../App.module.css";

import React from "react";

export default function Transactions({ list }) {
  const ggg = (vvv) =>
    vvv.amount > 0 ? styles.transactionBox : styles.transactionBox02;

  return (
    <div>
      {list.map((el) => (
        <div key={el.id} className={ggg(el)}>
          <h3 className={styles.transactionTitle}>{el.title}</h3>
          <h3 className={styles.transactionAmount}>
            {el.amount > 0
              ? "+" + new Intl.NumberFormat().format(el.amount)
              : new Intl.NumberFormat().format(el.amount).toString()}
          </h3>
        </div>
      ))}
    </div>
  );
}
