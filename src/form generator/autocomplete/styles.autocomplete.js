import {
  elevate,
  THEME_ACTIVE_COLOR,
  THEME_COLOR,
} from "../shared/_shared.styles";

export const Stylesheet = {
  input: {
    boxSizing: "border-box",
    border: "solid 1px " + THEME_COLOR,
    fontSize: 14,
    width: "100%",
    "&:focus": { outline: 0 },
    padding: "15px 20px",
  },
  dropContainer: {
    boxSizing: "border-box",
    // padding: 15,
    width: "100%",
    position: "absolute",
    minHeight: 100,
    maxHeight: 500,
    overflowY: "scroll",
    marginTop: 5,
  },
  dropItem: {
    margin: 0,
    cursor: "pointer",
    padding: "15px",
    "&:hover": {
      background: THEME_COLOR,
      color: "white",
      transition: ".2s ease-out",
    },
    "&:active": {
      background: THEME_ACTIVE_COLOR,
      color: "white",
      transition: ".2s ease-out",
    },
  },

  chip: {
    color: THEME_COLOR,
    padding: "10px 23px",
    display: "inline-block",
    margin: 0,
    borderRadius: 55,
    cursor: "pointer",
    "& span": {
      marginRight: 5,
    },

    "&:hover": {
      opacity: 0.8,
      transform: "scale(.95)",
      transition: ".2s ease-out",
    },
  },
};
