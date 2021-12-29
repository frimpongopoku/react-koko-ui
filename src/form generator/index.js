import React, { useCallback, useReducer } from "react";
import { ACTIONS, formStateReducer } from "./reducer";
import MultiStepForm from "./MultiStepForm";
import VerticalForm from "./VerticalForm";
import Notification from "./notification/Notification";

const initialFormState = {};
function FormGenerator(props) {
  const { multiStep = false, onSubmit, notification } = props;
  const [state, dispatch] = useReducer(formStateReducer, initialFormState);

  const setState = (payload = {}) => {
    dispatch({ type: ACTIONS.UPDATE, payload });
  };

  const handleOnSubmit = () => {
    if (!onSubmit)
      return console.log("You have not provided a submit function...");
    onSubmit(state);
  };

  var Form;
  if (multiStep) Form = MultiStepForm;
  else Form = VerticalForm;
  return (
    <>
      <Form
        state={state}
        setState={setState}
        {...props}
        onSubmit={handleOnSubmit}
      />

      <Notification />
    </>
  );
}

FormGenerator.propTypes = {};

export default FormGenerator;
