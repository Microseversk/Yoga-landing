import styles from "./SignUpButton.module.scss";

const SignUpButton = () => {
  return (
    <div className={styles.button}>
      <span style={{ color: "white" }}>ЗАПИСАТЬСЯ</span>
    </div>
  );
};

export default SignUpButton;
