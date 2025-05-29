import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.webp" height="40" alt="Vrexis Insights" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#security">Security</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/demo">Demo</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/demo" className="btn btn-primary">Try Live Demo</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-content">
            <div className="mb-3">
              <span className="badge bg-success bg-opacity-10 text-success px-3 py-2">
                🚀 Now with JWT Authentication & Rate Limiting
              </span>
            </div>
            <h1 className="display-4 mb-4">
              Enterprise-Grade Service Monitoring Platform
            </h1>
            <p className="lead mb-4 text-white-50">
              Monitor your websites, APIs, servers, and network equipment with real-time alerts, 
              JWT authentication, rate limiting, and enterprise security. Built for teams who need 
              reliable monitoring without compromising on security.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/demo" className="btn btn-light btn-lg">
                🔒 Try Live Demo
              </Link>
              <a href="#features" className="btn btn-outline-light btn-lg">
                🛡️ See Features
              </a>
            </div>
            <div className="mt-4">
              <small className="text-white-50">
                ✅ Self-hosted • 🔐 Enterprise Security • ⚡ Real-time Monitoring • 🔔 Instant Alerts
              </small>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="demo-preview">
              <DemoPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Demo Preview Component
function DemoPreview() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 className="mb-0">🚀 Vrexis Insights</h5>
          <small className="text-white-50">Welcome back, admin@vrexisinsights.com</small>
        </div>
        <div className="d-flex gap-2">
          <span className="badge bg-success">🔗 Connected</span>
          <span className="badge bg-info">🔒 Secure</span>
        </div>
      </div>
      
      <div className="bg-success bg-opacity-20 border border-success rounded p-2 mb-3">
        <div className="d-flex align-items-center">
          <span className="text-success me-2">🛡️</span>
          <small className="text-success fw-bold">Secure Monitoring Active - JWT Auth + Rate Limiting + TLS Encryption</small>
        </div>
      </div>
      
      <div className="row g-2 mb-3">
        {[
          { value: 4, label: 'Online', color: 'success' },
          { value: 1, label: 'Offline', color: 'danger' },
          { value: 4, label: 'HTTPS', color: 'primary' },
          { value: 2, label: 'Websites', color: 'info' },
          { value: '85ms', label: 'HTTP', color: 'warning' },
          { value: '23ms', label: 'Ping', color: 'success' }
        ].map((stat, index) => (
          <div key={index} className="col-2">
            <div className="bg-white rounded p-2 text-center">
              <div className={`fw-bold text-${stat.color}`}>{stat.value}</div>
              <small className="text-muted">{stat.label}</small>
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
        <small className="text-muted">↑ Real dashboard interface with JWT authentication</small>
      </div>
    </>
  );
}

// Service Preview Item Component
function ServicePreviewItem({ icon, name, url, status, secure, ping, warning, isLast }) {
  return (
    <div className={`d-flex justify-content-between align-items-center py-2 ${!isLast ? 'border-bottom' : ''}`}>
      <div className="d-flex align-items-center">
        <span className="me-2">{icon}</span>
        <div>
          <small className="fw-bold">{name}</small>
          <div className="text-muted" style={{fontSize: '0.7rem'}}>{url}</div>
        </div>
        {secure && <span className="ms-2 text-success" title="Secure HTTPS connection">🔒</span>}
        {ping && <span className="ms-2 text-muted" title="Ping monitoring">🏓</span>}
        {warning && <span className="ms-2 text-danger" title="Connection issue">⚠️</span>}
      </div>
      <span className={`badge bg-${status === 'online' ? 'success' : 'danger'}`}>
        {status === 'online' ? '✅ Online' : '❌ Offline'}
      </span>
    </div>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: "🔐",
      title: "JWT Authentication & Authorization",
      description: "Secure user accounts with JWT tokens, bcrypt password hashing, and role-based access control. Each user only sees their own services."
    },
    {
      icon: "🛡️",
      title: "Advanced Rate Limiting",
      description: "Token bucket algorithm with 100 req/min for API, 20 req/min for auth endpoints. Prevents abuse and ensures fair usage across all users."
    },
    {
      icon: "⚡",
      title: "Real-time WebSocket Monitoring",
      description: "Live updates via authenticated WebSocket connections. Monitor HTTP response times, ping latency, and service status in real-time."
    },
    {
      icon: "🌐",
      title: "Multi-Protocol Support",
      description: "Monitor HTTPS/HTTP APIs, raw IP addresses (192.168.1.1), hostnames (router.local), and network equipment with intelligent detection."
    },
    {
      icon: "🔒",
      title: "Enterprise Security Headers",
      description: "HSTS, CSP, X-Frame-Options, and comprehensive input validation. Built-in XSS protection and SQL injection prevention."
    },
    {
      icon: "📊",
      title: "Cross-Platform Compatibility",
      description: "Pure Go backend with CGO-free SQLite. Runs on Linux, Windows, macOS without build dependencies. Single binary deployment."
    },
    {
      icon: "🏓",
      title: "Smart Ping Monitoring",
      description: "Cross-platform ping monitoring with automatic OS detection. Monitor network devices, servers, and services that don't support HTTP."
    },
    {
      icon: "🔔",
      title: "User-Specific Dashboards",
      description: "Each authenticated user gets their own isolated dashboard. Services are user-owned with proper access control and data isolation."
    },
    {
      icon: "🚀",
      title: "Production-Ready Architecture",
      description: "Graceful shutdown, health checks, database migrations, and comprehensive error handling. Ready for containerization and scaling."
    }
  ];

  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title">Built for Modern DevOps Teams</h2>
        <p className="text-center text-muted mb-5">Every feature designed with security, scalability, and user experience in mind</p>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h4 className="mb-3">{feature.title}</h4>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <ArchitecturePreview />
      </div>
    </section>
  );
}

// Architecture Preview Component
function ArchitecturePreview() {
  return (
    <div className="row mt-5">
      <div className="col-12">
        <div className="text-center mb-4">
          <h3 className="mb-3">Modern Architecture</h3>
          <p className="text-muted">Built with Go, React, and enterprise-grade security</p>
        </div>
        
        <div className="card shadow-sm">
          <div className="card-body p-4">
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
                <div key={index} className="col-md-4">
                  <div className="border rounded p-4 h-100">
                    <h5 className={`text-${arch.color} mb-3`}>{arch.title}</h5>
                    <ul className="list-unstyled text-start">
                      {arch.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
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

// Security Section
function Security() {
  const securityFeatures = [
    {
      icon: "🔐",
      title: "JWT Authentication System",
      description: "Secure user accounts with JSON Web Tokens, bcrypt password hashing, and automatic token refresh. 24-hour token expiration with secure session management."
    },
    {
      icon: "🛡️",
      title: "Advanced Rate Limiting",
      description: "Token bucket algorithm with configurable limits: 100 req/min for API endpoints, 20 req/min for authentication. Prevents brute force attacks and abuse."
    },
    {
      icon: "🔒",
      title: "Input Validation & Sanitization",
      description: "Comprehensive input validation, XSS protection, SQL injection prevention, and dangerous host detection. Enterprise-grade security built-in."
    },
    {
      icon: "👤",
      title: "User Isolation & Access Control",
      description: "Each user only sees their own services. Role-based access control with admin/user roles and proper data isolation between accounts."
    },
    {
      icon: "📊",
      title: "Security Headers & CORS",
      description: "HSTS, CSP, X-Frame-Options, and comprehensive CORS protection. Origin validation and secure cross-origin request handling."
    },
    {
      icon: "🔍",
      title: "Audit Logging & Monitoring",
      description: "Comprehensive security event logging, rate limit violation tracking, and user action auditing for compliance and security monitoring."
    }
  ];

  return (
    <section id="security" className="py-5" style={{backgroundColor: '#f0fdf4'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">🔒 Security-First Architecture</h2>
          <p className="text-muted">Built with enterprise security standards from day one</p>
        </div>

        <div className="row g-4 mb-5">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="fs-1 mb-3 text-success">{feature.icon}</div>
                  <h5 className="card-title mb-3">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.description}</p>
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

// Security Implementation Component
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
          <div className="card-body p-4">
            <h4 className="text-primary mb-4 text-center">🏆 Security Implementation</h4>
            <div className="row g-3">
              {securityStats.map((stat, index) => (
                <div key={index} className="col-md-3 col-6">
                  <div className="text-center">
                    <div className="fw-bold text-primary">{stat.label}</div>
                    <small className="text-muted">{stat.detail}</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <small className="text-muted">
                All security features are built-in and enabled by default. No additional configuration required.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pricing Section
function Pricing() {
  const pricingPlans = [
    {
      name: "Open Source",
      price: "Free",
      period: "/forever",
      features: [
        "JWT Authentication & Rate Limiting",
        "Real-time WebSocket monitoring",
        "Multi-protocol support (HTTP/IP/hostname)",
        "Cross-platform (Linux/Windows/macOS)",
        "User management & isolation",
        "Security headers & input validation",
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
        "📊 Advanced analytics & reports",
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
        "📈 Advanced compliance reporting",
        "🎯 SLA tracking & monitoring",
        "🏷️ White-label customization",
        "🛡️ Enhanced security features",
        "📞 Dedicated support"
      ],
      buttonText: "🏢 Contact Sales",
      buttonClass: "btn-outline-primary"
    }
  ];

  return (
    <section id="pricing" className="py-5">
      <div className="container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="text-center text-muted mb-5">Self-hosted solution with enterprise security included</p>
        <div className="row g-4 justify-content-center">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && (
                  <div className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-2">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-center mb-4 ${plan.featured ? 'mt-4' : ''}`}>{plan.name}</h3>
                <div className="text-center mb-4">
                  <span className="h2 text-primary">{plan.price}</span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">✅ {feature}</li>
                  ))}
                </ul>
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
          ))}
        </div>
        
        <PricingFAQ />
      </div>
    </section>
  );
}

// Pricing FAQ Component
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
      answer: "Open source version gets community updates. Paid versions include priority updates."
    }
  ];

  return (
    <div className="row mt-5">
      <div className="col-12 text-center">
        <div className="bg-light rounded p-4">
          <h5 className="mb-3">🤔 Frequently Asked Questions</h5>
          <div className="row">
            {faqs.map((faq, index) => (
              <div key={index} className="col-md-4 mb-3">
                <strong>{faq.question}</strong>
                <p className="text-muted mb-0">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer
function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { text: "Features", href: "#features" },
        { text: "Security", href: "#security" },
        { text: "Live Demo", to: "/demo" },
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
        <div className="row">
          <div className="col-lg-4 mb-4">
            <img src="/logo.png" height="40" alt="Vrexis Insights" className="mb-3" />
            <p className="text-white-50">
              Enterprise-grade service monitoring platform with JWT authentication, rate limiting, 
              and real-time monitoring. Built for teams who need reliable insights with security.
            </p>
            <div className="mt-3">
              <small className="text-success">
                🔒 JWT Authentication • 🛡️ Rate Limiting • ⚡ Real-time Monitoring
              </small>
            </div>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className="col-lg-2 col-md-6 mb-4">
              <h6>{section.title}</h6>
              <ul className="list-unstyled">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {link.to ? (
                      <Link to={link.to}>{link.text}</Link>
                    ) : (
                      <a href={link.href}>{link.text}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6>Connect</h6>
            <p className="text-white-50 mb-3">Stay updated on new features and security updates.</p>
            <div className="d-flex">
              <input type="email" className="form-control me-2" placeholder="Your email" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="my-4 opacity-25" />
        <div className="text-center text-white-50">
          <p>&copy; 2025 Vrexis Insights. All rights reserved.</p>
          <small className="d-block mt-2">
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

// Demo Page
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
      
      {/* Demo Banner */}
      <div className="demo-banner">
        <div className="container">
          <strong>🎭 INTERACTIVE DEMO</strong> - Experience the full Vrexis Insights platform with JWT authentication and real-time monitoring
          <Link to="/" className="btn btn-sm btn-light ms-3">← Back to Website</Link>
        </div>
      </div>
      
      <div className={`${themeClass} min-vh-100`} style={{paddingTop: '140px'}}>
        <div className="status-indicator">
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

// Demo Header Component
function DemoHeader({ user, darkMode, setDarkMode, encryptionEnabled, connectionStatus }) {
  return (
    <header className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h1 className="mb-1">🚀 Vrexis Insights</h1>
        <p className="text-muted mb-0">
          Welcome back, {user?.first_name || 'Demo User'}
        </p>
        {encryptionEnabled && connectionStatus === 'connected' && (
          <small className="text-success d-block">
            🔒 Enterprise encryption active • All data secured
          </small>
        )}
      </div>
      <div className="d-flex gap-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`btn btn-${darkMode ? 'light' : 'dark'}`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button className="btn btn-outline-danger">
          🚪 Logout
        </button>
      </div>
    </header>
  );
}

// Demo Alerts Component
function DemoAlerts({ rateLimitInfo, isRateLimited, securityStatus, connectionStatus }) {
  return (
    <>
      {rateLimitInfo && !isRateLimited && (
        <div className="alert alert-info d-flex align-items-center mb-4" role="alert">
          <span className="me-2">📊</span>
          <div>
            <strong>Rate Limit Status:</strong> {rateLimitInfo.remaining || 0} requests remaining of {rateLimitInfo.limit || 0} per minute
          </div>
        </div>
      )}

      {securityStatus === 'secure' && connectionStatus === 'connected' && (
        <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
          <span className="me-2">🛡️</span>
          <div>
            <strong>Secure Monitoring Active</strong> - JWT authentication, rate limiting, TLS encryption, and enterprise-grade security enabled
          </div>
        </div>
      )}
    </>
  );
}

// Demo Stats Component
function DemoStats({ upServices, downServices, secureServices, statsByType, avgLatency, avgPingLatency, cardClass }) {
  const stats = [
    { value: upServices, label: 'Online', icon: '✅', color: 'success' },
    { value: downServices, label: 'Offline', icon: '❌', color: 'danger' },
    { value: secureServices, label: 'HTTPS', icon: '🔒', color: 'security' },
    { value: statsByType.website, label: 'Websites', icon: '🌐', color: 'info' },
    { value: `${avgLatency}ms`, label: 'Avg HTTP', icon: '⚡', color: 'warning' },
    { value: `${avgPingLatency}ms`, label: 'Avg Ping', icon: '🏓', color: 'info' }
  ];

  return (
    <div className="row mb-4">
      {stats.map((stat, index) => (
        <div key={index} className="col-xl-2 col-md-4 mb-3">
          <div className={`card ${cardClass} stats-card ${stat.color}`}>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <span className="fs-1">{stat.icon}</span>
                </div>
                <div>
                  <h5 className="card-title mb-0">{stat.value}</h5>
                  <p className="card-text text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Demo Services Component
function DemoServices({ services, showAddForm, setShowAddForm, cardClass, darkMode, inputClass, encryptionEnabled, connectionStatus, getTypeIcon, getTypeLabel, getStatusBadge, formatLastChecked }) {
  return (
    <div className={`card ${cardClass}`}>
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="mb-0">
            🔒 Your Monitored Services ({services.length})
            {encryptionEnabled && connectionStatus === 'connected' && (
              <span className="ms-2 badge bg-success">Encrypted</span>
            )}
          </h3>
          <div className="btn-group">
            <button className="btn btn-outline-primary" title="Refresh Services">
              🔄 Refresh
            </button>
            <button 
              className="btn btn-success" 
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? '✕ Close' : '🔒 Add Service'}
            </button>
          </div>
        </div>
      </div>

      <div className="card-body">
        {showAddForm && (
          <DemoAddForm inputClass={inputClass} setShowAddForm={setShowAddForm} />
        )}

        <div className="row">
          {services.map((service) => {
            const isSecure = service.url && service.url.startsWith('https://');
            return (
              <div key={service.id} className="col-lg-6 mb-3">
                <div className={`card service-card h-100 ${darkMode ? 'bg-dark border-secondary' : ''} ${isSecure ? 'secure-service' : 'insecure-service'}`}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="d-flex align-items-start">
                        <span className="fs-2 me-3">{getTypeIcon(service.type || 'website')}</span>
                        <div>
                          <h6 className={`card-title mb-1 ${darkMode ? 'text-white' : 'text-dark'}`}>
                            {service.name || 'Unknown Service'}
                            {isSecure && <span className="ms-2 text-success" title="Secure HTTPS connection">🔒</span>}
                            {!isSecure && service.url && service.url.startsWith('http://') && 
                              <span className="ms-2 text-warning" title="Insecure HTTP connection">⚠️</span>
                            }
                          </h6>
                          <small className={`d-block ${darkMode ? 'text-light' : 'text-muted'}`}>{service.url || 'No URL'}</small>
                          <div className="d-flex gap-1 mt-1">
                            <small className="badge bg-secondary">{getTypeLabel(service.type || 'website')}</small>
                            {isSecure && <small className="badge bg-success">🔒 Secure</small>}
                            {!isSecure && service.url && service.url.startsWith('http://') && 
                              <small className="badge bg-warning">⚠️ Insecure</small>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2">
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

                    <div className="row text-center">
                      <div className="col-4">
                        <div className="border-end">
                          <div className={`fw-bold ${darkMode ? 'text-white' : 'text-dark'}`}>
                            {service.url && !service.url.includes('://') ? 'N/A' : (service.latency || 0) + 'ms'}
                          </div>
                          <small className={darkMode ? 'text-light' : 'text-muted'}>HTTP</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="border-end">
                          <div className={`fw-bold ${darkMode ? 'text-white' : 'text-dark'}`}>{service.ping_latency || 0}ms</div>
                          <small className={darkMode ? 'text-light' : 'text-muted'}>Ping</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className={`fw-bold ${darkMode ? 'text-white' : 'text-dark'}`}>{formatLastChecked(service.last_checked)}</div>
                        <small className={darkMode ? 'text-light' : 'text-muted'}>Last Check</small>
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

// Demo Add Form Component
function DemoAddForm({ inputClass, setShowAddForm }) {
  return (
    <div className="mb-4 p-3 border rounded">
      <h5 className="mb-3">🔒 Add New Service</h5>
      
      <div className="alert alert-warning mb-3">
        <div className="d-flex align-items-center">
          <span className="me-2">🎭</span>
          <div>
            <strong>Demo Mode:</strong> This is a demonstration. In the real app, you can add unlimited services with full JWT authentication and rate limiting protection.
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Service Name</label>
          <input
            type="text"
            className={`form-control ${inputClass}`}
            placeholder="My Production API"
            disabled
          />
        </div>
        <div className="col-md-5 mb-3">
          <label className="form-label">Service URL/IP Address</label>
          <input
            type="text"
            className={`form-control ${inputClass}`}
            placeholder="https://api.example.com, 192.168.1.1, or router.local"
            disabled
          />
          <div className="form-text">
            <small>🔒 Supports URLs, IP addresses, and hostnames with full security validation</small>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <label className="form-label">Service Type</label>
          <select className={`form-select ${inputClass}`} disabled>
            <option value="website">🌐 Website/API</option>
            <option value="server">🖥️ Server</option>
            <option value="misc">🔧 Network Equipment</option>
          </select>
        </div>
      </div>

      <div className="d-flex justify-content-end gap-2">
        <button 
          type="button" 
          className="btn btn-secondary" 
          onClick={() => setShowAddForm(false)}
        >
          Cancel
        </button>
        <button type="button" className="btn btn-primary" disabled>
          🎭 Demo Mode
        </button>
      </div>
    </div>
  );
}

// Demo CTA Component
function DemoCTA() {
  return (
    <div className="text-center mt-5 pt-4 border-top">
      <h4 className="mb-3">Ready to monitor your own infrastructure?</h4>
      <p className="text-muted mb-4">
        Download Vrexis Insights with full JWT authentication, rate limiting, real-time monitoring, 
        and unlimited services. Self-hosted with enterprise-grade security.
      </p>
      <div className="row g-3 justify-content-center">
        <div className="col-auto">
          <a href="https://github.com/yourusername/vrexis-insights" className="btn btn-success btn-lg">
            📦 Download Free (GitHub)
          </a>
        </div>
        <div className="col-auto">
          <Link to="/#pricing" className="btn btn-primary btn-lg">
            💎 Get Professional Version
          </Link>
        </div>
        <div className="col-auto">
          <Link to="/" className="btn btn-outline-primary btn-lg">
            🛡️ Learn About Security
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <small className="text-muted d-block">
          ✅ JWT Authentication • 🛡️ Rate Limiting • ⚡ Real-time WebSockets • 🔒 Enterprise Security
        </small>
        <small className="text-success">
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