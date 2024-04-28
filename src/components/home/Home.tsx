import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1}>Студия йоги и пилатеса</h1>
        <div style={{ display: "flex", marginTop: "56px" }}>
          <span style={{ width: "276px", fontSize: "16px", marginTop: "5px" }}>
            Здесь мы поможем вам держать тело в тонусе, а душу - в гармонии.
          </span>
          <div>
            <div
              style={{
                width: "155px",
                height: "155px",
                backgroundColor: "#789776",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                marginTop: "61px",
                marginLeft: "150px",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "white" }}>ЗАПИСАТЬСЯ</span>
            </div>
          </div>
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
    </div>
  );
};

export default Home;
