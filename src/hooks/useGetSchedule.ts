import { useEffect, useState } from "react";
import { Schedule } from "../components/schedule/ScheduleList/ScheduleList";
import getSchedule from "../services/schedule";

const useGetSchedule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [schedule, setDirections] = useState<Schedule[]>([]);
  useEffect(() => {
    const fetchDirections = async () => {
      setIsLoading(true);
      const schedule = (await getSchedule()).data;
      setDirections(schedule);
      setIsLoading(false);
    };
    fetchDirections();
  }, []);

  return { schedule, isLoading };
};

export default useGetSchedule;
