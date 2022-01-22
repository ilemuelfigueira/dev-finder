import { BsSearch } from "react-icons/bs";

import "./index.styles.scss";

export function Combobox() {
  return (
    <div id="combobox">
      <div className="icon-container">
        <BsSearch className="icon" />
      </div>
      <input type="text" placeholder="Search" />
      <button className="global-button">Search</button>
    </div>
  );
}
