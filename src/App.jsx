import React, { useState } from 'react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      id: 'insights',
      name: 'Vrexis Insights',
      tagline: 'Professional Service Monitoring',
      description: 'Monitor your websites, APIs, servers, and network equipment with real-time alerts, JWT authentication, and professional security features.',
      icon: '📊',
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      features: [
        'JWT Authentication & Rate Limiting',
        'Real-time WebSocket Monitoring',
        'Multi-protocol Support (HTTP/HTTPS/Ping)',
        'Cross-platform Deployment',
        'Professional Security Headers',
        'User Isolation & Role Management'
      ],
      stats: [
        { label: 'Uptime Monitoring', value: '99.9%' },
        { label: 'Response Time', value: '<50ms' },
        { label: 'Security Score', value: 'A+' },
        { label: 'Protocols', value: '3+' }
      ]
    },
    {
      id: 'cloud',
      name: 'Vrexis Cloud',
      tagline: 'Secure Cloud Storage',
      description: 'Professional-grade cloud storage with advanced encryption, user management, and real-time collaboration features. Keep your data local.',
      icon: '☁️',
      gradient: 'from-purple-500 via-purple-600 to-purple-700',
      features: [
        'End-to-End Encryption',
        'Multi-user Collaboration',
        'Advanced Access Controls',
        'Real-time File Sync',
        'Audit Logging & Compliance',
        'Cross-platform Access'
      ],
      stats: [
        { label: 'Storage Capacity', value: '∞' },
        { label: 'Encryption', value: 'AES-256' },
        { label: 'Availability', value: '99.99%' },
        { label: 'Users', value: 'Unlimited' }
      ]
    }
  ];

  const commonFeatures = [
    {
      icon: '🛡️',
      title: 'Professional Security',
      description: 'Built with security-first architecture, JWT authentication, and comprehensive audit logging.'
    },
    {
      icon: '⚡',
      title: 'Real-time Updates',
      description: 'Live WebSocket connections provide instant updates and notifications across all platforms.'
    },
    {
      icon: '🌐',
      title: 'Cross-platform',
      description: 'Works seamlessly across Linux, Windows, macOS, and mobile devices.'
    },
    {
      icon: '🔒',
      title: 'Self-hosted',
      description: 'Your data stays on your infrastructure. Complete control and privacy guaranteed.'
    },
    {
      icon: '⚙️',
      title: 'Easy Setup',
      description: 'Single binary deployment with automatic database migrations and health checks.'
    },
    {
      icon: '👥',
      title: 'Team Ready',
      description: 'Multi-user support with role-based access control and team collaboration features.'
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 dark bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/95 border-gray-700 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wider text-white">VREXIS</h1>
                <p className="text-xs font-medium tracking-widest text-blue-600">TECHNOLOGIES</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="font-medium hover:text-blue-600 transition-colors text-gray-300">
                Products
              </a>
              <a href="#features" className="font-medium hover:text-blue-600 transition-colors text-gray-300">
                Features
              </a>
              <a href="#security" className="font-medium hover:text-blue-600 transition-colors text-gray-300">
                Security
              </a>
              <a href="#pricing" className="font-medium hover:text-blue-600 transition-colors text-gray-300">
                Pricing
              </a>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all shadow-lg font-medium">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:bg-gray-700"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              <div className="space-y-2">
                <a href="#products" className="block px-3 py-2 rounded-lg font-medium text-gray-300 hover:bg-gray-700">
                  Products
                </a>
                <a href="#features" className="block px-3 py-2 rounded-lg font-medium text-gray-300 hover:bg-gray-700">
                  Features
                </a>
                <a href="#security" className="block px-3 py-2 rounded-lg font-medium text-gray-300 hover:bg-gray-700">
                  Security
                </a>
                <a href="#pricing" className="block px-3 py-2 rounded-lg font-medium text-gray-300 hover:bg-gray-700">
                  Pricing
                </a>
                <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg font-medium">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                ⭐
                Professional-Grade Solutions
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Professional Infrastructure
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Monitor your services and store your data with professional-grade security, 
              real-time updates, and self-hosted control. Perfect for personal projects and growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-medium">
                Explore Products
              </button>
              <button className="px-8 py-4 border-2 rounded-xl font-medium transition-all border-gray-600 text-gray-300 hover:bg-gray-800">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Our Product Suite
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Two powerful solutions designed for professional infrastructure management and secure data storage
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product) => {
              return (
                <div key={product.id} className="group p-8 rounded-2xl border transition-all hover:shadow-2xl hover:scale-105 bg-gray-800 border-gray-700 hover:border-gray-600">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <span className="text-white text-2xl">{product.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {product.name}
                      </h3>
                      <p className="text-blue-600 font-medium">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="text-lg mb-6 text-gray-300">
                    {product.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {product.stats.map((stat, index) => (
                      <div key={index} className="p-3 rounded-xl bg-gray-700">
                        <div className="text-lg font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">✓</span>
                        <span className="text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white rounded-xl hover:shadow-lg transition-all font-medium`}>
                    Learn More
                    →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Built for Professionals
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Common features across both products designed for security, scalability, and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonFeatures.map((feature, index) => {
              return (
                <div key={index} className="p-6 rounded-xl transition-all hover:shadow-lg bg-gray-700 hover:bg-gray-600">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Security First Architecture
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional-grade security built into every component from day one
            </p>
          </div>

          <div className="p-8 rounded-2xl border bg-gray-800 border-gray-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🛡️', title: 'JWT Authentication', desc: '24-hour token expiration' },
                { icon: '🔒', title: 'Rate Limiting', desc: '100/20 req/min protection' },
                { icon: '👁️', title: 'Audit Logging', desc: 'Complete activity tracking' },
                { icon: '🖥️', title: 'Self-hosted', desc: 'Your infrastructure, your control' }
              ].map((item, index) => {
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">{item.icon}</span>
                    </div>
                    <h4 className="font-semibold mb-2 text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Self-hosted solutions with one-time pricing. No subscriptions, no vendor lock-in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Personal',
                price: 'Free',
                period: '',
                features: [
                  'Full source code access',
                  'Self-hosted deployment',
                  'Community support',
                  'Basic monitoring features',
                  'Up to 5 services'
                ],
                buttonText: 'Download Now',
                buttonClass: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              },
              {
                name: 'Professional',
                price: 'Coming Soon',
                period: '',
                features: [
                  'Everything in Personal',
                  'Unlimited services',
                  'Email & Slack notifications',
                  'Advanced dashboard features',
                  'Priority support'
                ],
                buttonText: 'Coming Soon',
                buttonClass: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white'
              },
              {
                name: 'Business',
                price: 'Coming Soon',
                period: '',
                features: [
                  'Everything in Professional',
                  'Multi-user collaboration',
                  'Advanced security features',
                  'Custom branding options',
                  'Dedicated support'
                ],
                buttonText: 'Coming Soon',
                buttonClass: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white'
              }
            ].map((plan, index) => (
              <div key={index} className="relative p-8 rounded-2xl transition-all hover:shadow-xl bg-gray-700">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-green-500 text-lg flex-shrink-0">✓</span>
                      <span className="text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full px-6 py-3 rounded-xl font-medium transition-all ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 border-gray-800 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-wider text-white">VREXIS</h1>
                  <p className="text-xs font-medium tracking-widest text-blue-400">TECHNOLOGIES</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Professional infrastructure monitoring and secure cloud storage solutions. 
                Self-hosted, secure, and built for personal projects and growing businesses.
              </p>
              <div className="flex gap-4">
                <span className="text-green-400 text-sm">🔒 JWT Authentication</span>
                <span className="text-blue-400 text-sm">⚡ Real-time Updates</span>
                <span className="text-purple-400 text-sm">🛡️ Professional Security</span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vrexis Insights</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vrexis Cloud</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Sales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Vrexis Technologies. All rights reserved. Built with security and privacy in mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;