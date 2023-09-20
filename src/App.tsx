import Form from "./components/Form/Form";
import List from "./components/List";
import styles from "./styles/app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Form />
      <hr style={{ margin: "20px" }} />
      <List />
    </div>
  );
}

export default App;
