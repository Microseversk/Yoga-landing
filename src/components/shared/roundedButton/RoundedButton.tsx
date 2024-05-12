import styles from "./RoundedButton.module.scss";

interface RoundedButtonProps {
  id?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  selected?: boolean;
}

const RoundedButton = (props: RoundedButtonProps) => {
  return (
    <button
      number={props.id}
      onClick={props.onClick}
      className={
        props.selected
          ? `${styles.roundedButton} ${styles.selected} ${props.className}`
          : `${styles.roundedButton} ${props.className}`
      }
    >
      {props.children}
    </button>
  );
};

export default RoundedButton;
