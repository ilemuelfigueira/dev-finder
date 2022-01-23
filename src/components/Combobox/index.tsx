import { BsSearch } from "react-icons/bs";

import clsx from "clsx";

import { useCombobox } from "./index.hook";
import { ComboboxProps } from "./index.types";
import "./index.styles.scss";

export function Combobox({ onChange }: ComboboxProps) {
  const { formik, handleClose, isOpen, onClickUser, options } = useCombobox({ onChange });

  return (
    <div id="container">
      <div id="search-container">
        <div className="icon-container">
          <BsSearch className="icon" />
        </div>
        <input
          type="text"
          name="q"
          onKeyPress={(e) => {
            if (e.key === "Enter") formik.handleSubmit();
          }}
          onChange={formik.handleChange}
          placeholder="Search"
          value={formik.values.q}
        />
        <button className="global-button" onClick={() => formik.handleSubmit()}>
          Search
        </button>
      </div>
      <div
        id="options"
        className={clsx({
          hide: !isOpen,
        })}
        tabIndex={1} // makes div to be able to receive focus
        onBlur={() => handleClose()}
      >
        {options.map((option) => (
          <div className="option" key={option.login} onClick={() => onClickUser(option.login)}>
            <img src={option.avatar_url} alt="user-image" srcSet="" />
            <span className="user-name">{option.login}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
