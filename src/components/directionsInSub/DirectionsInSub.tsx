import { useEffect, useRef, useState } from "react";
import useGetDirections from "../../hooks/useGetDirections";
import { Direction } from "../../services/directions";
import RoundedButton from "../shared/roundedButton/RoundedButton";
import Slider from "../shared/slider/Slider";
import styles from "./DirectionsInSub.module.scss";

const DirectionsInSub = () => {
  const { directions, isLoading } = useGetDirections();
  const [currentDirection, setCurrentDirection] = useState<Direction | null>();
  const btnsContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isLoading && directions.length > 0) {
      setCurrentDirection(directions[0]);
    }
  }, [isLoading, directions]);

  if (isLoading) {
    console.log("Loading");
    return <div>Loading...</div>;
  }

  const onPrevClick = () => {
    setCurrentDirection(
      directions[
        (currentDirection?.id!! - 2 + directions.length) % directions.length
      ]
    );
    btnsContainer.current?.scrollTo({
      left:
        currentDirection?.id!! == 1
          ? btnsContainer?.current!!.scrollLeft + 1000000
          : btnsContainer?.current!!.scrollLeft - 100,
      behavior: "smooth",
    });
  };

  const onNextClick = () => {
    setCurrentDirection(directions[currentDirection?.id!! % directions.length]);
    console.log(currentDirection?.id!! == directions.length);
    btnsContainer.current?.scrollTo({
      left:
        currentDirection?.id!! == directions.length
          ? btnsContainer?.current!!.scrollLeft - 1000000
          : btnsContainer?.current!!.scrollLeft + 100,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.topContent}>
        <h2 className={styles.h}>Все направления в одном абонементе</h2>
        <p className={styles.p}>
          Не определились с направлением? Мы подскажем!
        </p>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.btnsContainer} ref={btnsContainer}>
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
          <h3 className={styles.title}>{currentDirection?.title}</h3>
          <div>
            <p className={styles.schedule}>
              <img src="./assets/calendar.svg" alt="..." />
              <p>Проходит по: {currentDirection?.schedule.join(", ")}</p>
            </p>
            <p className={styles.duration}>
              <img src="./assets/timer.svg" alt="..." />
              Длительность: {currentDirection?.duration} мин
            </p>
          </div>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                currentDirection?.description.replace("\n", "<br><br>") || "",
            }}
          ></p>
          <div className={styles.sliderContainer}>
            <Slider
              buttonPosition={"left"}
              onPrev={onPrevClick}
              onNext={onNextClick}
              progress={(currentDirection?.id!! * 100) / directions.length}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectionsInSub;
