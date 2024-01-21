import PropTypes from "prop-types";
import Rating from "./Rating";

const DriverCard = (props) => {
  const { name, rating, img, car: { model, licensePlate } } = props;

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

DriverCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  car: PropTypes.shape({
    model: PropTypes.string.isRequired,
    licensePlate: PropTypes.string.isRequired,
  }).isRequired,
};

export default DriverCard;
