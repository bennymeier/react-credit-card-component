import React from "react";
const CardItem = props => {
  const active = props.active ? "-active" : "";
  return (
    <span>
      <div className={`card-item__numberItem ${active}`}>#</div>
    </span>
  );
};
class App extends React.Component {
  state = {
    cardNumber: "",
    cardHolder: "",
    month: null,
    year: null,
    cvv: null
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log("Type: ", this.getCardTyp());
    console.log("Card: ", this.state);
  };

  getCardTyp = () => {
    const number = this.state.cardNumber;
    let re = new RegExp("^4");
    if (number.match(re) != null) return "visa";

    re = new RegExp("^(34|37)");
    if (number.match(re) != null) return "amex";

    re = new RegExp("^5[1-5]");
    if (number.match(re) != null) return "mastercard";

    re = new RegExp("^6011");
    if (number.match(re) != null) return "discover";

    return "visa"; // default type
  };
  focusInput = e => {
    this.isInputFocused = true;
    let targetRef = e.target.dataset.ref;
    let target = this.$refs[targetRef];
    this.focusElementStyle = {
      width: `${target.offsetWidth}px`,
      height: `${target.offsetHeight}px`,
      transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
    };
  };

  blurInput = () => {
    let vm = this;
    setTimeout(() => {
      if (!vm.isInputFocused) {
        vm.focusElementStyle = null;
      }
    }, 300);
    vm.isInputFocused = false;
  };
  render() {
    const { year, month, cvv } = this.state;
    return (
      <div className="card-form">
        <div className="card-list">
          <div className="card-item">
            <div className="card-item__side -front">
              <div className="card-item__focus -active"></div>
              <div className="card-item__cover">
                <img
                  src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/20.jpeg"
                  className="card-item__bg"
                />
              </div>
              <div className="card-item__wrapper">
                <div className="card-item__top">
                  <img
                    src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                    className="card-item__chip"
                  />
                  <div className="card-item__type">
                    <img
                      src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                      alt=""
                      className="card-item__typeImg"
                    />
                  </div>
                </div>
                <label htmlFor="cardNumber" className="card-item__number">
                  {[...Array(16).keys()].map((v, i) => (
                    <CardItem key={i} active={(i + 1) % 4 === 0} />
                  ))}
                </label>
                <div className="card-item__content">
                  <label htmlFor="cardName" className="card-item__info">
                    <div className="card-item__holder">Card Holder</div>
                    <div className="card-item__name">Full Name</div>
                  </label>
                  <div className="card-item__date">
                    <label htmlFor="cardMonth" className="card-item__dateTitle">
                      Expires
                    </label>
                    <label htmlFor="cardMonth" className="card-item__dateItem">
                      <span>MM</span>
                    </label>
                    /
                    <label htmlFor="cardYear" className="card-item__dateItem">
                      <span>YY</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-item__side -back">
              <div className="card-item__cover">
                <img
                  src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/20.jpeg"
                  className="card-item__bg"
                />
              </div>
              <div className="card-item__band"></div>
              <div className="card-item__cvv">
                <div className="card-item__cvvTitle">CVV</div>
                <div className="card-item__cvvBand"></div>
                <div className="card-item__type">
                  <img
                    src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                    className="card-item__typeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-form__inner">
          <div className="card-input">
            <label htmlFor="cardNumber" className="card-input__label">
              Card Number
            </label>
            <input
              name="cardNumber"
              type="text"
              id="cardNumber"
              autoComplete="off"
              className="card-input__input"
              onChange={this.handleChange}
            />
          </div>
          <div className="card-input">
            <label htmlFor="cardName" className="card-input__label">
              Card Holders
            </label>
            <input
              name="cardHolder"
              type="text"
              id="cardName"
              autoComplete="off"
              className="card-input__input"
              onChange={this.handleChange}
            />
          </div>
          <div className="card-form__row">
            <div className="card-form__col">
              <div className="card-form__group">
                <label htmlFor="cardMonth" className="card-input__label">
                  Expiration Date
                </label>
                <select
                  id="cardMonth"
                  className="card-input__input -select"
                  name="month"
                  onChange={this.handleChange}
                >
                  {[...Array(12).keys()].map((v, i) => (
                    <option key={i} value={`${i + 1}`}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select
                  id="cardYear"
                  className="card-input__input -select"
                  name="year"
                  onChange={this.handleChange}
                  defaultValue={year}
                >
                  <option value={new Date().getFullYear()}>
                    {new Date().getFullYear()}
                  </option>
                  {[...Array(10).keys()].map((v, i) => (
                    <option key={i} value={`202${i}`}>
                      202{i}
                    </option>
                  ))}
                  <option value="2020">2030</option>
                </select>
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
