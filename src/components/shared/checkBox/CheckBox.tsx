import Typography from "../typography/Typography";
import styles from "./CheckBox.module.scss";

interface ICheckBoxProps {
  className?: string;
  label?: string;
}
const CheckBox = (props: ICheckBoxProps) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      <input type="checkbox" id="checkbox" className={styles.checkBox} />
      <label htmlFor="checkbox">
        <Typography variant="p3" className={styles.label}>
          {props.label}
        </Typography>
      </label>
    </div>
  );
};

export default CheckBox;
