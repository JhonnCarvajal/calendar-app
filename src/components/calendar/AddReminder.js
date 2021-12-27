import moment from 'moment';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addReminder } from '../../actions/calendar';
import { useForm } from '../../hooks/useForm';

export const AddReminder = () => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
      hour: "",
      text: "",
      city: "",
      date: ""
    });
    const { hour, text, city, date } = formValues;
    const hanldeSaveReminder = (e) => {
      e.preventDefault();
      const reminderId = moment().format('x');
      dispatch(addReminder(reminderId, hour, text, city, date));
    };
    return (
        <form onSubmit={hanldeSaveReminder} className="calendar__form">
        <input
          name="hour"
          type={"time"}
          onChange={handleInputChange}
          value={hour}
          className="calendar__input-hour"
          required={true}
        />
        <input
          name="text"
          type={"text"}
          onChange={handleInputChange}
          placeholder="Reminder"
          value={text}
          maxLength={30}
          className="calendar__input"
          required={true}
        />
        <input
          name="city"
          type={"text"}
          onChange={handleInputChange}
          placeholder="City"
          value={city}
          className="calendar__input"
          required={true}
        />
        <input
          name="date"
          type={"date"}
          onChange={handleInputChange}
          value={date}
          className="calendar__input"
          required={true}
        />
        <button type="submit" className="btn btn-primary">
          Add reminder
        </button>
      </form>
    )
}
