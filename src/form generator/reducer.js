export const ACTIONS = {
  UPDATE: "UPDATE",
};

export const FieldTypes = {
  RADIO: "RADIO",
  CHECKBOX: "CHECKBOX",
  INPUT: "TEXTBOX",
  TEXTAREA: "TEXTAREA",
  DROPDOWN: "DROPDOWN",
};

export const formStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
