import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReminder, editReminder } from "../../actions/calendar";

import { useForm } from "../../hooks/useForm";
import { DayWeather } from "./DayWeather";

export const ReminderCard = ({ reminderId, hour, text, city, date }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [formValues, handleInputChange] = useForm({
    new_hour:hour,
    new_text: text,
    new_city: city
  });
  const { new_hour,new_text, new_city } = formValues;
  const handleDeleteReminder = (reminderId) => {
    dispatch(deleteReminder(reminderId, date));
  };
  const hanldeEditReminder = () => {
    dispatch(editReminder(reminderId,new_hour, new_text, new_city, date));
    setEdit(!edit);
  };

  return (
    <div key={reminderId} className="reminder__body">
      {edit ? (
        <div>
          <input
            name="new_hour"
            type={"time"}
            value={new_hour}
            onChange={handleInputChange}
          />
          <input
            name="new_text"
            type={"text"}
            value={new_text}
            onChange={handleInputChange}
            className="reminder__input"
            maxLength={30}
          />

          <p>
            <input
              name="new_city"
              type={"text"}
              value={new_city}
              onChange={handleInputChange}
              className="reminder__input"
            />
          </p>
          <span
            className="material-icons pointer icon"
            onClick={hanldeEditReminder}
          >
            check
          </span>
          <span
            className="material-icons pointer icon"
            onClick={() => setEdit(!edit)}
          >
            cancel
          </span>
        </div>
      ) : (
        <div>
          <p>
            <b>{hour}</b>: {text}
          </p>
          <p>
            <b>City</b>: {city}
          </p>
          <DayWeather city={city} />

          <span
            className="material-icons pointer icon"
            onClick={() => setEdit(!edit)}
          >
            edit
          </span>
          <span
            className="material-icons pointer icon"
            onClick={() => handleDeleteReminder(reminderId)}
          >
            delete
          </span>
        </div>
      )}
    </div>
  );
};
