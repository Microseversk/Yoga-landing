import styles from "./RoundedButton.module.scss";

interface RoundedButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const RoundedButton = (props: RoundedButtonProps) => {
  return <button className={styles.roundedButton}>{props.children}</button>;
};

export default RoundedButton;
