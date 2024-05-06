import styles from "./RoundedButton.module.scss";

interface RoundedButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  selected?: boolean;
}

const RoundedButton = (props: RoundedButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={
        props.selected
          ? `${styles.roundedButton} ${styles.selected}`
          : styles.roundedButton
      }
    >
      {props.children}
    </button>
  );
};

export default RoundedButton;
