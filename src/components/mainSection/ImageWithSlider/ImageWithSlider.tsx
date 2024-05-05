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
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(./assets/imageWithSlider/woman_${image}.png)`,
        }}
      ></div>

      <div className={styles.sliderContainer}>
        <span>{image + 1}/3</span>
        <Slider
          buttonPosition={"right"}
          onPrev={handlePrevClick}
          onNext={handleNextClick}
          progress={((image + 1) * 100) / 3}
        />
      </div>
    </div>
  );
};

export default ImageWithSlider;
