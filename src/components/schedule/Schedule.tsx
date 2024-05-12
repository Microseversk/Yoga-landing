import Typography from "../shared/typography/Typography";
import styles from "./Schedule.module.scss";
import ScheduleList from "./ScheduleList/ScheduleList";
const Schedule = () => {
  return (
    <section className={styles.container} id="schedule">
      <Typography variant="h2" className={styles.h}>
        Найдите свою практику В нашем расписании
      </Typography>
      <Typography variant="p2" className={styles.p}>
        Приглашаем на первое пробное занятие <b>БЕСПЛАТНО!</b> Не упустите
        возможность попробовать что‑то новое и полезное для вашего здоровья!
      </Typography>
      <div className={styles.schedule}>
        <ScheduleList />
      </div>
      <div className={styles.img}></div>
    </section>
  );
};

export default Schedule;
