const initialState = {};
export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REMINDER":
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
    case "DELETE_REMINDER":
      return {
        ...state,
        [action.payload.date]: state[action.payload.date].filter(function (el) {
          return el.reminderId !== action.payload.reminderId;
        })
      };
    case "EDIT_REMINDER":
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
