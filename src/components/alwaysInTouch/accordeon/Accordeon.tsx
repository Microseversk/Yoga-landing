import { useState } from "react";
import styles from "./Accordeon.module.scss";
import AccordionItem from "./AccordeonItem";

interface AccordionData {
  question: string;
  answer: string;
}

const data: AccordionData[] = [
  {
    question: "Как записаться на занятия йогой?",
    answer:
      "Вы можете записаться на занятия через наш сайт или по телефону. Так же вы можете прийти в наш центр и записаться на ресепшене.",
  },
  {
    question: "Нужно ли покупать коврик для занятий и другой инвентарь?",
    answer:
      "Нет, вы можете воспользоваться нашим инвентарем, который предоставляется в центре.",
  },
  {
    question: "Как записаться на занятия йогой?",
    answer:
      "Вы можете записаться на занятия через наш сайт или по телефону. Так же вы можете прийти в наш центр и записаться на ресепшене.",
  },
  {
    question: "Нужно ли покупать коврик для занятий и другой инвентарь? ",
    answer:
      "Нет, вы можете воспользоваться нашим инвентарем, который предоставляется в центре.",
  },
  {
    question: "Нужно ли покупать коврик для занятий и другой инвентарь? ",
    answer:
      "Нет, вы можете воспользоваться нашим инвентарем, который предоставляется в центре.",
  },
];

const Accordeon = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className={styles.accordion}>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          activeIndex={activeIndex}
          question={item.question}
          answer={item.answer}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordeon;
