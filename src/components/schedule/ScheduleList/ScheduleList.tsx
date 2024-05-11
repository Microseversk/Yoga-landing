import { useState } from "react";
import useGetSchedule from "../../../hooks/useGetSchedule";
import ScheduleItem, { IScheduleItem } from "./ScheduleItem";
import style from "./ScheduleList.module.scss";
export interface Schedule {
  day: string;
  schedule: IScheduleItem[];
}

const ScheduleList = () => {
  const { schedule } = useGetSchedule();
  const [day, setDay] = useState("Понедельник");
  return (
    <>
      <div className={style.daysContainer}>
        <div
          onClick={() => setDay("Понедельник")}
          className={`${style.day} ${
            day === "Понедельник" ? style.active : ""
          }`}
        >
          Понедельник
        </div>
        <div
          onClick={() => setDay("Вторник")}
          className={`${style.day} ${day === "Вторник" ? style.active : ""}`}
        >
          Вторник
        </div>
        <div
          onClick={() => setDay("Среда")}
          className={`${style.day} ${day === "Среда" ? style.active : ""}`}
        >
          Среда
        </div>
        <div
          onClick={() => setDay("Четверг")}
          className={`${style.day} ${day === "Четверг" ? style.active : ""}`}
        >
          Четверг
        </div>
        <div
          onClick={() => setDay("Пятница")}
          className={`${style.day} ${day === "Пятница" ? style.active : ""}`}
        >
          Пятница
        </div>
        <div
          onClick={() => setDay("Суббота")}
          className={`${style.day} ${day === "Суббота" ? style.active : ""}`}
        >
          Суббота
        </div>
        <div
          onClick={() => setDay("Воскресенье")}
          className={`${style.day} ${
            day === "Воскресенье" ? style.active : ""
          }`}
        >
          Воскресенье
        </div>
      </div>
      <div className={style.container}>
        {schedule
          .filter((item) => item.day === day)
          .map((item) =>
            item.schedule.map((item, index) => (
              <ScheduleItem
                key={index}
                title={item.title}
                time={item.time}
                duration={item.duration}
                coach={item.coach}
              />
            ))
          )}
      </div>
    </>
  );
};

export default ScheduleList;
