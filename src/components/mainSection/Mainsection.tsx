import ImageWithSlider from "./ImageWithSlider/ImageWithSlider";
import styles from "./MainSection.module.scss";
import Advantages from "./advantages/Advantages";
import SignUpButton from "./sigUpButton/SignUpButton";

const Home = () => {
  return (
    <section className={styles.container}>
      <div style={{ gridArea: "h1" }}>
        <h1 className={styles.h1}>Студия йоги и пилатеса</h1>
      </div>
      <div style={{ gridArea: "p" }}>
        <span className={styles.p}>
          Здесь мы поможем вам держать тело в тонусе, а душу - в гармонии.
        </span>
      </div>
      <div className={styles.btnContainer}>
        <SignUpButton />
      </div>
      <div style={{ gridArea: "adv" }}>
        <Advantages />
      </div>
      <div style={{ gridArea: "img", alignSelf: "center" }}>
        <ImageWithSlider />
      </div>
    </section>
  );
};

export default Home;
