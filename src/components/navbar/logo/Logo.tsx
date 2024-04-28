import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <a href="#" className={styles.container}>
      <img src="/assets/logo.svg" alt="logo" />
      <span>BALANCE</span>
    </a>
  );
};

export default Logo;
