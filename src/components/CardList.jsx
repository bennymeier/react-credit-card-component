import React from "react";
import CardItem from "./CardItem";

const Number = ({ nr }) => {
  nr = nr.replace(/ /g, "");
  return [...nr].map((v, i) => {
    return (
      <CardItem
        key={i}
        nr={i > 3 && i < 12 ? "#" : v}
        active={(i + 1) % 4 === 0}
      />
    );
  });
};

const getCardTyp = nr => {
  let re = new RegExp("^4");
  if (nr.match(re) !== null) return "visa";

  re = new RegExp("^(34|37)");
  if (nr.match(re) !== null) return "amex";

  re = new RegExp("^5[1-5]");
  if (nr.match(re) !== null) return "mastercard";

  re = new RegExp("^6011");
  if (nr.match(re) !== null) return "discover";

  return "visa";
};

const CardList = props => {
  let { holder = "FULL NAME", nr, year, month } = props;
  holder = !holder ? "FULL NAME" : holder;
  return (
    <div className="card-list">
      <div className="card-item">
        <div className="card-item__side -front">
          <div className="card-item__focus -active"></div>
          <div className="card-item__cover">
            <img
              src="img/card-bg-2.jpg"
              className="card-item__bg"
              alt="Card Background"
            />
          </div>
          <div className="card-item__wrapper">
            <div className="card-item__top">
              <img
                src="img/chip.png"
                className="card-item__chip"
                alt="Credit Card Chip"
              />
              <div className="card-item__type">
                <img
                  src={`img/${getCardTyp(nr)}.png`}
                  alt={`${getCardTyp(nr)} Logo`}
                  className="card-item__typeImg"
                />
              </div>
            </div>
            <label htmlFor="cardNumber" className="card-item__number">
              <Number nr={nr} />
            </label>
            <div className="card-item__content">
              <label htmlFor="cardName" className="card-item__info">
                <div className="card-item__holder">Card Holder</div>
                <div className="card-item__name">{holder}</div>
              </label>
              <div className="card-item__date">
                <label htmlFor="cardMonth" className="card-item__dateTitle">
                  Expires
                </label>
                <label htmlFor="cardMonth" className="card-item__dateItem">
                  <span>{month}</span>
                </label>
                /
                <label htmlFor="cardYear" className="card-item__dateItem">
                  <span>{year}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item__side -back">
          <div className="card-item__cover">
            <img
              src="img/card-bg-2.jpg"
              className="card-item__bg"
              alt="Card Background"
            />
          </div>
          <div className="card-item__band"></div>
          <div className="card-item__cvv">
            <div className="card-item__cvvTitle">CVV</div>
            <div className="card-item__cvvBand"></div>
            <div className="card-item__type">
              <img
                src="img/visa.png"
                className="card-item__typeImg"
                alt="Bank Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardList;
