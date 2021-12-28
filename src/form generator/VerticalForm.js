import React from "react";
import { FieldTypes } from "./reducer";
import { makeClass } from "./shared/_shared.styles";
import Textbox from "./textbox/TextBox";
import Checkbox from "./checkbox/CheckBox";
import CheckboxGroup from "./checkbox/CheckBoxGroup";
import RadioGroup from "./radio-group/RadioGroup";
import Dropdown from "./dropdown/Dropdown";
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
        <div style={{ marginTop: 6, marginBottom: 6 }}>
          <small>{field.label}</small>
        </div>
      );
  };

  const renderInput = (field, isTextarea) => {
    const obj = { ...field };
    if (isTextarea) return <Textbox {...obj} textarea />;
    return <Textbox {...obj} />;
  };

  const renderCheckbox = (field, isGroup) => {
    if (isGroup) return <CheckboxGroup {...field} />;
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
      case FieldTypes.TEXTAREA:
        return renderInput(field, true);
      case FieldTypes.CHECKBOX:
        return renderCheckbox(field);
      case FieldTypes.CHECKBOXGROUP:
        return renderCheckbox(field, true);
      case FieldTypes.RADIO:
        return renderRadios(field);
      case FieldTypes.RADIOGROUP:
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
