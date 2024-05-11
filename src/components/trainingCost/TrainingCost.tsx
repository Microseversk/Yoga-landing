import useCost from "../../hooks/useCost";
import RoundedButton from "../shared/roundedButton/RoundedButton";
import Typography from "../shared/typography/Typography";
import Cost from "./cost/Cost";
import styles from "./TrainingCost.module.scss";
const TrainingCost = () => {
  const { cost, isLoading } = useCost();
  console.log(cost?.price);
  if (isLoading) return <div>Loading...</div>;
  return (
    <section className={styles.container} id="cost">
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
        <RoundedButton className={styles.btn}>
          <Typography variant="button">ЗАПИСАТЬСЯ</Typography>
        </RoundedButton>
        <div className={styles.costBase}>
          <Cost base={cost?.base} />
        </div>
        {cost?.price.map((price, index) => {
          console.log(price);
          return (
            <Cost
              key={index}
              {...price}
              className={`${styles[`cost${index + 1}`]}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TrainingCost;
