import styles from "./Cost.module.scss";

interface ICostProps {
  monthTrainings?: number;
  monthTrainingsPrice?: number;
  timeCost?: number;
  className?: string;
  base?: number;
}

const Cost = ({
  monthTrainings,
  monthTrainingsPrice,
  timeCost,
  base,
  className,
}: ICostProps) => {
  if (base) {
    return (
      <div className={`${styles.containerBase} ${className}`}>
        <div className={styles.baseTop}>{base}₽</div>
        <div className={styles.dividerBase}></div>
        <div className={styles.baseBottom}>
          <div>1</div>
          <div>занятие</div>
        </div>
      </div>
    );
  }
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
              <span style={{ display: "none" }}></span>
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
