import FeedbackSVG from "../../../shared/svg/FeedbackSVG";
import Typography from "../../../shared/typography/Typography";
import styles from "./FeedbackItem.module.scss";

export interface IFeedbackItemProps {
  id: number;
  name: string;
  text: string;
  date: string;
  isActive: boolean;
  className?: string;
  onMoreClick?: () => void;
}

const FeedbackItem = ({
  id,
  isActive,
  name,
  text,
  date,
  onMoreClick,
  className,
}: IFeedbackItemProps) => {
  return (
    <div
      className={`${styles.container} ${
        isActive ? styles.containerIsActive : ""
      } ${className} `}
    >
      <div
        className={`${styles.imgContainer} ${
          isActive ? styles.imgContainerIsActive : ""
        }`}
      >
        <FeedbackSVG number={id - 1 || 3} className={styles.svg} />
      </div>
      <Typography
        variant={isActive ? "h4" : "p2"}
        className={`${styles.name} ${isActive ? styles.nameIsActive : ""}`}
      >
        {name}
      </Typography>
      <div
        className={`${styles.divider} ${
          isActive ? styles.dividerIsActive : ""
        }`}
      ></div>
      <Typography
        variant="p2"
        className={`${styles.text} ${isActive ? styles.textIsActive : ""}`}
      >
        {text}
      </Typography>
      <Typography className={styles.more} onCLick={onMoreClick}>
        Подробнее
      </Typography>
      <Typography className={styles.date}>{date}</Typography>
    </div>
  );
};

export default FeedbackItem;
