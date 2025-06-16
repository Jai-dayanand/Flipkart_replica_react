import React from 'react';
import { Users, Award, Globe, Heart, Truck, Shield, Headphones, RefreshCw } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10M+', label: 'Happy Customers', icon: <Users className="w-8 h-8" /> },
    { number: '50K+', label: 'Products', icon: <Award className="w-8 h-8" /> },
    { number: '100+', label: 'Cities', icon: <Globe className="w-8 h-8" /> },
    { number: '99.9%', label: 'Satisfaction Rate', icon: <Heart className="w-8 h-8" /> },
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-primary-600" />,
      title: 'Customer First',
      description: 'Every decision we make starts with our customers. We strive to exceed expectations and build lasting relationships.',
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-600" />,
      title: 'Trust & Security',
      description: 'We prioritize the security of your data and transactions with industry-leading encryption and security measures.',
    },
    {
      icon: <Award className="w-12 h-12 text-primary-600" />,
      title: 'Quality Excellence',
      description: 'We partner with trusted brands and sellers to ensure every product meets our high standards of quality.',
    },
    {
      icon: <Globe className="w-12 h-12 text-primary-600" />,
      title: 'Innovation',
      description: 'We continuously evolve our platform with cutting-edge technology to enhance your shopping experience.',
    },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Visionary leader with 15+ years in e-commerce and technology.',
    },
    {
      name: 'Priya Sharma',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Tech innovator driving our platform\'s technical excellence.',
    },
    {
      name: 'Amit Patel',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Operations expert ensuring seamless logistics and delivery.',
    },
    {
      name: 'Sneha Gupta',
      position: 'Customer Experience Lead',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Passionate about creating exceptional customer experiences.',
    },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-primary-600" />,
      title: 'Fast Delivery',
      description: 'Same-day and next-day delivery options available',
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: 'Secure Payments',
      description: 'Multiple secure payment options with fraud protection',
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support in multiple languages',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary-600" />,
      title: 'Easy Returns',
      description: 'Hassle-free returns and exchanges within 30 days',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              About <span className="text-accent-400">FlipMart</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transforming the way India shops online with innovation, trust, and exceptional service since 2015.
            </p>
          </div>
          
          {/* Video Integration */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Our Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  FlipMart began as a small startup with a big dream - to make online shopping accessible, 
                  affordable, and enjoyable for every Indian. Founded in 2015 by a team of passionate entrepreneurs, 
                  we started with just a handful of products and unlimited ambition.
                </p>
                <p>
                  Today, we've grown to become one of India's leading e-commerce platforms, serving millions 
                  of customers across 100+ cities. Our journey has been marked by continuous innovation, 
                  customer-centricity, and an unwavering commitment to quality.
                </p>
                <p>
                  From humble beginnings in a small office to our current state-of-the-art fulfillment centers, 
                  we've remained true to our core mission: making shopping simple, secure, and satisfying for everyone.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our journey"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">8+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate individuals driving FlipMart's success and innovation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">
              Why Customers Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and value at every step of your journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

      {/* Mission Statement */}
      <section className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              "To democratize commerce by connecting millions of buyers and sellers through technology, 
              creating economic opportunities and making quality products accessible to everyone, everywhere."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;