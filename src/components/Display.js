import React from "react";
import styles from "../App.module.css";

export default function Display({ list }) {
  let value = [];

  list.map((el) => {
    return value.push(+el.amount);
  });

  const income = value
    .filter((el) => el > 0)
    .reduce((p, c) => {
      p = p + c;
      return p;
    }, 0);

  const expense = value
    .filter((el) => el < 0)
    .reduce((p, c) => {
      p = p + c;
      return p;
    }, 0);

  return (
    <div className={styles.displayBox}>
      <div className={styles.incomeBox}>
        <h4 className={styles.incomeText}>Income</h4>
        <p className={styles.income}>${income}</p>
      </div>
      <div className={styles.expenseBox}>
        <h4 className={styles.expenseText}>Expense</h4>
        <p className={styles.expense}>${expense}</p>
      </div>
    </div>
  );
}
