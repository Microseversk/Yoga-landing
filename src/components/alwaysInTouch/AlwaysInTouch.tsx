import Typography from "../shared/typography/Typography";
import style from "./AlwaysInTouch.module.scss";
import Accordeon from "./accordeon/Accordeon";

const AlwaysInTouch = () => {
  return (
    <section className={style.container} id="FAQ">
      <Typography variant="h2" className={style.h}>
        Всегда на связи <br />c клиентом{" "}
      </Typography>
      <div className={style.accordeon}>
        <Accordeon />
      </div>
      <div className={style.imgContainer}></div>
    </section>
  );
};

export default AlwaysInTouch;
