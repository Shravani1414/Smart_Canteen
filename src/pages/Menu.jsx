import React, { useState } from 'react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'main', name: 'Main Course' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Butter Chicken',
      price: 180,
      image: '/src/assets/butterchicken.jpg',
      rating: 4.5,
      category: 'main',
      description: 'Creamy and delicious butter chicken with naan',
      ingredients: 'Chicken, Butter, Cream, Tomatoes, Spices'
    },
    {
      id: 2,
      name: 'Dal Makhani',
      price: 120,
      image: '/src/assets/dalmakhani.jpg',
      rating: 4.3,
      category: 'main',
      description: 'Rich and creamy black lentils',
      ingredients: 'Black Lentils, Butter, Cream, Spices'
    },
    {
      id: 3,
      name: 'Paneer Butter Masala',
      price: 150,
      image: '/src/assets/paneerbuttermasala.jpg',
      rating: 4.4,
      category: 'main',
      description: 'Soft paneer in creamy tomato gravy',
      ingredients: 'Paneer, Butter, Tomatoes, Cream, Spices'
    },
    {
      id: 4,
      name: 'Veg Biryani',
      price: 140,
      image: '/src/assets/vegbiryani.jpg',
      rating: 4.2,
      category: 'main',
      description: 'Aromatic basmati rice with vegetables',
      ingredients: 'Basmati Rice, Mixed Vegetables, Spices'
    },
    {
      id: 5,
      name: 'Samosa',
      price: 25,
      image: '/src/assets/samosa.jpg',
      rating: 4.1,
      category: 'snacks',
      description: 'Crispy fried pastry with spiced potato filling',
      ingredients: 'Potato, Flour, Spices, Oil'
    },
    {
      id: 6,
      name: 'Vada Pav',
      price: 30,
      image: '/src/assets/vadapaav.jpg',
      rating: 4.0,
      category: 'snacks',
      description: 'Mumbai street food - spiced potato fritter in bread',
      ingredients: 'Potato, Bread, Spices, Chutney'
    },
    {
      id: 7,
      name: 'French Fries',
      price: 60,
      image: '/src/assets/frenchfries.jpg',
      rating: 4.2,
      category: 'snacks',
      description: 'Crispy golden french fries',
      ingredients: 'Potato, Oil, Salt'
    },
    {
      id: 8,
      name: 'Grilled Sandwich',
      price: 80,
      image: '/src/assets/Grilledsandwich.jpg',
      rating: 4.3,
      category: 'snacks',
      description: 'Grilled sandwich with vegetables and cheese',
      ingredients: 'Bread, Cheese, Vegetables, Butter'
    },
    {
      id: 9,
      name: 'Tea',
      price: 15,
      image: '/src/assets/tea.jpg',
      rating: 4.0,
      category: 'beverages',
      description: 'Hot masala chai',
      ingredients: 'Tea Leaves, Milk, Spices, Sugar'
    },
    {
      id: 10,
      name: 'Cold Coffee',
      price: 50,
      image: '/src/assets/coldcoffee.jpg',
      rating: 4.4,
      category: 'beverages',
      description: 'Refreshing cold coffee with ice cream',
      ingredients: 'Coffee, Milk, Ice Cream, Sugar'
    },
    {
      id: 11,
      name: 'Gulab Jamun',
      price: 40,
      image: '/src/assets/gulabjamun.jpg',
      rating: 4.5,
      category: 'desserts',
      description: 'Sweet milk dumplings in sugar syrup',
      ingredients: 'Milk Powder, Sugar, Cardamom, Rose Water'
    },
    {
      id: 12,
      name: 'Roti',
      price: 10,
      image: '/src/assets/rooti.jpg',
      rating: 4.0,
      category: 'main',
      description: 'Fresh wheat bread',
      ingredients: 'Wheat Flour, Water, Salt'
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Our Menu</h1>
          <p className="text-gray-600">Discover our delicious dishes</p>
        </div>
        
        {/* Search Bar */}
        <div className="w-full md:w-96">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="card group hover:shadow-lg transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-600">{item.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">{item.description}</p>
              
              <div className="text-xs text-gray-500">
                <strong>Ingredients:</strong> {item.ingredients}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary-900">₹{item.price}</span>
                <button className="btn-primary text-sm px-4 py-2 hover:scale-105 transition-transform">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No dishes found</h3>
          <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
