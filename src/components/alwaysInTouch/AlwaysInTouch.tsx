import style from "./AlwaysInTouch.module.scss";
import Accordeon from "./accordeon/Accordeon";

const AlwaysInTouch = () => {
  return (
    <section className={style.container}>
      <div>
        <Accordeon />
      </div>
      <div className={style.imgContainer}></div>
    </section>
  );
};

export default AlwaysInTouch;
