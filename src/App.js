import React from "react";
import CardList from "./components/CardList";
import CardInput from "./components/CardInput";
import CardMonth from "./components/CardMonth";
import CardYear from "./components/CardYear";

class App extends React.Component {
  state = {
    cardNumber: "",
    cardHolder: "",
    month: "MM",
    year: `YY`,
    cvv: null
  };

  isNumber = (nr) => (/^[\d]*$/g).test(nr) && nr !== "";

  handleChange = evt => {
    const { name, value } = evt.target;
    if ((name === "cardNumber" && this.isNumber(value)) || (name === "cardNumber" && value === "") || (name !== "cardNumber")) {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = () => {
    console.log("Type: ", this.getCardTyp());
    console.log("Card: ", this.state);
  };

  render() {
    const { year, month, cardHolder, cardNumber } = this.state;
    return (
      <div className="card-form">
        <CardList holder={cardHolder} nr={cardNumber} month={month} year={year} />
        <div className="card-form__inner">
          <CardInput htmlFor="cardNumber" labelName="Card Number" name="cardNumber" minLength={16} maxLength={19} value={cardNumber} onChange={this.handleChange} />
          <CardInput htmlFor="cardName" labelName="Card Holder" name="cardHolder" value={cardHolder} onChange={this.handleChange} />
          <div className="card-form__row">
            <div className="card-form__col">
              <div className="card-form__group">
                <CardMonth value={month} onChange={this.handleChange} />
                <CardYear value={year} onChange={this.handleChange} />
              </div>
            </div>
            <div className="card-form__col -cvv">
              <div className="card-input">
                <label htmlFor="cardCvv" className="card-input__label">
                  CVV
                </label>
                <input
                  type="text"
                  id="cardCvv"
                  maxLength="4"
                  autoComplete="off"
                  className="card-input__input"
                />
              </div>
            </div>
          </div>
          <button className="card-form__button" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
