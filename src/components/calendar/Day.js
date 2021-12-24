import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReminderCard } from "./ReminderCard";

export const Day = ({ day, date }) => {
  const calendar = useSelector((state) => state.calendar);
  return (
    <li>
      <div className="calendar__day">
        <div className="calendar__active-day">{day}</div>
        {calendar[date] !== undefined && (
          calendar[date].map((reminder) => (
            <ReminderCard key={reminder.reminderId} date={date} {...reminder} />
          ))
        ) }
      </div>
    </li>
  );
};
