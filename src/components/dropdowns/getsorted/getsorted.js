import React, { useState } from "react";
import "./getsorted.scss";

const Getsorted = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsOpen(!isOpen)}>
          Sort by : {selected}
        </div>
        {isOpen && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Getsorted;
