import Header from "./components/Header";
import Balance from "./components/Balance";
import Display from "./components/Display";
import History from "./components/History";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [details, setDetails] = useState({
    title: "",
    amount: "",
  });
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <Header />
      <Balance list={list} balance={balance} setBalance={setBalance} />
      <Display list={list} />
      <History list={list} />
      <Form
        details={details}
        setDetails={setDetails}
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;
