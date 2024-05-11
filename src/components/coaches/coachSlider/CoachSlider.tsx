import { useState } from "react";
import useCoaches from "../../../hooks/useCoaches";
import Slider from "../../shared/slider/Slider";
import Typography from "../../shared/typography/Typography";
import styles from "./CoachSlider.module.scss";

const CoachSlider = () => {
  const { coaches } = useCoaches();
  const [currentCoach, setCurrentCoach] = useState(0);
  if (!coaches) return;
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div
          className={styles.cardImg}
          style={{ backgroundImage: `url(${coaches[currentCoach].image})` }}
        ></div>
        <div className={styles.cardText}>
          <Typography variant="h4">{coaches[currentCoach].name}</Typography>
          <Typography variant="p2">
            {coaches[currentCoach].description}
          </Typography>
        </div>
      </div>
      <div className={styles.otherCoaches}>
        <div className={styles.nextCoachCard}>
          <div
            className={styles.nextCoachImg}
            style={{
              backgroundImage: `url(${
                coaches[(currentCoach + 1) % coaches.length].image
              })`,
            }}
          ></div>
          <Typography variant="p1" className={styles.nextCoachText}>
            {coaches[(currentCoach + 1) % coaches.length].name}
          </Typography>
        </div>
        <div className={styles.nextCoachCard}>
          <div
            className={styles.nextCoachImg}
            style={{
              backgroundImage: `url(${
                coaches[(currentCoach + 2) % coaches.length].image
              })`,
            }}
          ></div>
          <Typography variant="p1" className={styles.nextCoachText}>
            {coaches[(currentCoach + 2) % coaches.length].name}
          </Typography>
        </div>
      </div>

      <Slider
        className={styles.slider}
        buttonPosition="left"
        onNext={() => {
          setCurrentCoach((currentCoach + 1) % coaches.length);
        }}
        onPrev={() => {
          setCurrentCoach((currentCoach - 1 + coaches.length) % coaches.length);
        }}
        progress={((currentCoach + 1) * 100) / coaches.length}
      />
    </div>
  );
};

export default CoachSlider;
