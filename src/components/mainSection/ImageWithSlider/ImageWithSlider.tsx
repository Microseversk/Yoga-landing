import { useState } from "react";
import Slider from "../../shared/slider/Slider";
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
      <img
        className={styles.img}
        src={`./assets/imageWithSlider/woman_${image}.png`}
        alt="..."
      />

      <div className={styles.sliderContainer}>
        <Slider
          buttonPostion={"right"}
          onPrev={handlePrevClick}
          onNext={handleNextClick}
        />
      </div>
    </div>
  );
};

export default ImageWithSlider;
