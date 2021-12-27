import { types } from "../types/types";

const initialState = JSON.parse(localStorage.getItem("calendar")) || {};
export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.calendarAddReminder:
      return {
        ...state,
        [action.payload.date]: [
          ...(state[action.payload.date] || []),
          {
            hour:action.payload.hour,
            text: action.payload.text,
            city: action.payload.city,
            reminderId: action.payload.reminderId,
            date: action.payload.date
          }
        ]
      };
    case types.calendarDeleteReminder:
      const newState ={
        ...state,
        [action.payload.date]: state[action.payload.date].filter(function (el) {
          return el.reminderId !== action.payload.reminderId;
        })
      };
      localStorage.setItem("calendar", JSON.stringify(newState));
      return newState;
    case types.calendarEditReminder:
      return {
        ...state,
        [action.payload.date]: state[action.payload.date].map((el) =>
          el.reminderId === action.payload.reminderId
            ? Object.assign( el,{ ...action.payload } )
            : el
        )
      };
    default:
      return state;
  }
};
