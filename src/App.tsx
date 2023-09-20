import Form from "./components/Form/Form";
import List from "./components/List";
import styles from "./styles/app.module.scss";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Spinner from "./components/Spinner";
import { useTypeSelector } from "./hooks/redux";

function App() {
  const { error, loaded } = useTypeSelector((state) => state.userReducer);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = !loaded ? <Spinner /> : null;
  const content = !error || loaded ? <List /> : null;

  return (
    <div className={styles.app}>
      <Form />
      <hr style={{ margin: "20px" }} />
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

export default App;
