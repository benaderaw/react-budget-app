import styles from "../App.module.css";

import React from "react";
import Transactions from "./Transactions";

export default function History({ list }) {
  return (
    <div className={styles.historyBox}>
      <h4 className={styles.historyText}>History</h4>
      <Transactions list={list} />
    </div>
  );
}
