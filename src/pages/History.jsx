import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const History = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const orderHistory = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      time: '12:30 PM',
      status: 'delivered',
      total: 425.50,
      items: [
        { name: 'Butter Chicken', quantity: 2, price: 180 },
        { name: 'Dal Makhani', quantity: 1, price: 120 },
        { name: 'Samosa', quantity: 3, price: 25 }
      ],
      paymentMethod: 'UPI',
      rating: 4.5
    },
    {
      id: 'ORD-002',
      date: '2024-01-14',
      time: '6:45 PM',
      status: 'delivered',
      total: 280.00,
      items: [
        { name: 'Paneer Butter Masala', quantity: 1, price: 150 },
        { name: 'Veg Biryani', quantity: 1, price: 140 }
      ],
      paymentMethod: 'Card',
      rating: 4.2
    },
    {
      id: 'ORD-003',
      date: '2024-01-13',
      time: '1:15 PM',
      status: 'cancelled',
      total: 150.00,
      items: [
        { name: 'Grilled Sandwich', quantity: 1, price: 80 },
        { name: 'Cold Coffee', quantity: 1, price: 50 }
      ],
      paymentMethod: 'Cash',
      rating: null
    },
    {
      id: 'ORD-004',
      date: '2024-01-12',
      time: '8:20 PM',
      status: 'delivered',
      total: 95.00,
      items: [
        { name: 'Tea', quantity: 2, price: 15 },
        { name: 'Gulab Jamun', quantity: 1, price: 40 }
      ],
      paymentMethod: 'UPI',
      rating: 4.0
    }
  ];

  const filters = [
    { id: 'all', name: 'All Orders' },
    { id: 'delivered', name: 'Delivered' },
    { id: 'cancelled', name: 'Cancelled' }
  ];

  const filteredOrders = orderHistory.filter(order => 
    selectedFilter === 'all' || order.status === selectedFilter
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const reorderItems = (orderId) => {
    alert(`Reordering items from order ${orderId}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Order History</h1>
        <p className="text-gray-600">View your past orders and reorder your favorites</p>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === filter.id
                  ? 'bg-primary-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No orders found</h3>
            <p className="mt-1 text-sm text-gray-500">You haven't placed any orders yet.</p>
            <div className="mt-6">
              <Link to="/menu" className="btn-primary">
                Browse Menu
              </Link>
            </div>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="card">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                {/* Order Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
                      <p className="text-sm text-gray-600">
                        {order.date} at {order.time}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                      {order.rating && (
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm text-gray-600">{order.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-2 mb-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {item.name} x {item.quantity}
                        </span>
                        <span className="font-medium">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span>Payment: {order.paymentMethod}</span>
                    </div>
                    <div className="text-lg font-bold text-primary-900">
                      ₹{order.total}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                  {order.status === 'delivered' && (
                    <button
                      onClick={() => reorderItems(order.id)}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      Reorder
                    </button>
                  )}
                  
                  <button className="btn-secondary text-sm px-4 py-2">
                    View Details
                  </button>
                  
                  {order.status === 'delivered' && !order.rating && (
                    <button className="btn-secondary text-sm px-4 py-2">
                      Rate Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Quick Stats */}
      {filteredOrders.length > 0 && (
        <div className="mt-8 bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-900 mb-1">
                {orderHistory.filter(o => o.status === 'delivered').length}
              </div>
              <div className="text-sm text-gray-600">Orders Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-900 mb-1">
                ₹{orderHistory.reduce((total, order) => total + order.total, 0).toFixed(0)}
              </div>
              <div className="text-sm text-gray-600">Total Spent</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-900 mb-1">
                {orderHistory.filter(o => o.rating).length}
              </div>
              <div className="text-sm text-gray-600">Orders Rated</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
