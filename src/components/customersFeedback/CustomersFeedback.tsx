import Button from "../shared/button/Button";
import Typography from "../shared/typography/Typography";
import styles from "./CustomersFeedback.module.scss";
import FeedbackList from "./feedbackList/FeedbackList";
const CustomersFeedback = () => {
  return (
    <section className={styles.container} id="feedback">
      <Typography variant="h2" className={styles.h}>
        Наши довольные клиенты
      </Typography>
      <Button variant="feedback" className={styles.btn}>
        <Typography variant="button">Оставить отзыв</Typography>
      </Button>
      <div className={styles.feedback}>
        <FeedbackList />
      </div>
    </section>
  );
};

export default CustomersFeedback;
