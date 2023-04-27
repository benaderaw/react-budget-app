import styles from "../App.module.css";

import React from "react";

export default function Form() {
  return (
    <div>
      <h4>add new transaction</h4>
      <form action="">
        <label htmlFor="">
          text
          <input type="text" placeholder="enter text..." />
        </label>

        <label htmlFor="">
          amount
          <p>negative - expense, positive-expense</p>
          <input type="text" placeholder="enter amount" />
        </label>
      </form>
    </div>
  );
}
