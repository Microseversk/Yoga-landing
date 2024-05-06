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
      id={props.id}
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
