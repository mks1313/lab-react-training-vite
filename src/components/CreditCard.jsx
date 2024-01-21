import PropTypes from "prop-types";

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const lastFourDigits = number.slice(-4);
  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="card-type">{type}</div>
      <div className="card-number">···· ···· ···· {lastFourDigits}</div>
      <div className="card-info">
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
      </div>
      <div className="card-owner">{owner}</div>
    </div>
  );
};

CreditCard.propTypes = {
  type: PropTypes.oneOf(["Visa", "Master Card"]).isRequired,
  number: PropTypes.string.isRequired,
  expirationMonth: PropTypes.number.isRequired,
  expirationYear: PropTypes.number.isRequired,
  bank: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CreditCard;
