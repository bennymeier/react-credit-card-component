import React from "react";

const CardInput = props => {
  const { htmlFor, labelName, name, onChange, minLength, maxLength, value } = props;
  return (
    <div className="card-input">
      <label htmlFor={htmlFor} className="card-input__label">
        {labelName}
      </label>
      <input
        minLength={minLength}
        maxLength={maxLength}
        name={name}
        type="text"
        id={htmlFor}
        value={value}
        autoComplete="off"
        className="card-input__input"
        onChange={onChange}
      />
    </div>
  );
};
export default CardInput;
