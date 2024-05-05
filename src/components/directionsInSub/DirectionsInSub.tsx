import styles from "./DirectionsInSub.module.scss";

const DirectionsInSub = () => {
  return (
    <section className={styles.container}>
      <div className={styles.topContent}>
        <h2 className={styles.h}>Все направления в одном абонементе</h2>
        <p className={styles.p}>
          Не определились с направлением? Мы подскажем!
        </p>
      </div>
    </section>
  );
};

export default DirectionsInSub;
