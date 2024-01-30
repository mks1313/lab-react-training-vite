import { useState } from "react";

const ClickablePicture = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevClicked) => !prevClicked);
  };

  const containerStyle = {
    position: "relative",
    width: "40%",
    height: "auto",
    display: "block",
    margin: "auto",
  };

  const overlayStyle = {
    position: "absolute",
    top: "13%",
    left: "25%",
    width: "50%",
    height: "50%",
  };

  return (
    <div style={containerStyle} onClick={handleClick}>
      <img
        src={props.img}
        alt="Clickable Picture"
        style={{ width: "100%", height: "auto" }}
      />
      {isClicked && (
        <img
          src={props.imgClicked}
          alt="Clickable Picture Overlay"
          style={overlayStyle}
        />
      )}
    </div>
  );
};

export default ClickablePicture;
