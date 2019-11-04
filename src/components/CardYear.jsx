import React from "react";

const CardYear = ({ value, onChange }) => {
  const currentYear = new Date().getFullYear();
  const years = [...Array(15).keys()].map((v, i) => {
    const year = `${currentYear + i}`;
    const shortYear = year.substr(2);
    return (
      <option key={year} value={shortYear}>
        {year}
      </option>
    );
  });

  return (
    <>
      <select
        id="cardYear"
        className="card-input__input -select"
        name="year"
        onChange={onChange}
        value={value}
      >
        {years}
      </select>
    </>
  );
};

export default CardYear;
