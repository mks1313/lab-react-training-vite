import { useState, useEffect } from "react";

const Dice = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const diceImages = [
    "/src/assets/images/dice1.png",
    "/src/assets/images/dice2.png",
    "/src/assets/images/dice3.png",
    "/src/assets/images/dice4.png",
    "/src/assets/images/dice5.png",
    "/src/assets/images/dice6.png",
  ];

  const emptyDiceImage = "/src/assets/images/dice-empty.png";

  const handleClick = () => {
    if (!isRolling) {
      setIsRolling(true);

      setDiceValue(0);

      setTimeout(() => {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(randomValue);
        setIsRolling(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const initialRandomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(initialRandomValue);
  }, []);

  return (
    <div className="dice" onClick={handleClick}>
      <img
        src={isRolling ? emptyDiceImage : diceImages[diceValue - 1]}
        alt={`Dice ${diceValue}`}
      />
    </div>
  );
};

export default Dice;
