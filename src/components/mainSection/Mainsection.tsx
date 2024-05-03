import ImageWithSlider from "./ImageWithSlider/ImageWithSlider";
import styles from "./MainSection.module.scss";
import Advantages from "./advantages/Advantages";
import SignUpButton from "./sigUpButton/SignUpButton";

const Home = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.h1}>Студия йоги и пилатеса</h1>

        <span className={styles.p}>
          Здесь мы поможем вам держать тело в тонусе, а душу - в гармонии.
        </span>
        <SignUpButton />
        <Advantages />
      </div>
      <ImageWithSlider />
    </section>
  );
};

export default Home;
