import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  const removeFromWishlist = (id: string) => {
    wishlistDispatch({
      type: 'REMOVE_FROM_WISHLIST',
      payload: id
    });
  };

  const addToCart = (item: any) => {
    cartDispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      }
    });
  };

  const moveToCart = (item: any) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  if (wishlistState.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-24 h-24 text-gray-300" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 font-poppins mb-4">
            Your Wishlist is Empty
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Save items you love to your wishlist and shop them later.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 font-poppins">
          My Wishlist ({wishlistState.items.length} items)
        </h1>
        <button
          onClick={() => wishlistDispatch({ type: 'CLEAR_WISHLIST' })}
          className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
          <span>Clear Wishlist</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistState.items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div className="relative aspect-square overflow-hidden">
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <div className="absolute top-3 left-3 bg-accent-500 text-white px-2 py-1 rounded text-sm font-semibold">
                {item.discount}% OFF
              </div>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 bg-white text-red-500 p-2 rounded-full shadow-md hover:bg-red-50 transition-colors"
              >
                <Heart className="w-4 h-4 fill-current" />
              </button>
            </div>
            <div className="p-4">
              <Link to={`/product/${item.id}`}>
                <h3 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors mb-1 line-clamp-2">
                  {item.name}
                </h3>
              </Link>
              <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(item.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">{item.rating}</span>
              </div>
              <div className="mb-4">
                <span className="text-xl font-bold text-gray-900">
                  ₹{item.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ₹{item.originalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => moveToCart(item)}
                  className="flex-1 flex items-center justify-center space-x-2 bg-accent-500 text-white py-2 px-3 rounded-lg hover:bg-accent-600 transition-colors text-sm"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Move to Cart</span>
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-6">
          You might also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: '17',
              name: 'Wireless Mouse',
              price: 1299,
              originalPrice: 1999,
              image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=300',
              rating: 4.3,
              discount: 35,
              brand: 'Logitech'
            },
            {
              id: '18',
              name: 'Bluetooth Speaker',
              price: 2999,
              originalPrice: 4499,
              image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300',
              rating: 4.5,
              discount: 33,
              brand: 'JBL'
            },
            {
              id: '19',
              name: 'Phone Stand',
              price: 599,
              originalPrice: 999,
              image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=300',
              rating: 4.2,
              discount: 40,
              brand: 'Generic'
            },
            {
              id: '20',
              name: 'USB Cable',
              price: 299,
              originalPrice: 499,
              image: 'https://images.pexels.com/photos/163125/phone-old-year-built-1955-163125.jpeg?auto=compress&cs=tinysrgb&w=300',
              rating: 4.1,
              discount: 40,
              brand: 'Anker'
            },
          ].map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">{product.rating}</span>
                </div>
                <div className="mb-3">
                  <span className="text-lg font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => wishlistDispatch({
                    type: 'ADD_TO_WISHLIST',
                    payload: {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      originalPrice: product.originalPrice,
                      image: product.image,
                      rating: product.rating,
                      discount: product.discount,
                      brand: product.brand,
                    }
                  })}
                  className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
                >
                  <Heart className="w-4 h-4" />
                  <span>Add to Wishlist</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;