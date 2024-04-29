import styles from "./MainSection.module.scss";
import SignUpButton from "./sigUpButton/SignUpButton";

const Home = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.h1}>Студия йоги и пилатеса</h1>
        <div style={{ display: "flex", marginTop: "56px" }}>
          <span style={{ width: "276px", fontSize: "16px", marginTop: "5px" }}>
            Здесь мы поможем вам держать тело в тонусе, а душу - в гармонии.
          </span>
          <SignUpButton />
        </div>

        <div style={{ display: "flex", alignItems: "end", gap: "19px" }}>
          <img src="./assets/picture(1).png" alt="..." />
          <div>
            <div>
              <span style={{ fontSize: "36px", fontFamily: "NewYorkerC 400" }}>
                6
              </span>
              <span> направлений в одном абонементе</span>
            </div>
            <div>
              <span style={{ fontSize: "36px", fontFamily: "Raleway 400" }}>
                4
              </span>
              <span> тренера с большим практическим опытом </span>
            </div>
            <div>
              <span style={{ fontSize: "36px", fontFamily: "NewYorkerC 400" }}>
                2
              </span>
              <span> просторных зала для занятий </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <img src="./assets/picture.png" alt="..." />
      </div>
    </section>
  );
};

export default Home;
