import React from "react";
import "../sass/styles.scss";
import { daysOrder, dec } from "../constants";
import { Day } from "../components/calendar/Day";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { addReminder } from "../actions/calendar";
import moment from "moment";
const Calendar = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    text: "",
    city: "",
    date: ""
  });
  const { text, city, date } = formValues;
  const hanldeSaveReminder = (e) => {
    e.preventDefault();
    const reminderId = moment().unix();
    dispatch(addReminder(reminderId, text, city, date));
  };
  return (
    <div>
      <h1>Calendar</h1>
      <form onSubmit={hanldeSaveReminder}>
        <input
          name="text"
          type={"text"}
          onChange={handleInputChange}
          placeholder="Reminder"
          value={text}
          maxLength={30}
          style={{minWidth:'250px'}}
        />
        <input
          name="city"
          type={"text"}
          onChange={handleInputChange}
          placeholder="City"
          value={city}
        />
        <input
          name="date"
          type={"date"}
          onChange={handleInputChange}
          value={date}
        />
        <button type="submit">Add reminder</button>
      </form>

      <div className="calendar__month_year">DEC - 2022</div>
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
