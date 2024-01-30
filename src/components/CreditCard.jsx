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
      className="credit-card1"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="card-type1">{type}</div>
      <div className="card-number1">···· ···· ···· {lastFourDigits}</div>
      <div className="card-info1">
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
      </div>
      <div className="card-owner1">{owner}</div>
    </div>
  );
};

export default CreditCard;
