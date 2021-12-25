import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReminder, editReminder } from "../../actions/calendar";
import { getWeatherByCity } from "../../helpers/getWeatherByCity";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import { useForm } from "../../hooks/useForm";
import { DayWeather } from "./DayWeather";

export const ReminderCard = ({ reminderId, text, city, date }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [formValues, handleInputChange] = useForm({
    new_text: text,
    new_city: city
  });
  const { new_text, new_city } = formValues;
  const handleDeleteReminder = (reminderId) => {
    dispatch(deleteReminder(reminderId, date));
  };
  const hanldeEditReminder = () => {
    dispatch(editReminder(reminderId, new_text, new_city, date));
    setEdit(!edit);
  };

  return (
    <div key={reminderId} className="calendar__reminder">
      {edit ? (
        <div>
          <p>
            <input
              name="new_text"
              type={"text"}
              value={new_text}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <input
              name="new_city"
              type={"text"}
              value={new_city}
              onChange={handleInputChange}
            />
          </p>
          <span className="material-icons" onClick={hanldeEditReminder}>
            check
          </span>
          <span className="material-icons" onClick={() => setEdit(!edit)}>
            cancel
          </span>
        </div>
      ) : (
        <div>
          <p>
            <b>Text</b>: {text}
          </p>
          <p>
            <b>City</b>: {city}
          </p>
          <DayWeather city={city} />

          <span className="material-icons" onClick={() => setEdit(!edit)}>
            edit
          </span>
          <span
            className="material-icons"
            onClick={() => handleDeleteReminder(reminderId)}
          >
            delete
          </span>
        </div>
      )}
    </div>
  );
};
