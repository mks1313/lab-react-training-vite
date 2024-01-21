import PropTypes from "prop-types";

const Rating = ({ children }) => {
  const rating = Math.round(children);

  const stars = Array.from({ length: 5 }, (_,index) => {
    return index < rating ? "★" : "☆";
  });

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className="star">
          {star}
        </span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  children: PropTypes.number.isRequired,
};

export default Rating;
