import styles from "./Advantages.module.scss";

const Advantages = () => {
  return (
    <div className={styles.container}>
      <img src="./assets/woman.png" alt="..." />
      <div className={styles.advantages}>
        <div>
          <div className={styles.accentNumber}>6</div>
          <div> направлений в одном абонементе</div>
        </div>
        <div>
          <div className={styles.accentNumber}>4</div>
          <div> тренера с большим практическим опытом </div>
        </div>
        <div>
          <div className={styles.accentNumber}>2</div>
          <div> просторных зала для занятий </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
