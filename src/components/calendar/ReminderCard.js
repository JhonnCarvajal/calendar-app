import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReminder, addReminder, editReminder } from "../../actions/calendar";

import { useForm } from "../../hooks/useForm";
import { DayWeather } from "./DayWeather";

export const ReminderCard = ({ reminderId, hour, text, city, date }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.calendar)
  const [edit, setEdit] = useState(false);
  const [formValues, handleInputChange] = useForm({
    new_hour: hour,
    new_text: text,
    new_city: city,
    new_date: date
  });
  useEffect(() => {
    localStorage.setItem("calendar", JSON.stringify(state));
  }, [state])
  
  const { new_hour, new_text, new_city, new_date } = formValues;
  const handleDeleteReminder = () => {
    dispatch(deleteReminder(reminderId, date));
  };
  const hanldeEditReminder = (e) => {
    e.preventDefault();
    if (new_date !== date) {
      dispatch(deleteReminder(reminderId, date))
      dispatch(
        addReminder(reminderId, new_hour, new_text, new_city, new_date)
      );
    } else {
      dispatch(
        editReminder(reminderId, new_hour, new_text, new_city, date)
      );
    }
    setEdit(!edit);
  };

  return (
    <div style={{ position: "relative" }}>
      <div key={reminderId} className="reminder__body animate__animated animate__bounceIn">
        {edit ? (
          <form onSubmit={hanldeEditReminder}>
            <b>Change Date:</b>
            <br />
            <input
              name="new_date"
              type={"date"}
              value={new_date}
              onChange={handleInputChange}
              className="reminder__input"
            />
            <b>Change Hour:</b>
            <input
              name="new_hour"
              type={"time"}
              value={new_hour}
              onChange={handleInputChange}
              className="reminder__input-hour"
            />

            <br />
            <b>Text:</b>
            <input
              name="new_text"
              type={"text"}
              value={new_text}
              onChange={handleInputChange}
              className="reminder__input"
              maxLength={30}
            />
            <br />
            <b>City:</b>
            <input
              name="new_city"
              type={"text"}
              value={new_city}
              onChange={handleInputChange}
              className="reminder__input"
            />

            <button type="submit" onClick={hanldeEditReminder} className="btn">
              <span className="material-icons pointer icon">check</span>
            </button>
            <span
              className="material-icons pointer icon"
              onClick={() => setEdit(!edit)}
            >
              cancel
            </span>
          </form>
        ) : (
          <div>
            <b>{hour}</b>: {text}
            <br />
            <b>City</b>: {city}
            <br />
            <DayWeather city={city} />
            <br />
            <span
              className="material-icons pointer icon"
              onClick={() => setEdit(!edit)}
            >
              edit
            </span>
            <span
              className="material-icons pointer icon"
              onClick={handleDeleteReminder}
            >
              delete
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
