import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(" ");
  const handleClick = () => {
    setIsInCart();
  };
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {isInCart ? "Add to Cart" : "Remove from Cart"}
      </button>
    </li>
  );
}

export default Item;
