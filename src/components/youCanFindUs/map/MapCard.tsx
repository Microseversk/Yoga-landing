import ContactsSvg from "../../shared/svg/ContactsSVG";
import styles from "./MapCard.module.scss";

const MapCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            className={styles.phoneSVG}
            src="./assets/youCanFindUs/phone.svg"
          />
          <span className={styles.phone}>+7 (924) 444-77-77</span>
          <img
            className={styles.addressSVG}
            src="./assets/youCanFindUs/address.svg"
          />
          <span className={styles.address}>г. Томск, Варшавское шоссе 26</span>
          <img
            className={styles.emailSVG}
            src="./assets/youCanFindUs/mail.svg"
          />
          <span className={styles.email}>balans@maiil.ru</span>
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
        </div>
      </div>
    </>
  );
};

export default MapCard;
