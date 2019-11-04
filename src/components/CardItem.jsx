import React from "react";

const CardItem = props => {
  const { active: isActive, nr } = props;
  const active = isActive ? "-active" : "";
  return (
    <span>
      <div className={`card-item__numberItem ${active}`}>{nr}</div>
    </span>
  );
};
export default CardItem;
