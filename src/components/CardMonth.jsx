import React from "react";

const CardMonth = ({ value, onChange }) => {
  const months = [...Array(12).keys()].map((v, i) => {
    const month = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
    return (
      <option key={month} value={month}>
        {month}
      </option>
    );
  });

  return (
    <>
      <label htmlFor="cardMonth" className="card-input__label">
        Expiration Date
      </label>
      <select
        id="cardMonth"
        className="card-input__input -select"
        name="month"
        onChange={onChange}
        value={value}
      >
        {months}
      </select>
    </>
  );
};

export default CardMonth;
