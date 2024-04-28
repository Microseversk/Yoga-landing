import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Студия йоги и пилатеса</h1>
      <div className={styles.img}>
        <img src="./assets/picture.png" alt="..." />
      </div>
    </div>
  );
};

export default Home;
