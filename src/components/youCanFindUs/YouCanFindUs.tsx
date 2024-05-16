import Button from "../shared/button/Button";
import CheckBox from "../shared/checkBox/CheckBox";
import Input from "../shared/input/Input";
import ContactsSvg from "../shared/svg/ContactsSVG";
import Typography from "../shared/typography/Typography";
import styles from "./YouCanFindUs.module.scss";

const YouCanFindUs = () => {
  return (
    <section className={styles.container}>
      <Typography variant="h2" className={styles.h}>
        НАС МОЖНО НАЙТИ
      </Typography>
      <Typography className={styles.p}>Свяжитесь с нами</Typography>
      <Input placeholder="Имя" type="name" className={styles.inputName} />
      <Input
        placeholder="Номер телефона"
        type="phone"
        className={styles.inputPhone}
      />
      <CheckBox
        label="принимаю условия политики конфиденциальности"
        className={styles.checkBox}
      />
      <Button variant="feedback" className={styles.btn}>
        <Typography variant="button">ОТПРАВИТЬ</Typography>
      </Button>
      <div className={styles.icons}>
        <div>
          <ContactsSvg variant={"vk"} />
        </div>
        <div>
          <ContactsSvg variant={"wa"} />
        </div>
        <div>
          <ContactsSvg variant={"tg"} />
        </div>
      </div>
    </section>
  );
};

export default YouCanFindUs;
