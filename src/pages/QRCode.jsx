import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QRCode = () => {
  const [qrGenerated, setQrGenerated] = useState(false);
  const [orderId] = useState('ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase());

  const generateQR = () => {
    setQrGenerated(true);
  };

  const downloadQR = () => {
    // Simulate QR code download
    alert('QR Code downloaded successfully!');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">QR Code Order</h1>
        <p className="text-gray-600">Generate QR code for quick ordering</p>
      </div>

      <div className="card text-center">
        {!qrGenerated ? (
          <div className="space-y-6">
            <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M12 12h-4.01M12 12v4.01M12 12v-4.01" />
              </svg>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Generate Your QR Code</h2>
              <p className="text-gray-600 mb-6">
                Create a QR code that can be scanned at the counter for quick ordering
              </p>
            </div>
            
            <button
              onClick={generateQR}
              className="btn-primary"
            >
              Generate QR Code
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="w-64 h-64 bg-white border-4 border-primary-200 rounded-lg mx-auto flex items-center justify-center">
              {/* QR Code Placeholder - In a real app, this would be an actual QR code */}
              <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: 64 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 ${
                      Math.random() > 0.5 ? 'bg-primary-900' : 'bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Your QR Code is Ready!</h2>
              <p className="text-gray-600 mb-4">
                Show this QR code at the counter to place your order
              </p>
              <p className="text-sm text-primary-600 font-medium">
                Order ID: {orderId}
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={downloadQR}
                className="btn-primary w-full"
              >
                Download QR Code
              </button>
              
              <button
                onClick={() => setQrGenerated(false)}
                className="btn-secondary w-full"
              >
                Generate New QR Code
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">How to use QR Code ordering:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-primary-50 rounded-lg">
            <div className="w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">1</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Generate QR Code</h4>
            <p className="text-sm text-gray-600">Click the button above to create your unique QR code</p>
          </div>
          
          <div className="text-center p-4 bg-primary-50 rounded-lg">
            <div className="w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">2</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Show at Counter</h4>
            <p className="text-sm text-gray-600">Display the QR code to the staff at the counter</p>
          </div>
          
          <div className="text-center p-4 bg-primary-50 rounded-lg">
            <div className="w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">3</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Place Order</h4>
            <p className="text-sm text-gray-600">Staff will scan and process your order quickly</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/menu" className="btn-secondary">
          Browse Menu
        </Link>
        <Link to="/cart" className="btn-primary">
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default QRCode;
