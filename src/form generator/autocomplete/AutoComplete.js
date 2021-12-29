import React, { useState } from "react";
import PropTypes from "prop-types";
import { elevate, makeClass } from "../shared/_shared.styles";
import { Stylesheet } from "./styles.autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function AutComplete(props) {
  const { className, style, blanketClassName } = props;
  const [text, setText] = useState("");

  return (
    <div>
      <div style={{ padding: 15 }}>
        <Chip />
      </div>
      <div style={{ position: "relative" }}>
        <input
          className={`${makeClass(Stylesheet.input)} ${className || ""}`}
          style={style || {}}
        />
        <div
          className={`${makeClass(Stylesheet.dropContainer)} ${makeClass(
            elevate(2)
          )}`}
        >
          <p className={`${makeClass(Stylesheet.dropItem)}`}>Option 1</p>
          <p className={`${makeClass(Stylesheet.dropItem)}`}>Option 2</p>
          <p className={`${makeClass(Stylesheet.dropItem)}`}>Option 3</p>
        </div>
      </div>
    </div>
  );
}

const Chip = ({}) => {
  return (
    <p className={`${makeClass(Stylesheet.chip)} ${makeClass(elevate(1))}`}>
      <span>First Chip</span>
      <FontAwesomeIcon icon={faTimes} size="xs" />
    </p>
  );
};
AutComplete.propTypes = {};

export default AutComplete;
