import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredDishes = [
    {
      id: 1,
      name: 'Butter Chicken',
      price: 180,
      image: '/src/assets/butterchicken.jpg',
      rating: 4.5,
      description: 'Creamy and delicious butter chicken'
    },
    {
      id: 2,
      name: 'Dal Makhani',
      price: 120,
      image: '/src/assets/dalmakhani.jpg',
      rating: 4.3,
      description: 'Rich and creamy black lentils'
    },
    {
      id: 3,
      name: 'Paneer Butter Masala',
      price: 150,
      image: '/src/assets/paneerbuttermasala.jpg',
      rating: 4.4,
      description: 'Soft paneer in creamy tomato gravy'
    },
    {
      id: 4,
      name: 'Veg Biryani',
      price: 140,
      image: '/src/assets/vegbiryani.jpg',
      rating: 4.2,
      description: 'Aromatic basmati rice with vegetables'
    }
  ];

  const quickActions = [
    {
      title: 'Browse Menu',
      description: 'Explore our delicious dishes',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: '/menu',
      color: 'bg-primary-600'
    },
    {
      title: 'Scan QR Code',
      description: 'Quick order with QR scan',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M12 12h-4.01M12 12v4.01M12 12v-4.01" />
        </svg>
      ),
      link: '/qr-code',
      color: 'bg-green-600'
    },
    {
      title: 'Order History',
      description: 'View your past orders',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: '/history',
      color: 'bg-blue-600'
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to Smart Canteen</h1>
          <p className="text-xl text-primary-100 mb-6">
            Discover delicious meals, quick ordering, and seamless dining experience
          </p>
          <div className="flex space-x-4">
            <Link to="/menu" className="btn-primary bg-white text-primary-900 hover:bg-primary-50">
              Browse Menu
            </Link>
            
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="card hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`${action.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
              <p className="text-gray-600">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Dishes */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Dishes</h2>
          <Link to="/menu" className="text-primary-900 hover:text-primary-700 font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="card group hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{dish.name}</h3>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-gray-600">{dish.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-900">₹{dish.price}</span>
                  <button className="btn-primary text-sm px-3 py-1">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-900 mb-2">500+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-900 mb-2">50+</div>
            <div className="text-gray-600">Delicious Dishes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-900 mb-2">24/7</div>
            <div className="text-gray-600">Service Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
