import React, { useRef } from "react";
import styles from "../App.module.css";
import { nanoid } from "nanoid";

export default function Form({ details, setDetails, list, setList }) {
  const titleRef = useRef();
  const amountRef = useRef();

  const handelChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleAddTransaction = (e) => {
    //
    e.preventDefault();

    if (details.title === "" || details.amount === "") return;

    const detail = [...list];

    detail.push({ ...details, id: nanoid() });

    setList(detail);

    console.log(list);

    // clear input
    titleRef.current.value = "";
    amountRef.current.value = "";

    setDetails({
      title: "",
      amount: "",
    });
  };

  return (
    <div className={styles.formBox}>
      <h4 className={styles.formHeader}>add new transaction</h4>
      <form action="" onSubmit={handleAddTransaction}>
        <label htmlFor="" className={styles.formText}>
          text
        </label>
        <input
          className={styles.input}
          required
          ref={titleRef}
          name="title"
          type="text"
          placeholder="enter text..."
          onChange={handelChange}
        />

        <label htmlFor="" className={styles.formAmount}>
          amount
        </label>
        <p className={styles.formParagraph}>
          (negative - expense, positive-expense)
        </p>
        <input
          className={styles.input}
          required
          ref={amountRef}
          name="amount"
          type="text"
          placeholder="enter amount"
          onChange={handelChange}
        />

        <button type="submit" className={styles.addBtn}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}
