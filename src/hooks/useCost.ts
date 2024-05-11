import { useEffect, useState } from "react";
import getCost, { ICost } from "../services/cost";

const useCost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cost, setCost] = useState<ICost | null>(null);
  useEffect(() => {
    const fetchCost = async () => {
      setIsLoading(true);
      const cost = (await getCost()).data;
      setCost(cost);
      setIsLoading(false);
    };
    fetchCost();
  }, []);

  return { cost, isLoading };
};

export default useCost;
