import { useEffect, useState } from "react";
import useGetDirections from "../../hooks/useGetDirections";
import styles from "./DirectionsInSub.module.scss";
import RoundedButton from "./roundedButton/RoundedButton";

const DirectionsInSub = () => {
  const { directions } = useGetDirections();
  const [currentDirection, setCurrentDirection] = useState(1);

  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.topContent}>
        <h2 className={styles.h}>Все направления в одном абонементе</h2>
        <p className={styles.p}>
          Не определились с направлением? Мы подскажем!
        </p>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.btnsContainer}>
          {directions.map((direction) => {
            return (
              <RoundedButton
                onClick={() => setCurrentDirection(direction.id)}
                key={direction.id}
                selected={direction.id == currentDirection}
              >
                {direction.title}
              </RoundedButton>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DirectionsInSub;
