import React, { useReducer } from "react";
// import PropTypes from "prop-types";
import { formStateReducer } from "./reducer";
import MultiStepForm from "./MultiStepForm";
import VerticalForm from "./VerticalForm";

const initialFormState = {};
function FormGenerator(props) {
  const { multiStep = false, onSubmit } = props;
  const [state, dispatch] = useReducer(formStateReducer, initialFormState);
  const setState = (type, payload) => {
    dispatch(state, { type, payload });
  };

  const handleOnSubmit = () => {
    if (!onSubmit)
      return console.log("You have not provided a submit function...");
    onSubmit(state);
  };

  if (multiStep)
    return (
      <MultiStepForm
        state={state}
        setState={setState}
        {...props}
        onSubmit={handleOnSubmit}
      />
    );
  return (
    <VerticalForm
      state={state}
      setState={setState}
      {...props}
      onSubmit={handleOnSubmit}
    />
  );
}

FormGenerator.propTypes = {};

export default FormGenerator;
