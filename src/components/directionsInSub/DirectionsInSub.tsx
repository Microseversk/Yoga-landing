import { useEffect, useState } from "react";
import useGetDirections from "../../hooks/useGetDirections";
import { Direction } from "../../services/directions";
import Slider from "../shared/slider/Slider";
import styles from "./DirectionsInSub.module.scss";
import RoundedButton from "./roundedButton/RoundedButton";

const DirectionsInSub = () => {
  const { directions, isLoading } = useGetDirections();
  const [currentDirection, setCurrentDirection] = useState<Direction | null>();

  useEffect(() => {
    if (!isLoading && directions.length > 0) {
      setCurrentDirection(directions[0]);
    }
  }, [isLoading, directions]);

  if (isLoading) {
    console.log("Loading");
    return <div>Loading...</div>;
  }

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
                onClick={() => {
                  setCurrentDirection(direction);
                }}
                key={direction.id}
                selected={direction.id == currentDirection?.id}
              >
                {direction.title}
              </RoundedButton>
            );
          })}
        </div>

        <div
          className={styles.imgContainer}
          style={{
            backgroundImage: `url(${currentDirection?.image})`,
          }}
        ></div>
        <div className={styles.infoContainer}>
          {currentDirection?.title}
          {currentDirection?.duration}
          {currentDirection?.description}
          <Slider
            buttonPosition={"left"}
            onPrev={() => {
              setCurrentDirection(
                directions[
                  (currentDirection?.id!! - 2 + directions.length) %
                    directions.length
                ]
              );
            }}
            onNext={() => {
              setCurrentDirection(
                directions[currentDirection?.id!! % directions.length]
              );
            }}
            progress={(currentDirection?.id!! * 100) / directions.length}
          />
        </div>
      </div>
    </section>
  );
};

export default DirectionsInSub;
