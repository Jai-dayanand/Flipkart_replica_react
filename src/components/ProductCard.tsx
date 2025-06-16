import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  discount: number;
  category: string;
  brand: string;
  isNew?: boolean;
  isBestseller?: boolean;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
  const { dispatch: cartDispatch } = useCart();
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();

  const isInWishlist = wishlistState.items.some(item => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    cartDispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      }
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist) {
      wishlistDispatch({
        type: 'REMOVE_FROM_WISHLIST',
        payload: product.id
      });
    } else {
      wishlistDispatch({
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
      });
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-64 h-48 md:h-auto relative overflow-hidden">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <div className="absolute top-3 left-3 flex flex-col space-y-1">
              <div className="bg-accent-500 text-white px-2 py-1 rounded text-sm font-semibold">
                {product.discount}% OFF
              </div>
              {product.isNew && (
                <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  NEW
                </div>
              )}
              {product.isBestseller && (
                <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  BESTSELLER
                </div>
              )}
            </div>
            <button
              onClick={handleWishlistToggle}
              className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-colors ${
                isInWishlist 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
            </button>
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-2">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
            </div>
            <p className="text-gray-600 mb-3">{product.brand}</p>
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through ml-2">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex space-x-2">
                <Link
                  to={`/product/${product.id}`}
                  className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </Link>
                <button
                  onClick={handleAddToCart}
                  className="flex items-center space-x-2 bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </Link>
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          <div className="bg-accent-500 text-white px-2 py-1 rounded text-sm font-semibold">
            {product.discount}% OFF
          </div>
          {product.isNew && (
            <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
              NEW
            </div>
          )}
          {product.isBestseller && (
            <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">
              BESTSELLER
            </div>
          )}
        </div>
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-colors ${
            isInWishlist 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-gray-400 hover:text-red-500'
          }`}
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <Link
            to={`/product/${product.id}`}
            className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button
            onClick={handleAddToCart}
            className="bg-accent-500 text-white p-2 rounded-full hover:bg-accent-600 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
        </div>
        <div className="mb-3">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500 line-through ml-2">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center space-x-2 bg-accent-500 text-white py-2 rounded-lg hover:bg-accent-600 transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;