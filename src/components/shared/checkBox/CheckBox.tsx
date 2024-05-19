import { useId } from "react";
import Typography from "../typography/Typography";
import styles from "./CheckBox.module.scss";

interface ICheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  isError?: boolean;
}
const CheckBox = (props: ICheckBoxProps) => {
  const id = useId();
  return (
    <div className={`${styles.container} ${props.className}`}>
      <input
        type="checkbox"
        checked={props.checked}
        id={`checkbox_${id}`}
        onChange={props.onChange}
        className={`${styles.checkBox} ${
          props.isError && !props.checked && styles.checkBoxIsError
        }`}
      />
      <label htmlFor={`checkbox_${id}`}>
        <Typography variant="p3" className={styles.label}>
          {props.label}
        </Typography>
      </label>
    </div>
  );
};

export default CheckBox;
