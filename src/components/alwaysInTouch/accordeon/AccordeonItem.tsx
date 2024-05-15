import React from "react";
import Typography from "../../shared/typography/Typography";
import styles from "./AccordeonItem.module.scss";

interface AccordionItemProps {
  index: number;
  activeIndex: number | null;
  question: string;
  answer: string;
  handleToggle: (index: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  activeIndex,
  question,
  answer,
  handleToggle,
}) => {
  const isActive = index === activeIndex;

  return (
    <div
      className={`${styles.container} ${
        isActive ? styles.containerIsActive : ""
      }`}
    >
      <div
        className={`${styles.i} ${isActive ? styles.iIsActive : ""}`}
        onClick={() => handleToggle(index)}
      ></div>
      <Typography
        variant={isActive ? "h3" : "p1"}
        className={styles.question}
        onCLick={() => handleToggle(index)}
      >
        {question}
      </Typography>
      <Typography
        variant="p1"
        className={`${styles.answer} ${isActive ? styles.answerIsActive : ""}`}
      >
        {answer}
      </Typography>
    </div>
  );
};

export default AccordionItem;
