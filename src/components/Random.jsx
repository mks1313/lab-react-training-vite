import PropTypes from "prop-types";

const Random = ({ min, max }) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return (
      <div className="container">
        <p className="text">Random value between {min} and {max}: {randomNumber}</p>
      </div>
    );
  }

  Random.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  };
  
  export default Random;