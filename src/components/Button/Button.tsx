import styles from "./button.module.scss";

const Button = (props: any) => {
  return (
    <button className={styles.btn} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
