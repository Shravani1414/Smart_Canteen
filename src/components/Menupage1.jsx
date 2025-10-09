// src/components/MenuPage.jsx
import React, { useState } from "react";
import DishCard from "./DishCard";
import NavigationBar from "./NavigationBar";

import dalmakhani from "../assets/dalmakhani.jpg";
import paneerbuttermasala from "../assets/paneerbuttermasala.jpg";
import vegbiryani from "../assets/vegbiryani.jpg";
import frenchfries from "../assets/frenchfries.jpg";
import gulabjamun from "../assets/gulabjamun.jpg";
import tea from "../assets/tea.jpg";
import samosa from "../assets/samosa.jpg";
import vadapaav from "../assets/vadapaav.jpg";
import Grilledsandwich from "../assets/Grilledsandwich.jpg";
import coldcoffee from "../assets/coldcoffee.jpg";
import rooti from "../assets/rooti.jpg";

// ✅ Same dish data as before
const canteen1Dishes = [
  { id: 1, name: "Dal Makhani", description: "A creamy and rich lentil dish, slow-cooked for hours.", price: 80, imageUrl: dalmakhani, category: "main course" },
  { id: 2, name: "Paneer Butter Masala", description: "Soft paneer cubes in a silky, rich tomato-based gravy.", price: 120, imageUrl: paneerbuttermasala, category: "main course" },
  { id: 3, name: "Veg Biryani", description: "Fragrant basmati rice cooked with fresh vegetables.", price: 100, imageUrl: vegbiryani, category: "main course" },
  { id: 4, name: "French Fries", description: "Crispy golden potato fries.", price: 50, imageUrl: frenchfries, category: "snacks" },
  { id: 5, name: "Gulab Jamun", description: "Soft fried milk solids soaked in syrup.", price: 40, imageUrl: gulabjamun, category: "desserts" },
  { id: 6, name: "Cold Coffee", description: "Chilled coffee blended with milk and sugar.", price: 70, imageUrl: coldcoffee, category: "beverages" },
  { id: 7, name: "Samosa", description: "A fried pastry with spicy potato filling.", price: 20, imageUrl: samosa, category: "snacks" },
  { id: 8, name: "Vada Paav", description: "Fried potato patty served in a bread bun.", price: 25, imageUrl: vadapaav, category: "snacks" },
  { id: 9, name: "Tea", description: "Hot tea with milk and spices.", price: 10, imageUrl: tea, category: "beverages" },
  { id: 10, name: "Grilled Sandwich", description: "A toasted sandwich with veggies and cheese.", price: 50, imageUrl: Grilledsandwich, category: "snacks" },
  { id: 11, name: "Roti", description: "Traditional whole wheat flatbread.", price: 15, imageUrl: rooti, category: "main course" },
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (dishName) => {
    setCart([...cart, dishName]);
    alert(`${dishName} added to cart!`);
  };

  const filteredDishes = canteen1Dishes.filter((dish) =>
    selectedCategory === "all" ? true : dish.category === selectedCategory
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Canteen 1 Menu
      </h1>

      <NavigationBar onSelectCategory={setSelectedCategory} />

      <div className="grid gap-4 mt-6">
        {filteredDishes.map((dish) => (
          <DishCard
            key={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            imageUrl={dish.imageUrl}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;