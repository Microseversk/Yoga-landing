import styles from "./DirectionsInSub.module.scss";
import RoundedButton from "./roundedButton/RoundedButton";

const DirectionsInSub = () => {
  return (
    <section className={styles.container}>
      <div className={styles.topContent}>
        <h2 className={styles.h}>Все направления в одном абонементе</h2>
        <p className={styles.p}>
          Не определились с направлением? Мы подскажем!
        </p>
      </div>
      <div>
        <RoundedButton>Все направления</RoundedButton>
        <RoundedButton>Все направления</RoundedButton>
      </div>
    </section>
  );
};

export default DirectionsInSub;
