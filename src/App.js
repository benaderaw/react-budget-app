import styles from "../src/App.module.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Display from "./components/Display";
import History from "./components/History";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <Display />
      <History />
      <Form />
    </div>
  );
}

export default App;
