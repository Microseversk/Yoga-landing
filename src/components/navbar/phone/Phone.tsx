import styles from "./Phone.module.scss";

const Phone = () => {
  return (
    <div className={styles.container}>
      <img src="./assets/call.svg" alt="call" />
      <div>+7 (924) 444-77-77</div>
    </div>
  );
};

export default Phone;
