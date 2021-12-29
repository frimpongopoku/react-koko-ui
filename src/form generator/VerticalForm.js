import React, { useEffect } from "react";
import { FieldTypes } from "./reducer";
import { makeClass } from "./shared/_shared.styles";
import Textbox from "./textbox/TextBox";
import Checkbox from "./checkbox/CheckBox";
import CheckboxGroup from "./checkbox/CheckBoxGroup";
import RadioGroup from "./radio-group/RadioGroup";
import Dropdown from "./dropdown/Dropdown";
import Button from "./button/Button";

const styles = {
  container: {
    padding: 10,
  },
  content: {},
};

export default function VerticalForm(props) {
  const {
    className,
    style,
    fields,
    setState,
    state,
    title,
    subtitle,
    onSubmit,
  } = props;

  const renderLabel = (field) => {
    if (field.label)
      return (
        <div style={{ marginTop: 6, marginBottom: 6 }}>
          <small>{field.label}</small>
        </div>
      );
  };

  const handleOnChange = (field, value) => {
    setState({ [field.dbName || field.name]: value });
  };

  const getStateValue = (field) => {
    return (state || {})[field.dbName || field.name];
  };

  const renderInput = (field, isTextarea) => {
    const value = getStateValue(field);
    const obj = {
      ...field,
      value,
      onChange: (e) => handleOnChange(field, e.target.value),
    };
    if (isTextarea) return <Textbox {...obj} textarea />;
    return <Textbox {...obj} />;
  };

  const renderCheckbox = (field, isGroup) => {
    const value = getStateValue(field);
    if (isGroup)
      return (
        <CheckboxGroup
          {...field}
          defaultValue={value}
          onItemSelected={(data) => handleOnChange(field, data)}
        />
      );
    return <Checkbox {...field} />;
  };

  const renderRadios = (field) => {
    const value = getStateValue(field);
    return (
      <RadioGroup
        {...field}
        defaultValue={value}
        onItemSelected={(data) => handleOnChange(field, data)}
      />
    );
  };

  const renderDropdown = (field) => {
    const value = getStateValue(field);
    return (
      <Dropdown
        {...field}
        defaultValue={value}
        onItemSelected={(data) => handleOnChange(field, data)}
      />
    );
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
        <small>Item is not available in form...</small>;
    }
  };

  const setDefaults = () => {
    var obj = {}; //make a copy of fields bruh

    fields.forEach((field) => {
      obj = {
        ...obj,
        [field.dbName || field.name]: field.value || field.defaultValue || null,
      };
    });

    setState(obj);
  };

  useEffect(() => setDefaults(), [fields]);

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

      <div style={{ display: "flex", width: "100%" }}>
        <Button style={{ marginLeft: "auto" }} onClick={onSubmit}>
          Here we go again
        </Button>
      </div>
    </div>
  );
}
