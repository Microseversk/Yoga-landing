import RoundedButton from "../shared/roundedButton/RoundedButton";
import Cost from "./Cost/Cost";
import styles from "./TrainingCost.module.scss";
const TrainingCost = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.h}>СТОИМОСТЬ НАШИХ ТРЕНИРОВОК</h2>
      <div className={styles.textContent}>
        <p>
          После покупки абонемента его необходимо{" "}
          <b>активировать в течении трех месяцев</b> с момента приобретения
          (дата активации - первое занятие).
        </p>
        <p>Первая тренировка для новых клиентов бесплатная</p>
      </div>
      <div className={styles.costContainer}>
        <div className={styles.leftContent}>
          <RoundedButton className={styles.btn}>ЗАПИСАТЬСЯ</RoundedButton>
        </div>
        <div className={styles.rightContent}>
          <Cost monthTrainingsPrice={1000} monthTrainings={3} timeCost={400} />
          <Cost monthTrainingsPrice={2000} monthTrainings={8} timeCost={700} />
          <Cost monthTrainingsPrice={3000} monthTrainings={2} timeCost={250} />
          <Cost monthTrainingsPrice={4000} />
        </div>
      </div>
    </section>
  );
};

export default TrainingCost;
