import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";
import "../RGBColorPicker.css";

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div className="color-picker">
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(newValue) => setRValue(newValue)}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(newValue) => setGValue(newValue)}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(newValue) => setBValue(newValue)}
      />

      <div className="rgbcolors">
        <div
          className="rgbsecolor-second"
          style={{
            backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
          }}
        ></div>
        <p>{`RGB(${rValue}, ${gValue}, ${bValue})`}</p>
      </div>
    </div>
  );
};

export default RGBColorPicker;
