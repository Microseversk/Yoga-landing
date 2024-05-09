import styles from "./Cost.module.scss";

interface ICostProps {
  monthTrainings?: number;
  monthTrainingsPrice: number;
  timeCost?: number;
  className?: string;
}

const Cost = ({
  monthTrainings,
  monthTrainingsPrice,
  timeCost,
  className,
}: ICostProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.monthCost}>
        <div className={styles.leftTopContent}>
          {monthTrainings ? (
            <>
              <span>{monthTrainings}</span>
              <span>занятия в месяц</span>
            </>
          ) : (
            <>
              <span></span>
              <span style={{ width: "78px" }}>безлимит на месяц</span>
            </>
          )}
        </div>
        <div className={styles.rightTopContent}>
          <span>{monthTrainingsPrice}</span>
          <span>₽</span>
        </div>
      </div>
      <div className={styles.timeCost}>
        <div className={styles.leftBottomContent}>
          <span>{1}</span>
          <span>занятие</span>
        </div>
        <div className={styles.rightBottomContent}>
          {timeCost ? (
            <>
              <span>{timeCost}</span>
              <span>₽</span>
            </>
          ) : (
            <>
              <span
                style={{
                  fontSize: "16px",
                  lineHeight: "20.8px",
                  width: "135px",
                }}
              >
                зависит от вашей активности
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cost;
