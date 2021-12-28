import React from "react";
import { FieldTypes } from "./reducer";
import { makeClass } from "./shared/_shared.styles";
import Textbox from "./textbox/TextBox";
import Checkbox from "./checkbox/CheckBox";
import RadioGroup from "./radio-group/RadioGroup";
const styles = {
  container: {
    padding: 10,
  },
  content: {},
};
export default function VerticalForm(props) {
  const { className, style, fields, setState, title, subtitle } = props;

  const renderLabel = (field) => {
    if (field.label)
      return (
        <div>
          <small>{field.label}</small>
        </div>
      );
  };

  const renderInput = (field, isTextarea) => {
    const obj = { ...field };
    if (isTextarea) return <Textbox {...obj} textarea />;
    return <Textbox {...obj} />;
  };

  const renderCheckbox = (field) => {
    return <Checkbox {...field} />;
  };

  const renderRadios = (field) => {
    return <RadioGroup {...field} />;
  };

  const renderDropdown = (field) => {
    return <Dropdown {...field} />;
  };

  const getComponentWithType = (field) => {
    switch (field.fieldType) {
      case FieldTypes.INPUT:
        return renderInput(field);
      case FieldTypes.CHECKBOX:
        return renderCheckbox(field);
      case FieldTypes.RADIO:
        return renderRadios(field);
      case FieldTypes.DROPDOWN:
        return renderDropdown(field);
      default:
        <small>Item is not availablbe in form...</small>;
    }
  };

  return (
    <div
      className={` ${makeClass(styles.container)} ${className}`}
      style={style || {}}
    >
      {title && <h2 style={{ margin: "5px 0px" }}>{title}</h2>}
      {subtitle && <h4 style={{ margin: "5px 0px" }}>{subtitle}</h4>}

      <div className={`${makeClass(styles.content)}`}>
        {(fields || []).map((field, index) => {
          return (
            <div key={index.toString()}>
              {renderLabel(field)}
              {getComponentWithType(field)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
