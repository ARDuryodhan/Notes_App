import React, { useState, useEffect } from "react";

import plusIcon from "../../assets/add-icon.png";

import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#b1ff00", "#ffca2c", "#00d4fe", "#b693fd", "#e4ee91", "#FF0000"];
  const [getList, setList] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setList(!getList)} />
      <ul className={`sidebar_list ${getList ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            className="sidebar_list_item"
            key={index}
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
