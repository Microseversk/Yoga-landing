import { useState } from "react";
import useFeedback from "../../../hooks/useFeedback";
import Slider from "../../shared/slider/Slider";
import styles from "./FeedbackList.module.scss";
import FeedbackItem from "./feedbackItem/FeedbackItem";

const FeedbackList = () => {
  const { feedback } = useFeedback();
  const [activeFeedback, setActiveFeedback] = useState(0);
  if (!feedback) return;
  const prevIndex =
    activeFeedback === 0 ? feedback.length - 1 : activeFeedback - 1;
  const nextIndex =
    activeFeedback === feedback.length - 1 ? 0 : activeFeedback + 1;

  return (
    <div className={styles.container}>
      <div className={`${styles.f1}`}>
        <FeedbackItem
          {...feedback[activeFeedback]}
          isActive={true}
          onMoreClick={() => setActiveFeedback(feedback[activeFeedback].id - 1)}
        />
      </div>
      <div className={styles.f2}>
        <FeedbackItem
          {...feedback[(activeFeedback + 1) % feedback.length]}
          isActive={false}
          onMoreClick={() =>
            setActiveFeedback(
              feedback[(activeFeedback + 1) % feedback.length].id - 1
            )
          }
        />
      </div>
      <div className={styles.f3}>
        <FeedbackItem
          {...feedback[(activeFeedback + 2) % feedback.length]}
          isActive={false}
          onMoreClick={() =>
            setActiveFeedback(
              feedback[(activeFeedback + 2) % feedback.length].id - 1
            )
          }
        />
      </div>
      <Slider
        className={styles.slider}
        buttonPosition="left"
        onPrev={() => {
          setActiveFeedback((prev) =>
            prev === 0 ? feedback.length - 1 : prev - 1
          );
        }}
        onNext={() => {
          setActiveFeedback((prev) =>
            prev === feedback.length - 1 ? 0 : prev + 1
          );
        }}
        progress={((activeFeedback + 1) * 100) / feedback.length}
      />
    </div>
  );
};

export default FeedbackList;
