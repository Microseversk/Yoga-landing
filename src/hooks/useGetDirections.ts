import { useEffect, useState } from "react";
import getDirections, { Direction } from "../services/directions";

const useGetDirections = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [directions, setDirections] = useState<Direction[]>([]);
  useEffect(() => {
    const fetchDirections = async () => {
      setIsLoading(true);
      const directions = (await getDirections()).data;
      setDirections(directions);
      setIsLoading(false);
    };
    fetchDirections();
  }, []);

  return { directions, isLoading };
};

export default useGetDirections;
