import { useState, useEffect } from "react";
import styles from "./input.module.scss";

const Input = (props: any) => {
  // const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {});
  return <input className={styles.input} {...props} />;
};

export default Input;
