import { $api } from "../api/api";
import { Schedule } from "../components/schedule/ScheduleList/ScheduleList";

const getSchedule = async () => {
  return $api.get<Schedule[]>("/schedule");
};

export default getSchedule;
