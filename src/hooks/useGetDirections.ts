import { useEffect, useState } from "react";
import getDirections, { Direction } from "../services/directions";

const useGetDirections = () => {
  const [directions, setDirections] = useState<Direction[]>([]);
  useEffect(() => {
    const fetchDirections = async () => {
      const directions = (await getDirections()).data;
      setDirections(directions);
    };
    fetchDirections();
  }, []);

  return { directions };
};

export default useGetDirections;
