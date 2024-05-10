import Typography from "../../shared/typography/Typography";
import styles from "./TopContent.module.scss";

const TopContent = () => {
  return (
    <div className={styles.topContent}>
      <Typography variant="h2" className={styles.h}>
        Все направления в одном абонементе
      </Typography>
      <Typography variant="h4" className={styles.p}>
        Не определились с направлением? Мы подскажем!
      </Typography>
    </div>
  );
};

export default TopContent;
