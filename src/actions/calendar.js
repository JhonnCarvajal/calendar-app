export const addReminder = (reminderId, text, city, date) => ({
  type: "ADD_REMINDER",
  payload: {
    reminderId: reminderId,
    text: text,
    city: city,
    date: date
  }
});
export const deleteReminder = (reminderId, date) => ({
  type: "DELETE_REMINDER",
  payload: {
    reminderId: reminderId,
    date: date
  }
});
export const editReminder = (reminderId, text, city, date) => ({
  type: "EDIT_REMINDER",
  payload: {
    reminderId: reminderId,
    text: text,
    city: city,
    date: date
  }
});
