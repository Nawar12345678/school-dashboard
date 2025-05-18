import React, { useState } from 'react';

const DropdownButton = ({ label, items,buttonClass }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="dropdown">
      <button className={`btn dropdown-toggle ${buttonClass}`} type="button" id="dropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
        {selectedItem}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownButton">
        {items.map((item) => (
          <li key={item} onClick={() => selectItem(item)} style={{ cursor: "pointer" }}>
            <div className="dropdown-item">
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownButton;
