import styles from "./Schedule.module.scss";
const Schedule = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.h}>Найдите свою практику В нашем расписании</h2>
      <p>
        Приглашаем на первое пробное занятие <b>БЕСПЛАТНО!</b> Не упустите
        возможность попробовать что‑то новое и полезное для вашего здоровья!
      </p>
    </section>
  );
};

export default Schedule;
