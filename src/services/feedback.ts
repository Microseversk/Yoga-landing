import { $api } from "../api/api";

export interface Feedback {
  id: number;
  name: string;
  text: string;
  date: string;
}

const getFeedback = async () => {
  return $api.get<Feedback[]>("/feedback");
};

export default getFeedback;
