import ContactsSvg from "../shared/svg/ContactsSVG";
import LogoSVG from "../shared/svg/LogoSVG";
import Typography from "../shared/typography/Typography";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <Typography>Адрес: г. Томск, Варшавское шоссе 26</Typography>
        <Typography>Тел: +7 (924) 444-77-77</Typography>
        <Typography>Email: ebalans@maiil.ru</Typography>
      </div>
      <div className={styles.nav}>
        <a href="#header">
          <Typography>Главная</Typography>
        </a>
        <a href="#dirs">
          <Typography>Направления</Typography>
        </a>
        <a href="#cost">
          <Typography>Прайс</Typography>
        </a>
        <a href="#schedule">
          <Typography>Расписание</Typography>
        </a>
        <a href="#coaches">
          <Typography>Эксперты</Typography>
        </a>
        <a href="#feedback">
          <Typography>Отзывы</Typography>
        </a>
        <a href="#FAQ">
          <Typography>FAQ</Typography>
        </a>
        <a href="#find">
          <Typography>Контакты</Typography>
        </a>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <ContactsSvg variant={"vk"} />
        </div>
        <div className={styles.icon}>
          <ContactsSvg variant={"wa"} />
        </div>
        <div className={styles.icon}>
          <ContactsSvg variant={"tg"} />
        </div>
      </div>
      <Typography variant="p3" className={styles.personal}>
        Согласие на обработку персональных данных
      </Typography>
      <div className={styles.logo}>
        <LogoSVG />
        <span>BALANCE</span>
      </div>
      <Typography variant="p3" className={styles.policy}>
        Политика конфиденциальности
      </Typography>
    </footer>
  );
};

export default Footer;
