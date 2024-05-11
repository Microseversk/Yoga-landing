import { $api } from "../api/api";

export interface IPrice {
  monthTrainings?: number;
  monthTrainingsPrice?: number;
  timeCost?: number;
}

export interface ICost {
  base: number;
  price: IPrice[];
}

const getCost = async () => {
  return $api.get<ICost>("/cost");
};

export default getCost;
