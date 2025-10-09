import React, { useState } from 'react'; // Import useState
import DishCard from './DishCard';
import NavigationBar from './NavigationBar'; // Import the new component
import './Menupage2.css';
import './NavigationBar.css'; // Don't forget to import its CSS

// --- Canteen 2 Specific Image Imports ---
// NOTE: I am assuming you have 'butterchicken.jpg' in your assets folder.
// If the file is named differently, please update the import path.
import butterchicken from "../assets/butterchicken.jpg"; 

// Reusing existing Canteen 1 assets for common/similar items
import paneerbuttermasala from "../assets/paneerbuttermasala.jpg";
import vegbiryani from "../assets/vegbiryani.jpg"; 
import tea from "../assets/tea.jpg";
import samosa from "../assets/samosa.jpg";
import rooti from "../assets/rooti.jpg";
// Removed unused imports like dalmakhani, gulabjamun, etc.

const canteen2Dishes = [
  {
    id: 1,
    name: 'Butter Chicken',
    description: 'Tender chicken pieces cooked in a rich, creamy tomato gravy.',
    price: 180.00,
    imageUrl: butterchicken,
    category: 'main course', 
  },
  {
    id: 2,
    name: 'Biryani (Chicken/Veg)',
    description: 'Fragrant basmati rice slow-cooked with spices and choice of protein.',
    price: 150.00,
    imageUrl: vegbiryani, // Placeholder image for Biryani
    category: 'main course', 
  },
  {
    id: 3,
    name: 'Paneer Masala',
    description: 'Soft cottage cheese cubes in a savory, semi-dry onion-tomato gravy.',
    price: 130.00,
    imageUrl: paneerbuttermasala, // Placeholder image for Paneer
    category: 'main course', 
  },
  {
    id: 4,
    name: 'Roti',
    description: 'Freshly made whole wheat flatbread (1 pc).',
    price: 15.00,
    imageUrl: rooti,
    category: 'main course', 
  },
  {
    id: 5,
    name: 'Samosa',
    description: 'Crispy fried pastry filled with spiced potatoes and peas (2 pcs).',
    price: 30.00,
    imageUrl: samosa,
    category: 'snacks', 
  },
  {
    id: 6,
    name: 'Masala Tea',
    description: 'A comforting cup of hot tea brewed with traditional Indian spices.',
    price: 20.00,
    imageUrl: tea,
    category: 'beverages', 
  },
];

const Menupage2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDishes = canteen2Dishes.filter(dish => { // <-- Now filtering Canteen 2 dishes
    if (selectedCategory === 'all') {
      return true;
    }
    return dish.category === selectedCategory;
  });

  return (
    <div className="menu-container">
      <h1 className="menu-heading">Biotech Menu</h1>
      <NavigationBar onSelectCategory={setSelectedCategory} />
      <div className="dish-list">
        {filteredDishes.map(dish => (
          <DishCard
            key={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            imageUrl={dish.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Menupage2;
