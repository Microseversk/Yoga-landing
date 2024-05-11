import { useEffect, useState } from "react";
import getCoaches, { ICoach } from "../services/coaches";

const useCoaches = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [coaches, setCoaches] = useState<ICoach[] | null>(null);
  useEffect(() => {
    const fetchCoaches = async () => {
      setIsLoading(true);
      const coaches = (await getCoaches()).data;
      setCoaches(coaches);
      setIsLoading(false);
    };
    fetchCoaches();
  }, []);

  return { coaches, isLoading };
};

export default useCoaches;
