import React, { useEffect } from "react";
import styles from "../App.module.css";

export default function Balance({ list, balance, setBalance }) {
  let value = [];

  list.map((el) => {
    return value.push(+el.amount);
  });

  const total = value.reduce((p, c) => {
    p = p + c;
    return p;
  }, 0);

  useEffect(() => {
    setBalance(total);
  }, [list, balance, setBalance, total]);

  return (
    <div className={styles.balanceBox}>
      <h4 className={styles.balanceText}>Your balance</h4>
      <h1 className={styles.balance}>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(balance)}
      </h1>
    </div>
  );
}
