import styles from "./DirectionsInSub.module.scss";
import BottomContent from "./bottomContent/BottomContent";
import TopContent from "./topContent/TopContent";

const DirectionsInSub = () => {
  return (
    <section className={styles.container}>
      <TopContent />
      <BottomContent />
    </section>
  );
};

export default DirectionsInSub;
