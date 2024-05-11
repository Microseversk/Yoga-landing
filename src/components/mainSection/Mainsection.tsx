import Button from "../shared/button/Button";
import Typography from "../shared/typography/Typography";
import ImageWithSlider from "./ImageWithSlider/ImageWithSlider";
import styles from "./MainSection.module.scss";
import Advantages from "./advantages/Advantages";

const Home = () => {
  return (
    <section className={styles.container}>
      <Typography variant="h1" className={styles.h1}>
        Студия йоги и пилатеса
      </Typography>

      <Typography variant="p1" className={styles.p}>
        Здесь мы поможем вам держать тело в тонусе, а душу - в гармонии.
      </Typography>
      <Button variant="buttom" className={styles.btnContainer}>
        <Typography variant="button">ЗАПИСАТЬСЯ</Typography>
      </Button>
      <div className={styles.advContainer}>
        <Advantages />
      </div>
      <div className={styles.imgContainer}>
        <ImageWithSlider />
      </div>
    </section>
  );
};

export default Home;
