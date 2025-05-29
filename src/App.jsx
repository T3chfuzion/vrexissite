import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './assets/logo.webp';

// Navbar Component - Mobile Responsive
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <img src={logo} height="30" className="d-md-none" alt="Vrexis" />
          <img src={logo} height="40" className="d-none d-md-inline" alt="Vrexis Insights" />
        </Link>
        
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#security" onClick={() => setIsMenuOpen(false)}>Security</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/demo" onClick={() => setIsMenuOpen(false)}>Demo</Link>
            </li>
          </ul>
          <div className="d-flex flex-column flex-lg-row gap-2">
            <Link to="/demo" className="btn btn-primary btn-sm" onClick={() => setIsMenuOpen(false)}>
              Try Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section - Mobile Optimized
function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100 py-5">
          <div className="col-lg-6 hero-content text-center text-lg-start order-2 order-lg-1">
            <div className="mb-3">
              <span className="badge bg-success bg-opacity-20 text-success px-3 py-2 rounded-pill">
                🚀 JWT Authentication & Rate Limiting
              </span>
            </div>
            <h1 className="display-6 display-md-5 display-lg-4 mb-4 fw-bold lh-1">
              Enterprise-Grade Service Monitoring Platform
            </h1>
            <p className="lead mb-4 text-white-75 fs-6">
              Monitor your websites, APIs, servers, and network equipment with real-time alerts, 
              JWT authentication, rate limiting, and enterprise security.
            </p>
            <div className="d-grid d-sm-flex gap-3 justify-content-center justify-content-lg-start mb-4">
              <Link to="/demo" className="btn btn-light btn-lg px-4 py-3">
                🔒 Try Live Demo
              </Link>
              <a href="#features" className="btn btn-outline-light btn-lg px-4 py-3">
                🛡️ Features
              </a>
            </div>
            <div className="text-center text-lg-start">
              <small className="text-white-50 d-block">
                ✅ Self-hosted • 🔐 Enterprise Security • ⚡ Real-time
              </small>
            </div>
          </div>
          
          <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
            <div className="demo-preview mx-auto">
              <DemoPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mobile-Optimized Demo Preview Component
function DemoPreview() {
  return (
    <div className="demo-preview-card p-3 p-md-4">
      <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
        <div className="flex-grow-1 min-w-0">
          <h6 className="mb-1 fs-6">🚀 Vrexis Insights</h6>
          <small className="text-white-50 text-truncate d-block">admin@vrexisinsights.com</small>
        </div>
        <div className="d-flex gap-1 flex-shrink-0">
          <span className="badge bg-success" style={{fontSize: '0.65rem'}}>🔗 Connected</span>
          <span className="badge bg-info" style={{fontSize: '0.65rem'}}>🔒 Secure</span>
        </div>
      </div>
      
      <div className="bg-success bg-opacity-20 border border-success rounded p-2 mb-3">
        <div className="d-flex align-items-center">
          <span className="text-success me-2">🛡️</span>
          <small className="text-success fw-bold" style={{fontSize: '0.7rem'}}>
            Secure Monitoring Active
          </small>
        </div>
      </div>
      
      {/* Mobile-optimized stats grid */}
      <div className="row g-1 g-md-2 mb-3">
        {[
          { value: 4, label: 'Online', color: 'success' },
          { value: 1, label: 'Offline', color: 'danger' },
          { value: 4, label: 'HTTPS', color: 'primary' },
          { value: 2, label: 'Sites', color: 'info' },
          { value: '85ms', label: 'HTTP', color: 'warning' },
          { value: '23ms', label: 'Ping', color: 'success' }
        ].map((stat, index) => (
          <div key={index} className="col-4 col-sm-2">
            <div className="bg-white rounded p-2 text-center">
              <div className={`fw-bold text-${stat.color}`} style={{fontSize: '0.8rem'}}>
                {stat.value}
              </div>
              <small className="text-muted" style={{fontSize: '0.6rem'}}>
                {stat.label}
              </small>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded p-3">
        <ServicePreviewItem
          icon="🌐"
          name="Production API"
          url="https://api.mycompany.com"
          status="online"
          secure={true}
        />
        <ServicePreviewItem
          icon="🖥️"
          name="Database Server"
          url="192.168.1.100"
          status="online"
          ping={true}
        />
        <ServicePreviewItem
          icon="🔧"
          name="Network Printer"
          url="printer.local"
          status="offline"
          warning={true}
          isLast={true}
        />
      </div>
      
      <div className="text-center mt-3">
        <small className="text-muted" style={{fontSize: '0.7rem'}}>
          ↑ Real dashboard with JWT authentication
        </small>
      </div>
    </div>
  );
}

// Mobile-optimized Service Preview Item
function ServicePreviewItem({ icon, name, url, status, secure, ping, warning, isLast }) {
  return (
    <div className={`d-flex justify-content-between align-items-center py-2 ${!isLast ? 'border-bottom' : ''}`}>
      <div className="d-flex align-items-center flex-grow-1 min-w-0">
        <span className="me-2 flex-shrink-0">{icon}</span>
        <div className="min-w-0 flex-grow-1">
          <div className="d-flex align-items-center gap-1">
            <small className="fw-bold text-truncate">{name}</small>
            {secure && <span className="text-success flex-shrink-0" title="Secure">🔒</span>}
            {ping && <span className="text-muted flex-shrink-0" title="Ping">🏓</span>}
            {warning && <span className="text-danger flex-shrink-0" title="Warning">⚠️</span>}
          </div>
          <div className="text-muted text-truncate" style={{fontSize: '0.65rem'}}>{url}</div>
        </div>
      </div>
      <span className={`badge bg-${status === 'online' ? 'success' : 'danger'} flex-shrink-0 ms-2`} 
            style={{fontSize: '0.65rem'}}>
        {status === 'online' ? '✅' : '❌'}
      </span>
    </div>
  );
}

// Mobile-Responsive Features Section
function Features() {
  const features = [
    {
      icon: "🔐",
      title: "JWT Authentication",
      description: "Secure user accounts with JWT tokens, bcrypt password hashing, and role-based access control."
    },
    {
      icon: "🛡️",
      title: "Rate Limiting",
      description: "Token bucket algorithm prevents abuse and ensures fair usage across all users."
    },
    {
      icon: "⚡",
      title: "Real-time Monitoring",
      description: "Live updates via WebSocket connections. Monitor HTTP response times and service status."
    },
    {
      icon: "🌐",
      title: "Multi-Protocol Support",
      description: "Monitor HTTPS/HTTP APIs, IP addresses, hostnames, and network equipment."
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "HSTS, CSP, input validation. Built-in XSS protection and SQL injection prevention."
    },
    {
      icon: "📊",
      title: "Cross-Platform",
      description: "Pure Go backend with SQLite. Runs on Linux, Windows, macOS without dependencies."
    },
    {
      icon: "🏓",
      title: "Smart Ping Monitoring",
      description: "Cross-platform ping monitoring with automatic OS detection for network devices."
    },
    {
      icon: "🔔",
      title: "User Dashboards",
      description: "Each user gets their own isolated dashboard with proper access control."
    },
    {
      icon: "🚀",
      title: "Production-Ready",
      description: "Graceful shutdown, health checks, database migrations, and error handling."
    }
  ];

  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fs-1 fs-md-2">Built for DevOps Teams</h2>
          <p className="text-muted mb-0 px-3">
            Every feature designed with security, scalability, and user experience in mind
          </p>
        </div>
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon mb-3">
                  {feature.icon}
                </div>
                <h5 className="mb-3 fs-6 fs-md-5">{feature.title}</h5>
                <p className="text-muted mb-0 small">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <ArchitecturePreview />
      </div>
    </section>
  );
}

// Mobile-Responsive Architecture Preview
function ArchitecturePreview() {
  return (
    <div className="row mt-5">
      <div className="col-12">
        <div className="text-center mb-4">
          <h3 className="mb-3 fs-4">Modern Architecture</h3>
          <p className="text-muted">Built with Go, React, and enterprise-grade security</p>
        </div>
        
        <div className="card shadow-sm">
          <div className="card-body p-3 p-md-4">
            <div className="row g-3 text-center">
              {[
                {
                  title: "⚡ Go Backend",
                  color: "primary",
                  features: ["JWT Authentication", "Rate Limiting", "WebSocket Support", "SQLite Database", "Cross-platform"]
                },
                {
                  title: "🎨 React Frontend",
                  color: "success",
                  features: ["Real-time Dashboard", "Authentication UI", "Rate Limit Handling", "Responsive Design", "Dark/Light Mode"]
                },
                {
                  title: "🛡️ Security Layer",
                  color: "warning",
                  features: ["Input Validation", "CORS Protection", "Security Headers", "User Isolation", "Audit Logging"]
                }
              ].map((arch, index) => (
                <div key={index} className="col-md-4 mb-3 mb-md-0">
                  <div className="border rounded p-3 h-100">
                    <h6 className={`text-${arch.color} mb-3 fs-6`}>{arch.title}</h6>
                    <ul className="list-unstyled text-start mb-0">
                      {arch.features.map((feature, idx) => (
                        <li key={idx} className="small mb-1">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-4">
              <Link to="/demo" className="btn btn-primary btn-lg">
                🔒 Try Interactive Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile-Responsive Security Section
function Security() {
  const securityFeatures = [
    {
      icon: "🔐",
      title: "JWT Authentication System",
      description: "Secure user accounts with JSON Web Tokens, bcrypt password hashing, and automatic token refresh."
    },
    {
      icon: "🛡️",
      title: "Advanced Rate Limiting",
      description: "Token bucket algorithm with configurable limits prevents brute force attacks and abuse."
    },
    {
      icon: "🔒",
      title: "Input Validation",
      description: "Comprehensive input validation, XSS protection, SQL injection prevention, and dangerous host detection."
    },
    {
      icon: "👤",
      title: "User Isolation",
      description: "Each user only sees their own services. Role-based access control with proper data isolation."
    },
    {
      icon: "📊",
      title: "Security Headers",
      description: "HSTS, CSP, X-Frame-Options, and comprehensive CORS protection with origin validation."
    },
    {
      icon: "🔍",
      title: "Audit Logging",
      description: "Comprehensive security event logging, rate limit violation tracking, and user action auditing."
    }
  ];

  return (
    <section id="security" className="py-5" style={{backgroundColor: '#f0fdf4'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fs-1 fs-md-2">🔒 Security-First Architecture</h2>
          <p className="text-muted px-3">Built with enterprise security standards from day one</p>
        </div>

        <div className="row g-4 mb-5">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-3 p-md-4 text-center">
                  <div className="fs-1 mb-3 text-success">{feature.icon}</div>
                  <h6 className="card-title mb-3 fs-6">{feature.title}</h6>
                  <p className="card-text text-muted small mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SecurityImplementation />
      </div>
    </section>
  );
}

// Mobile-Responsive Security Implementation
function SecurityImplementation() {
  const securityStats = [
    { label: "JWT Tokens", detail: "24-hour expiration" },
    { label: "Rate Limiting", detail: "100/20 req/min" },
    { label: "Bcrypt Hashing", detail: "Password protection" },
    { label: "Input Validation", detail: "XSS/SQLi prevention" }
  ];

  return (
    <div className="row">
      <div className="col-12">
        <div className="card bg-primary bg-opacity-10 border-primary">
          <div className="card-body p-3 p-md-4">
            <h5 className="text-primary mb-4 text-center fs-6">🏆 Security Implementation</h5>
            <div className="row g-3">
              {securityStats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="text-center">
                    <div className="fw-bold text-primary small">{stat.label}</div>
                    <small className="text-muted" style={{fontSize: '0.75rem'}}>{stat.detail}</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <small className="text-muted">
                All security features are built-in and enabled by default.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile-Responsive Pricing Section
function Pricing() {
  const pricingPlans = [
    {
      name: "Open Source",
      price: "Free",
      period: "/forever",
      features: [
        "JWT Authentication & Rate Limiting",
        "Real-time WebSocket monitoring",
        "Multi-protocol support",
        "Cross-platform deployment",
        "User management & isolation",
        "Security headers & validation",
        "Self-hosted deployment",
        "Community support"
      ],
      buttonText: "📦 Download on GitHub",
      buttonClass: "btn-outline-primary",
      href: "https://github.com/yourusername/vrexis-insights"
    },
    {
      name: "Professional",
      price: "$49",
      period: "/one-time",
      featured: true,
      features: [
        "Everything in Open Source",
        "🔔 Email & Slack alerts",
        "📊 Advanced analytics",
        "🎨 Custom dashboards",
        "🔌 Webhook integrations",
        "📱 Mobile-optimized interface",
        "🛠️ Priority support",
        "🔄 Automatic updates"
      ],
      buttonText: "🚀 Get Professional",
      buttonClass: "btn-primary"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/one-time",
      features: [
        "Everything in Professional",
        "🏢 Multi-tenant architecture",
        "🔐 SSO & LDAP integration",
        "📈 Compliance reporting",
        "🎯 SLA tracking",
        "🏷️ White-label customization",
        "🛡️ Enhanced security",
        "📞 Dedicated support"
      ],
      buttonText: "🏢 Contact Sales",
      buttonClass: "btn-outline-primary"
    }
  ];

  return (
    <section id="pricing" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fs-1 fs-md-2">Simple, Transparent Pricing</h2>
          <p className="text-muted px-3">Self-hosted solution with enterprise security included</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={`pricing-card h-100 ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && (
                  <div className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-2">
                    Most Popular
                  </div>
                )}
                <h4 className={`text-center mb-4 fs-5 ${plan.featured ? 'mt-4' : ''}`}>{plan.name}</h4>
                <div className="text-center mb-4">
                  <span className="h3 text-primary">{plan.price}</span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 small">✅ {feature}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  {plan.href ? (
                    <a href={plan.href} className={`btn ${plan.buttonClass} w-100`}>
                      {plan.buttonText}
                    </a>
                  ) : (
                    <button className={`btn ${plan.buttonClass} w-100`}>
                      {plan.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <PricingFAQ />
      </div>
    </section>
  );
}

// Mobile-Responsive FAQ
function PricingFAQ() {
  const faqs = [
    {
      question: "🔒 Is it really secure?",
      answer: "Yes! Built with JWT auth, rate limiting, and enterprise security from day one."
    },
    {
      question: "🏠 Self-hosted only?",
      answer: "Yes, your data stays on your infrastructure. No cloud dependencies."
    },
    {
      question: "🔄 Free updates?",
      answer: "Open source gets community updates. Paid versions include priority updates."
    }
  ];

  return (
    <div className="row mt-5">
      <div className="col-12">
        <div className="bg-light rounded p-4">
          <h6 className="mb-4 text-center">🤔 Frequently Asked Questions</h6>
          <div className="row g-4">
            {faqs.map((faq, index) => (
              <div key={index} className="col-md-4">
                <div className="text-center">
                  <strong className="d-block mb-2 small">{faq.question}</strong>
                  <p className="text-muted mb-0 small">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile-Responsive Footer
function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { text: "Features", href: "#features" },
        { text: "Security", href: "#security" },
        { text: "Demo", to: "/demo" },
        { text: "Pricing", href: "#pricing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Documentation", href: "#" },
        { text: "API Reference", href: "#" },
        { text: "GitHub", href: "#" },
        { text: "Community", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "#" },
        { text: "Contact Us", href: "#" },
        { text: "Bug Reports", href: "#" },
        { text: "Feature Requests", href: "#" }
      ]
    }
  ];

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <img src={logo} height="40" alt="Vrexis Insights" className="mb-3" />
            <p className="text-white-50 small">
              Enterprise-grade service monitoring platform with JWT authentication, rate limiting, 
              and real-time monitoring.
            </p>
            <div className="mt-3">
              <small className="text-success">
                🔒 JWT Authentication • 🛡️ Rate Limiting • ⚡ Real-time Monitoring
              </small>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index} className="col-lg-2 col-md-6 col-6">
              <h6 className="mb-3 fs-6">{section.title}</h6>
              <ul className="list-unstyled">
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    {link.to ? (
                      <Link to={link.to} className="small">{link.text}</Link>
                    ) : (
                      <a href={link.href} className="small">{link.text}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="col-lg-2 col-md-6">
            <h6 className="mb-3 fs-6">Connect</h6>
            <p className="text-white-50 mb-3 small">Stay updated on new features.</p>
            <div className="d-flex">
              <input type="email" className="form-control form-control-sm me-2" placeholder="Email" />
              <button className="btn btn-primary btn-sm">Subscribe</button>
            </div>
          </div>
        </div>
        
        <hr className="my-4 opacity-25" />
        <div className="text-center text-white-50">
          <p className="mb-2 small">&copy; 2025 Vrexis Insights. All rights reserved.</p>
          <small style={{fontSize: '0.75rem'}}>
            Built with Go, React, and enterprise security standards.
          </small>
        </div>
      </div>
    </footer>
  );
}

// Home Page
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Security />
      <Pricing />
      <Footer />
    </>
  );
}

// Mobile-Responsive Demo Page
function DemoPage() {
  const [user] = useState({
    email: "demo@vrexisinsights.com",
    first_name: "Demo",
    last_name: "User"
  });
  
  const [darkMode, setDarkMode] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [connectionStatus] = useState('connected');
  const [securityStatus] = useState('secure');
  const [encryptionEnabled] = useState(true);
  const [isRateLimited] = useState(false);
  const [rateLimitInfo] = useState({
    limit: 100,
    remaining: 87,
    reset: Date.now() + 60000
  });
  
  // Demo services data
  const [services] = useState([
    {
      id: "1",
      name: "Production API",
      url: "https://api.mycompany.com",
      type: "website",
      status: "up",
      latency: 45,
      ping_latency: 23,
      last_checked: new Date(Date.now() - 30000).toISOString(),
      user_id: "demo-user"
    },
    {
      id: "2", 
      name: "Main Website",
      url: "https://mycompany.com",
      type: "website",
      status: "up",
      latency: 120,
      ping_latency: 34,
      last_checked: new Date(Date.now() - 45000).toISOString(),
      user_id: "demo-user"
    },
    {
      id: "3",
      name: "Database Server", 
      url: "192.168.1.100",
      type: "server",
      status: "up",
      latency: 0,
      ping_latency: 12,
      last_checked: new Date(Date.now() - 60000).toISOString(),
      user_id: "demo-user"
    },
    {
      id: "4",
      name: "File Server",
      url: "192.168.1.50",
      type: "server", 
      status: "down",
      latency: 0,
      ping_latency: 0,
      last_checked: new Date(Date.now() - 300000).toISOString(),
      user_id: "demo-user"
    },
    {
      id: "5",
      name: "Network Printer",
      url: "printer.local",
      type: "misc",
      status: "up", 
      latency: 0,
      ping_latency: 8,
      last_checked: new Date(Date.now() - 120000).toISOString(),
      user_id: "demo-user"
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Demo: Simulating real-time updates...');
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Stats calculations
  const upServices = services.filter(s => s.status === 'up').length;
  const downServices = services.filter(s => s.status === 'down').length;
  const secureServices = services.filter(s => s.url && s.url.startsWith('https://')).length;
  const statsByType = {
    website: services.filter(s => s.type === 'website').length,
    server: services.filter(s => s.type === 'server').length,
    misc: services.filter(s => s.type === 'misc').length
  };
  
  const avgLatency = Math.round(
    services.filter(s => s.status === 'up' && s.latency > 0)
      .reduce((sum, s) => sum + s.latency, 0) / 
    services.filter(s => s.status === 'up' && s.latency > 0).length || 0
  );
  
  const avgPingLatency = Math.round(
    services.filter(s => s.ping_latency > 0)
      .reduce((sum, s) => sum + s.ping_latency, 0) / 
    services.filter(s => s.ping_latency > 0).length || 0
  );

  // Helper functions
  const getTypeIcon = (type) => {
    switch (type) {
      case 'website': return '🌐';
      case 'server': return '🖥️';
      case 'misc': return '🔧';
      default: return '❓';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'website': return 'Website/API';
      case 'server': return 'Server';
      case 'misc': return 'Network Equipment';
      default: return 'Unknown';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'up':
        return <span className="badge bg-success">✅ Online</span>;
      case 'down':
        return <span className="badge bg-danger">❌ Offline</span>;
      default:
        return <span className="badge bg-secondary">❓ Unknown</span>;
    }
  };

  const getStatusIndicator = () => {
    if (connectionStatus === 'connected' && securityStatus === 'secure') {
      return (
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-success">🔗 Connected</span>
          {encryptionEnabled && <span className="badge bg-info">🔒 Secure</span>}
        </div>
      );
    }
    return <span className="badge bg-secondary">⏳ Connecting...</span>;
  };

  const formatLastChecked = (lastChecked) => {
    if (!lastChecked) return 'Never';
    const date = new Date(lastChecked);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  const themeClass = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
  const cardClass = darkMode ? 'bg-secondary text-light' : 'bg-white';
  const inputClass = darkMode ? 'bg-dark text-light border-secondary' : '';

  return (
    <>
      <Navbar />
      
      {/* Mobile-Responsive Demo Banner */}
      <div className="demo-banner">
        <div className="container">
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center text-center gap-2">
            <span>
              <strong>🎭 INTERACTIVE DEMO</strong> - Experience Vrexis Insights platform
            </span>
            <Link to="/" className="btn btn-sm btn-light">← Back</Link>
          </div>
        </div>
      </div>
      
      <div className={`${themeClass} min-vh-100`} style={{paddingTop: '140px'}}>
        <div className="status-indicator d-none d-md-block">
          {getStatusIndicator()}
        </div>

        <div className="container py-4">
          <DemoHeader user={user} darkMode={darkMode} setDarkMode={setDarkMode} encryptionEnabled={encryptionEnabled} connectionStatus={connectionStatus} />

          <DemoAlerts rateLimitInfo={rateLimitInfo} isRateLimited={isRateLimited} securityStatus={securityStatus} connectionStatus={connectionStatus} />

          <DemoStats upServices={upServices} downServices={downServices} secureServices={secureServices} statsByType={statsByType} avgLatency={avgLatency} avgPingLatency={avgPingLatency} cardClass={cardClass} />

          <DemoServices services={services} showAddForm={showAddForm} setShowAddForm={setShowAddForm} cardClass={cardClass} darkMode={darkMode} inputClass={inputClass} encryptionEnabled={encryptionEnabled} connectionStatus={connectionStatus} getTypeIcon={getTypeIcon} getTypeLabel={getTypeLabel} getStatusBadge={getStatusBadge} formatLastChecked={formatLastChecked} />
        </div>
      </div>
      <Footer />
    </>
  );
}

// Mobile-Responsive Demo Header
function DemoHeader({ user, darkMode, setDarkMode, encryptionEnabled, connectionStatus }) {
  return (
    <header className="mb-4">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-3">
        <div className="flex-grow-1">
          <h2 className="mb-1 fs-4 fs-md-3">🚀 Vrexis Insights</h2>
          <p className="text-muted mb-0 small">
            Welcome back, {user?.first_name || 'Demo User'}
          </p>
          {encryptionEnabled && connectionStatus === 'connected' && (
            <small className="text-success d-block">
              🔒 Enterprise encryption active • All data secured
            </small>
          )}
        </div>
        
        <div className="d-flex gap-2 flex-shrink-0">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`btn btn-sm btn-${darkMode ? 'light' : 'dark'}`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button className="btn btn-sm btn-outline-danger">
            🚪 Logout
          </button>
        </div>
      </div>
      
      {/* Mobile status indicator */}
      <div className="d-block d-md-none mt-3">
        <div className="d-flex justify-content-center">
          {encryptionEnabled && connectionStatus === 'connected' && (
            <div className="d-flex gap-2">
              <span className="badge bg-success">🔗 Connected</span>
              <span className="badge bg-info">🔒 Secure</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// Mobile-Responsive Demo Alerts
function DemoAlerts({ rateLimitInfo, isRateLimited, securityStatus, connectionStatus }) {
  return (
    <>
      {rateLimitInfo && !isRateLimited && (
        <div className="alert alert-info d-flex align-items-start mb-4" role="alert">
          <span className="me-2 flex-shrink-0">📊</span>
          <div className="small">
            <strong>Rate Limit Status:</strong> {rateLimitInfo.remaining || 0} requests remaining of {rateLimitInfo.limit || 0} per minute
          </div>
        </div>
      )}

      {securityStatus === 'secure' && connectionStatus === 'connected' && (
        <div className="alert alert-success d-flex align-items-start mb-4" role="alert">
          <span className="me-2 flex-shrink-0">🛡️</span>
          <div className="small">
            <strong>Secure Monitoring Active</strong> - JWT authentication, rate limiting, TLS encryption, and enterprise-grade security enabled
          </div>
        </div>
      )}
    </>
  );
}

// Mobile-Responsive Demo Stats
function DemoStats({ upServices, downServices, secureServices, statsByType, avgLatency, avgPingLatency, cardClass }) {
  const stats = [
    { value: upServices, label: 'Online', icon: '✅', color: 'success' },
    { value: downServices, label: 'Offline', icon: '❌', color: 'danger' },
    { value: secureServices, label: 'HTTPS', icon: '🔒', color: 'security' },
    { value: statsByType.website, label: 'Sites', icon: '🌐', color: 'info' },
    { value: `${avgLatency}ms`, label: 'HTTP', icon: '⚡', color: 'warning' },
    { value: `${avgPingLatency}ms`, label: 'Ping', icon: '🏓', color: 'info' }
  ];

  return (
    <div className="row g-2 g-md-3 mb-4">
      {stats.map((stat, index) => (
        <div key={index} className="col-6 col-sm-4 col-xl-2">
          <div className={`card ${cardClass} stats-card ${stat.color} h-100`}>
            <div className="card-body p-2 p-md-3">
              <div className="d-flex align-items-center">
                <div className="me-2 flex-shrink-0">
                  <span style={{fontSize: '1.5rem'}}>{stat.icon}</span>
                </div>
                <div className="min-w-0">
                  <h6 className="card-title mb-0 fs-6">{stat.value}</h6>
                  <p className="card-text text-muted mb-0 small">{stat.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Mobile-Responsive Demo Services
function DemoServices({ services, showAddForm, setShowAddForm, cardClass, darkMode, inputClass, encryptionEnabled, connectionStatus, getTypeIcon, getTypeLabel, getStatusBadge, formatLastChecked }) {
  return (
    <div className={`card ${cardClass}`}>
      <div className="card-header">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
          <div>
            <h4 className="mb-1 fs-5">
              🔒 Your Monitored Services ({services.length})
            </h4>
            {encryptionEnabled && connectionStatus === 'connected' && (
              <span className="badge bg-success">Encrypted</span>
            )}
          </div>
          <div className="btn-group w-100 w-md-auto">
            <button className="btn btn-sm btn-outline-primary" title="Refresh Services">
              🔄 Refresh
            </button>
            <button 
              className="btn btn-sm btn-success" 
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? '✕ Close' : '🔒 Add Service'}
            </button>
          </div>
        </div>
      </div>

      <div className="card-body p-3">
        {showAddForm && (
          <DemoAddForm inputClass={inputClass} setShowAddForm={setShowAddForm} />
        )}

        <div className="row g-3">
          {services.map((service) => {
            const isSecure = service.url && service.url.startsWith('https://');
            return (
              <div key={service.id} className="col-lg-6">
                <div className={`card service-card h-100 ${darkMode ? 'bg-dark border-secondary' : ''} ${isSecure ? 'secure-service' : 'insecure-service'}`}>
                  <div className="card-body p-3">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="d-flex align-items-start flex-grow-1 min-w-0">
                        <span className="fs-4 me-2 flex-shrink-0">{getTypeIcon(service.type || 'website')}</span>
                        <div className="min-w-0 flex-grow-1">
                          <h6 className={`card-title mb-1 ${darkMode ? 'text-white' : 'text-dark'} fs-6`}>
                            <span className="text-truncate d-block">{service.name || 'Unknown Service'}</span>
                            <div className="d-inline-flex gap-1 mt-1">
                              {isSecure && <span className="text-success" title="Secure HTTPS connection">🔒</span>}
                              {!isSecure && service.url && service.url.startsWith('http://') && 
                                <span className="text-warning" title="Insecure HTTP connection">⚠️</span>
                              }
                            </div>
                          </h6>
                          <small className={`d-block text-truncate ${darkMode ? 'text-light' : 'text-muted'}`}>
                            {service.url || 'No URL'}
                          </small>
                          <div className="d-flex gap-1 mt-1 flex-wrap">
                            <small className="badge bg-secondary">{getTypeLabel(service.type || 'website')}</small>
                            {isSecure && <small className="badge bg-success">🔒 Secure</small>}
                            {!isSecure && service.url && service.url.startsWith('http://') && 
                              <small className="badge bg-warning">⚠️ Insecure</small>
                            }
                          </div>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center gap-2 flex-shrink-0">
                        {getStatusBadge(service.status)}
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          title="Delete Service (Demo)"
                          disabled
                        >
                          🎭
                        </button>
                      </div>
                    </div>

                    <div className="row text-center g-0">
                      <div className="col-4">
                        <div className="border-end p-2">
                          <div className={`fw-bold ${darkMode ? 'text-white' : 'text-dark'} small`}>
                            {service.url && !service.url.includes('://') ? 'N/A' : (service.latency || 0) + 'ms'}
                          </div>
                          <small className={`${darkMode ? 'text-light' : 'text-muted'}`} style={{fontSize: '0.7rem'}}>
                            HTTP
                          </small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="border-end p-2">
                          <div className={`fw-bold ${darkMode ? 'text-white' : 'text-dark'} small`}>
                            {service.ping_latency || 0}ms
                          </div>
                          <small className={`${darkMode ? 'text-light' : 'text-muted'}`} style={{fontSize: '0.7rem'}}>
                            Ping
                          </small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-2">
                          <div className={`fw-bold ${darkMode ? 'text-white' : 'text-dark'} small`}>
                            {formatLastChecked(service.last_checked)}
                          </div>
                          <small className={`${darkMode ? 'text-light' : 'text-muted'}`} style={{fontSize: '0.7rem'}}>
                            Last Check
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <DemoCTA />
      </div>
    </div>
  );
}

// Mobile-Responsive Demo Add Form
function DemoAddForm({ inputClass, setShowAddForm }) {
  return (
    <div className="mb-4 p-3 border rounded">
      <h6 className="mb-3">🔒 Add New Service</h6>
      
      <div className="alert alert-warning mb-3">
        <div className="d-flex align-items-start">
          <span className="me-2 flex-shrink-0">🎭</span>
          <div className="small">
            <strong>Demo Mode:</strong> This is a demonstration. In the real app, you can add unlimited services with full JWT authentication and rate limiting protection.
          </div>
        </div>
      </div>
      
      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label small">Service Name</label>
          <input
            type="text"
            className={`form-control form-control-sm ${inputClass}`}
            placeholder="My Production API"
            disabled
          />
        </div>
        <div className="col-md-5">
          <label className="form-label small">Service URL/IP Address</label>
          <input
            type="text"
            className={`form-control form-control-sm ${inputClass}`}
            placeholder="https://api.example.com, 192.168.1.1, or router.local"
            disabled
          />
          <div className="form-text">
            <small>🔒 Supports URLs, IP addresses, and hostnames with full security validation</small>
          </div>
        </div>
        <div className="col-md-3">
          <label className="form-label small">Service Type</label>
          <select className={`form-select form-select-sm ${inputClass}`} disabled>
            <option value="website">🌐 Website/API</option>
            <option value="server">🖥️ Server</option>
            <option value="misc">🔧 Network Equipment</option>
          </select>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-end gap-2 mt-3">
        <button 
          type="button" 
          className="btn btn-sm btn-secondary" 
          onClick={() => setShowAddForm(false)}
        >
          Cancel
        </button>
        <button type="button" className="btn btn-sm btn-primary" disabled>
          🎭 Demo Mode
        </button>
      </div>
    </div>
  );
}

// Mobile-Responsive Demo CTA
function DemoCTA() {
  return (
    <div className="text-center mt-5 pt-4 border-top">
      <h5 className="mb-3 fs-6">Ready to monitor your own infrastructure?</h5>
      <p className="text-muted mb-4 small">
        Download Vrexis Insights with full JWT authentication, rate limiting, real-time monitoring, 
        and unlimited services. Self-hosted with enterprise-grade security.
      </p>
      <div className="row g-2 justify-content-center">
        <div className="col-auto">
          <a href="https://github.com/yourusername/vrexis-insights" className="btn btn-success btn-sm">
            📦 Download Free
          </a>
        </div>
        <div className="col-auto">
          <Link to="/#pricing" className="btn btn-primary btn-sm">
            💎 Get Professional
          </Link>
        </div>
        <div className="col-auto">
          <Link to="/" className="btn btn-outline-primary btn-sm">
            🛡️ Learn Security
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <small className="text-muted d-block" style={{fontSize: '0.75rem'}}>
          ✅ JWT Authentication • 🛡️ Rate Limiting • ⚡ Real-time WebSockets • 🔒 Enterprise Security
        </small>
        <small className="text-success" style={{fontSize: '0.75rem'}}>
          🏠 Self-hosted • 🔐 Your data stays yours • 💾 One-time purchase
        </small>
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;