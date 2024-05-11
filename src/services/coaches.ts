import { $api } from "../api/api";

export interface ICoach {
  id: number;
  name: string;
  image: string;
  description: string;
}

const getCoaches = async () => {
  return $api.get<ICoach[]>("/coaches");
};

export default getCoaches;
