import { useMediaQuery } from "@uidotdev/usehooks";
import { useActions } from "../../hooks/redux";
import Button from "../Button";
import Input from "../Input";

import styles from "./form.module.scss";

const Form = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 500px)");
  const { addUser, searchUser, addAllUsers } = useActions();

  return (
    <div className={styles.form}>
      <Button
        onClick={() => {
          const str = prompt();
          if (str) {
            return addUser(str);
          }
          alert("You have not entered any data.");
        }}
      >
        {isSmallDevice ? "+" : "Add Item"}
      </Button>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          e.target.value ? searchUser(e.target.value) : addAllUsers()
        }
        type="text"
        placeholder="Client search..."
      />
    </div>
  );
};

export default Form;
