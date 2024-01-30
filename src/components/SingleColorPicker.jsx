import "../SingleColorPicker.css";

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div className="single-color-box">
      <div
        className="single-color"
        style={{
          backgroundColor: `rgb(${color === "r" ? value : 0}, ${
            color === "g" ? value : 0
          }, ${color === "b" ? value : 0})`,
        }}
      ></div>
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        min="0"
        max="255"
      />
    </div>
  );
};

export default SingleColorPicker;
