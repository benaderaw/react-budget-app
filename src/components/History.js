import styles from "../App.module.css";

import React from "react";
import Transactions from "./Transactions";

export default function History() {
  return (
    <div className="historyBox">
      <h4>History</h4>
      <Transactions />
    </div>
  );
}
