import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarStyle = {
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: 'var(--primary)',
    color: 'var(--text-inverse)',
    transition: 'var(--transition-normal)',
    boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
    padding: scrolled ? '0.75rem 0' : '1rem 0',
  };

  const navContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = ({ isActive }) => ({
    fontWeight: '500',
    color: isActive ? 'var(--accent)' : 'var(--text-inverse)',
    position: 'relative',
    padding: '0.5rem 0',
  });

  return (
    <nav style={navbarStyle}>
      <div className="container" style={navContainerStyle}>
        <NavLink to="/" className="logo-container">
          <div className="logo-learners">
            learners
            <span className="logo-accent-swash"></span>
          </div>
          <div className="logo-academy">ACADEMY</div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="desktop-links">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              style={linkStyle}
              className="nav-link-hover"
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
            Enquire Now
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/contact" 
              className="btn-primary" 
              style={{ textAlign: 'center', marginTop: '1rem' }}
              onClick={() => setIsOpen(false)}
            >
              Enquire Now
            </NavLink>
          </div>
        </div>
      </div>
      
      <style>{`
        .desktop-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .mobile-toggle {
          display: none;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--primary);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          padding: 8rem 2rem 2rem;
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
        }
        .mobile-menu.active {
          transform: translateX(0);
        }
        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .mobile-nav-link {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          font-family: 'Poppins', sans-serif;
        }
        .nav-link-hover:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--accent);
          transition: width var(--transition-normal);
        }
        .nav-link-hover:hover:after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .desktop-links {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
