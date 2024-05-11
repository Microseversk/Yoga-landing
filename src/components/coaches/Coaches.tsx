import Typography from "../shared/typography/Typography";
import styles from "./Coaches.module.scss";
import CoachSlider from "./coachSlider/CoachSlider";

const Coaches = () => {
  return (
    <section className={styles.container}>
      <Typography variant="h2" className={styles.h}>
        Эксперты <br />в области тела и разума
      </Typography>
      <Typography variant="p2" className={styles.p}>
        Наши инструктора сочетают свои знания и опыт, чтобы создать эффективные
        и интересные занятия, которые помогут вам укрепить мышечный корсет,
        достичь гибкости, улучшить осанку и физическую форму.
      </Typography>
      <CoachSlider />
    </section>
  );
};

export default Coaches;
