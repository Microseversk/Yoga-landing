import styles from "./Slider.module.scss";

interface SliderProps {
  buttonPosition: "left" | "right";
  onPrev: () => void;
  onNext: () => void;
  progress: number;
}
const Slider = (props: SliderProps) => {
  return (
    <div className={styles.sliderContainer}>
      {props.buttonPosition === "right" && (
        <div className={styles.slider}>
          <span
            className={styles.progress}
            style={{ width: `${props.progress}%`, transition: "width 0.4s" }}
          ></span>
        </div>
      )}

      <button onClick={props.onPrev} className={styles.btn}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1574 5.00012L6.40031 9.75721C6.35094 9.80659 6.35094 9.88664 6.40031 9.93601L11.1574 14.6931"
            stroke="currentColor"
          />
        </svg>
      </button>
      <button onClick={props.onNext} className={styles.btn}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.84308 5.00024L13.6002 9.75734C13.6496 9.80671 13.6496 9.88676 13.6002 9.93614L8.84308 14.6932"
            stroke="currentColor"
          />
        </svg>
      </button>
      {props.buttonPosition === "left" && (
        <div className={styles.slider}>
          <span
            className={styles.progress}
            style={{ width: `${props.progress}%`, transition: "width 0.4s" }}
          ></span>
        </div>
      )}
    </div>
  );
};

export default Slider;
