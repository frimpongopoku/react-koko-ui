import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Accordion.css";
import { ACCORDION_DATA } from "./values";
import { PropTypes } from 'prop-types';

export default function Accordion({
  data,
  style,
  rootClass,
  icons,
  contentContainerClass,
  iconsContainerClass,
}) {
  const [clickedItem, setClickedItem] = useState(null);

  const toggleClicked = (index) => {
    if (clickedItem !== index) {
      setClickedItem(index);
    } else {
      setClickedItem(null);
    }
  };

  return (data || ACCORDION_DATA).map((data, index) => {
    return (
      <div>
        <div
          className={`accordion-toggle ${rootClass} ${
            index === clickedItem && "active-item"
          }`}
          onClick={() => toggleClicked(index)}
          key={index}
          style={style}
        >
          <h3>{data?.title}</h3>
          <div className={`elevate-foat accordion-icon ${iconsContainerClass}`}>
            {clickedItem === index ? (
              icons?.length ? (
                <FontAwesomeIcon icon={icons[1]} />
              ) : (
                "-"
              )
            ) : icons?.length ? (
              <FontAwesomeIcon icon={icons[0]} />
            ) : (
              "+"
            )}
          </div>
        </div>
        <div>
          {clickedItem === index && (
            <div className={`accordion-content ${contentContainerClass}`}>
              {data?.content}
            </div>
          )}
        </div>
      </div>
    );
  });
}

Accordion.PropTypes = {
  data: PropTypes.array,
  style: PropTypes.object,
  icons: PropTypes.array,
  rootClass: PropTypes.string,
  contentContainerClass: PropTypes.string,
  iconsContainerClass: PropTypes.string,
};