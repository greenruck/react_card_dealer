import React, { useState } from "react";
import "./Card.css";

/** Single card: just renders the card as received from deck. */

function Card({ name, image }) {
  // get these once; it will never be updated for the same card
  const [{ angle, xCord, yCord }] = useState({
    angle: Math.random() * 88 - 44,
    xCord: Math.random() * 44 - 22,
    yCord: Math.random() * 44 - 22,
  });

  const transform = `translate(${xCord}px, ${yCord}px) rotate(${angle}deg)`;

  return <img
      className="Card"
      alt={name}
      src={image}
      style={{ transform }} />;
}

export default Card;
