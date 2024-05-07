import styles from "./TopContent.module.scss";

const TopContent = () => {
  return (
    <div className={styles.topContent}>
      <h2 className={styles.h}>Все направления в одном абонементе</h2>
      <p className={styles.p}>Не определились с направлением? Мы подскажем!</p>
    </div>
  );
};

export default TopContent;
