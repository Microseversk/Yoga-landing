import styles from "./Input.module.scss";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  error?: string;
}

const Input = (props: IInputProps) => {
  return (
    <div>
      <input
        {...props}
        className={`${styles.container} ${props.className}`}
        placeholder={props.placeholder}
        type={props.type}
      />
      <span className={styles.error}>{props.error}</span>
    </div>
  );
};

export default Input;
