import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Initialize the selectedCategory state variable with a default value
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Create a filteredItems array to store items based on the selected category
  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Add an onChange event handler to update selectedCategory */}
        <select name="filter" onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;