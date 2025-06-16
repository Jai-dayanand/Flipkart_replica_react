import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones, RefreshCw, TrendingUp, Zap, Award } from 'lucide-react';
import { getFeaturedProducts, getBestsellerProducts, getNewProducts } from '../data/products';

const Home = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const bestsellerProducts = getBestsellerProducts().slice(0, 4);
  const newProducts = getNewProducts().slice(0, 4);

  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      path: '/products/electronics',
      count: '2000+ Products',
    },
    {
      name: 'Fashion',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      path: '/products/fashion',
      count: '5000+ Products',
    },
    {
      name: 'Home & Kitchen',
      image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=400',
      path: '/products/home',
      count: '3000+ Products',
    },
    {
      name: 'Sports',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400',
      path: '/products/sports',
      count: '1500+ Products',
    },
    {
      name: 'Books',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
      path: '/products/books',
      count: '10000+ Products',
    },
    {
      name: 'Beauty',
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
      path: '/products/beauty',
      count: '2500+ Products',
    },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-primary-600" />,
      title: 'Free Delivery',
      description: 'Free shipping on orders above ₹500',
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: 'Secure Payment',
      description: '100% secure payment processing',
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary-600" />,
      title: '24/7 Support',
      description: 'Dedicated customer support team',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary-600" />,
      title: 'Easy Returns',
      description: '30-day hassle-free returns',
    },
  ];

  const stats = [
    { number: '10M+', label: 'Happy Customers', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '50K+', label: 'Products', icon: <Zap className="w-6 h-6" /> },
    { number: '100+', label: 'Cities', icon: <Award className="w-6 h-6" /> },
    { number: '99.9%', label: 'Satisfaction', icon: <Star className="w-6 h-6" /> },
  ];

  const ProductSection = ({ title, products, linkTo }: { title: string; products: any[]; linkTo: string }) => (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            {title}
          </h2>
          <Link
            to={linkTo}
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                <div className="flex items-center mb-2">
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
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
                Shop Smart,
                <span className="text-accent-400"> Live Better</span>
              </h1>
              <p className="mt-6 text-xl text-blue-100 leading-relaxed">
                Discover millions of products at unbeatable prices. From electronics to fashion, 
                we've got everything you need delivered right to your doorstep.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors"
                >
                  Start Shopping
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shopping"
                  className="rounded-lg shadow-2xl animate-fade-in"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent-400 rounded-full opacity-20 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-primary-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
              Shop by Category
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our wide range of product categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductSection 
        title="Featured Products" 
        products={featuredProducts} 
        linkTo="/products?featured=true" 
      />

      {/* New Arrivals */}
      <section className="bg-gray-50">
        <ProductSection 
          title="New Arrivals" 
          products={newProducts} 
          linkTo="/products?new=true" 
        />
      </section>

      {/* Bestsellers */}
      <ProductSection 
        title="Bestsellers" 
        products={bestsellerProducts} 
        linkTo="/products?bestseller=true" 
      />

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
              Why Choose FlipMart?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're committed to providing you with the best shopping experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins">
              Stay Updated
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Subscribe to our newsletter for exclusive deals and updates
            </p>
            <form className="mt-8 max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent-500 text-white font-semibold rounded-r-lg hover:bg-accent-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-blue-200">
              Join 100,000+ subscribers and get exclusive deals delivered to your inbox
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;