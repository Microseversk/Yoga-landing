import styles from "./Button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "buttom" | "dirs" | "feedback" | "sliderLeft" | "sliderRight";
}

const Button = ({ className, ...props }: IButtonProps) => {
  return (
    <button className={`${styles[`${props.variant}`]} ${className}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
