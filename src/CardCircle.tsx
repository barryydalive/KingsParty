// CardCircle.tsx
import React, { useState } from "react";
import classNames from "classnames";
import cardBack from "./assets/back.svg";
import "./CardCircle.css";

interface CardCircleProps {}

const CardCircle: React.FC<CardCircleProps> = () => {
  const [cards, setCards] = useState<number[]>(
    Array.from({ length: 52 }, (_, index) => index + 1)
  );
  const radius = 200; // Increase the radius for more spacing
  const centerX = 0;
  const centerY = 0;

  const getCardPosition = (index: number) => {
    const angle = (index / 52) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { transform: `translate(${x}px, ${y}px)` };
  };

  const handleCardClick = (card: number) => {
    console.log("Clicked on card:", card);
  };

  return (
    <div className="card-circle">
      <div className="center-space"></div>
      {cards.map((card, index) => (
        <img
          key={card}
          className={classNames("card", `card-${card}`)}
          style={getCardPosition(index)}
          src={cardBack} // Adjust the path to your card images
          alt={`Card ${card}`}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
};

export default CardCircle;
