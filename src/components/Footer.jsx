import { NavLink } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Globe, Share2, MessageSquare, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark" style={{ paddingTop: '5rem', paddingBottom: '2rem', borderTop: '4px solid var(--accent)' }}>
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <GraduationCap size={32} color="var(--accent)" />
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Learners Academy</h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
              Empowering students for academic excellence through expert guidance, personalized attention, and a results-oriented approach.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#" className="hover-lift"><Globe size={20} color="var(--accent)" /></a>
              <a href="#" className="hover-lift"><Share2 size={20} color="var(--accent)" /></a>
              <a href="#" className="hover-lift"><MessageSquare size={20} color="var(--accent)" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Home', 'About', 'Courses', 'Contact'].map(link => (
                <li key={link} style={{ marginBottom: '0.8rem' }}>
                  <NavLink to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ArrowRight size={14} color="var(--accent)" /> {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>Our Courses</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['+1/+2 Science', 'Computer Science', 'NEET Coaching', 'JEE | KEAM Coaching'].map(course => (
                <li key={course} style={{ marginBottom: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <MapPin size={20} color="var(--accent)" className="shrink-0" />
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Learners Academy, Main Road, City Center</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <Phone size={20} color="var(--accent)" />
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>+91 79073 43387</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <Mail size={20} color="var(--accent)" />
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>info@learnersacademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
          <p>© {currentYear} Learners Academy. All rights reserved. | Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
}
