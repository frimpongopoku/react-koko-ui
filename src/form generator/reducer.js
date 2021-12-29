export const ACTIONS = {
  UPDATE: "UPDATE",
  ADD_TO_FORM: "ADD_TO_FORM",
};

export const FieldTypes = {
  RADIO: "RADIO",
  RADIOGROUP: "RADIOGROUP",
  CHECKBOXGROUP: "CHECKBOXGROUP",
  CHECKBOX: "CHECKBOX",
  INPUT: "TEXTBOX",
  TEXTAREA: "TEXTAREA",
  DROPDOWN: "DROPDOWN",
  MEDIA_UPLOAD: "MEDIA_UPLOAD",
};

export const formStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE:
      return { ...state, ...action.payload };
    case ACTIONS.ADD_TO_FORM:
      return { form: { ...state.form, ...action.payload } };
    default:
      console.log(" am talking to the default");
      return state;
  }
};
