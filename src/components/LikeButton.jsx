import { useState } from "react";

const LikeButton = () => {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [likeCount, setLikeCount] = useState(0);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const handleLikeClick = () => {
    const newIndex = (likeCount + 1) % colors.length;
    setLikeCount(likeCount + 1);
    setCurrentColor(colors[newIndex]);
  };

  return (
    <div
      className="like-button"
      onClick={handleLikeClick}
      style={{ backgroundColor: currentColor }}
    >
      {likeCount} Like{likeCount !== 1 ? "s" : ""}
    </div>
  );
};

export default LikeButton;
