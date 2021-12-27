import { types } from "../types/types";

export const addReminder = (reminderId, hour, text, city, date) => ({
  type: types.calendarAddReminder,
  payload: {
    reminderId: reminderId,
    hour: hour,
    text: text,
    city: city,
    date: date
  }
});
export const deleteReminder = (reminderId, date) => ({
  type: types.calendarDeleteReminder,
  payload: {
    reminderId: reminderId,
    date: date
  }
});
export const editReminder = (reminderId, hour, text, city, date) => ({
  type: types.calendarEditReminder,
  payload: {
    reminderId: reminderId,
    hour: hour,
    text: text,
    city: city,
    date: date
  }
});

