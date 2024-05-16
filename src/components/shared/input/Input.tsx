import styles from "./Input.module.scss";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
}

const Input = (props: IInputProps) => {
  return (
    <div>
      <input
        className={`${styles.container} ${props.className}`}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
