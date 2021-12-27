import React from "react";
import "../sass/styles.scss";
import { daysOrder, dec } from "../constants";
import { Day } from "../components/calendar/Day";
import { AddReminder } from "../components/calendar/AddReminder";
const Calendar = () => {
  return (
    <div className="calendar__body">
      <h1>Calendar</h1>
      <AddReminder />
      <div className="calendar__month_year">DEC - 2021</div>
      <div className="calendar__main-content">
        <ol>
          {daysOrder.map((day) => (
            <li key={day} className="calendar__week-days">
              {day}
            </li>
          ))}
          <li className="calendar__day calendar__inactive-day">29</li>
          <li className="calendar__day calendar__inactive-day">30</li>
          {dec.map((day) => (
            <Day key={`${day}`} day={day} date={`2021-12-${day}`} />
          ))}
          <li className="calendar__day calendar__inactive-day">1</li>
          <li className="calendar__day calendar__inactive-day">2</li>
        </ol>
      </div>
    </div>
  );
};

export default Calendar;
