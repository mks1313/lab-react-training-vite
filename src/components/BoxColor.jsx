import PropTypes from "prop-types";

const BoxColor = ({ r, g, b }) => {
  const isValidColor = (value) => value >= 0 && value <= 255;
  const red = isValidColor(r) ? r : 0;
  const green = isValidColor(g) ? g : 0;
  const blue = isValidColor(b) ? b : 0;

  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  const hexColor = `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;

  return (
    <div
      className="container"
      id="color"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="text">
        <p>
          rgb({red}, {green}, {blue})
        </p>
        <p>{hexColor}</p>
      </div>
    </div>
  );
};

BoxColor.propTypes = {
  r: PropTypes.number.isRequired,
  g: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default BoxColor;
