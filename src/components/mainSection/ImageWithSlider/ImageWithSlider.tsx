import { useState } from "react";
import styles from "./ImageWithSlider.module.scss";

const ImageWithSlider = () => {
  const [image, setImage] = useState(0);

  const handlePrevClick = () => {
    setImage((image - 1 + 3) % 3);
  };

  const handleNextClick = () => {
    setImage((image + 1) % 3);
  };

  return (
    <div>
      <div className={styles.img}>
        <img
          src={`./assets/imageWithSlider/woman_${image}.png`}
          width={"488px"}
          height={"604px"}
          alt="..."
        />
      </div>
      <div className={styles.sliderContainer}>
        <div>
          <span className={styles.currentImg}>{image + 1}</span>/3
        </div>
        <div className={` ${styles[`sliderProgress${image}`]}`}></div>
        <span className={styles.btnPrev} onClick={handlePrevClick} />
        <span className={styles.btnNext} onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default ImageWithSlider;
