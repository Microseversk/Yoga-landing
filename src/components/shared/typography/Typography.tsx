import styles from "./Typography.module.scss";

interface ITypographyProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "p1" | "p2" | "p3" | "button" | "menu";
  onCLick?: () => void;
}

const Typography = (props: ITypographyProps) => {
  return (
    <div
      onClick={props.onCLick}
      className={`${styles[`${props.variant}`]} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Typography;
