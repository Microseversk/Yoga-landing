import { useEffect, useState } from "react";
import getFeedback, { Feedback } from "../services/feedback";

const useFeedback = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback[] | null>(null);
  useEffect(() => {
    const fetchFeedback = async () => {
      setIsLoading(true);
      const feedback = (await getFeedback()).data;
      setFeedback(feedback);
      setIsLoading(false);
    };
    fetchFeedback();
  }, []);

  return { feedback, isLoading };
};

export default useFeedback;
