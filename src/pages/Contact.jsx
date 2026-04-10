import SEO from '../components/SEO';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const courses = [
    '+1/+2 Science',
    '+1/+2 Computer Science',
    'NEET Coaching',
    'JEE Coaching',
    'KEAM Coaching',
    'Crash Course',
    'Repeater Course'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Redirecting to WhatsApp...');

    const phoneNumber = "917907343387";
    const message = `*New Enquiry - Learners Academy*%0A%0A` +
                    `*Name:* ${formData.name}%0A` +
                    `*Phone:* ${formData.phone}%0A` +
                    `*Email:* ${formData.email || 'Not provided'}%0A` +
                    `*Course:* ${formData.course || 'Not specified'}%0A` +
                    `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Success state
    setTimeout(() => {
      setStatus('Redirected successfully!');
      setFormData({ name: '', phone: '', email: '', course: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Contact Learners Academy for admissions and enquiries. Visit us at our location or get in touch via phone, email, or WhatsApp." 
      />

      <section className="section-dark" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>Get in Touch</h1>
          <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>
            Have questions? We're ready to help you on your educational journey.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2>Contact Details</h2>
              <p style={{ marginBottom: '3rem' }}>Visit our campus or contact us through any of the following channels.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(46,58,103,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Location</h4>
                    <p style={{ color: 'var(--text-light)', margin: 0 }}>Learners Academy, Main Road, City Center, PIN: 123456</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(46,58,103,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Phone</h4>
                    <p style={{ color: 'var(--text-light)', margin: 0 }}>+91 79073 43387</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(46,58,103,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                    <p style={{ color: 'var(--text-light)', margin: 0 }}>admissions@learnersacademy.com<br/>info@learnersacademy.com</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '4rem' }}>
                <h3>Quick Support</h3>
                <a 
                  href="https://wa.me/917907343387" 
                  target="_blank" 
                  className="btn btn-outline" 
                  style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#25D366', borderColor: '#25D366' }}
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ border: '1px solid #eee' }}>
              <h3 style={{ marginBottom: '2rem' }}>Enquiry Form</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Full Name *</label>
                  <input type="text" id="name" required value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Phone Number *</label>
                  <input type="tel" id="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                </div>
                <div>
                  <label htmlFor="course" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Select Course *</label>
                  <select id="course" required value={formData.course} onChange={handleChange}>
                    <option value="">-- Select a Course --</option>
                    {courses.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                  <textarea id="message" rows="4" value={formData.message} onChange={handleChange} placeholder="How can we help you?"></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={isSubmitting}
                  style={{ 
                    marginTop: '1rem', 
                    width: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '10px',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send size={18} />}
                </button>
                {status && (
                  <p style={{ 
                    marginTop: '1rem', 
                    textAlign: 'center', 
                    fontSize: '0.9rem', 
                    color: status.includes('successfully') ? '#10b981' : '#ef4444',
                    fontWeight: '500' 
                  }}>
                    {status}
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
           <div style={{ width: '100%', height: '450px', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
             {/* Google Map Embed */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.69871!2d75.12345!3d11.12345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzI0LjMiTiA3NcKwMjcnMjQuMyJF!5e0!3m2!1sen!2sin!4v1713456789012!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Learners Academy Location"
             ></iframe>
           </div>
        </div>
      </section>
    </>
  );
}
