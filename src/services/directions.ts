import { $api } from "../api/api";

export interface Direction {
  id: number;
  title: string;
  schedule: string[];
  duration: number;
  description: string;
  image: string;
}

const getDirections = async () => {
  return $api.get<Direction[]>("/directions");
};

export default getDirections;
