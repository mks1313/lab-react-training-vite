import Rating from "./Rating";

const DriverCard = (props) => {
  const {
    name,
    rating,
    img,
    car: { model, licensePlate },
  } = props;

  return (
    <div className="driver-card">
      <img src={img} alt={`${name}'s avatar`} className="driver-avatar" />
      <div className="driver-info">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
