import React from "react";
import { makeClass } from "./shared/_shared.styles";
const styles = {
  container: {
    background: "green",
    "&:hover": { background: "red" },
  },
};
export default function VerticalForm(props) {
  const { className, style, fieflds } = props;
  return (
    <div>
      <h1
        className={` ${makeClass(styles.container)} ${className}`}
        style={style || {}}
      >
        I am the vertical form bro
      </h1>
    </div>
  );
}
