import SEO from '../components/SEO';
import { NavLink } from 'react-router-dom';
import { CheckCircle2, Star, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

export default function Home() {
  const highlightCourses = [
    { title: '+1/+2 Science', desc: 'Comprehensive coaching for higher secondary science students.' },
    { title: '+1/+2 Computer Science', desc: 'Master coding and theory with expert-led computer science lessons.' },
    { title: 'NEET | JEE | KEAM', desc: 'Rigorous entrance exam preparation for medical and engineering aspirants.' },
    { title: 'Crash & Repeater', desc: 'Intensive short-term courses and dedicated repeater batches.' },
  ];

  return (
    <>
      <SEO 
        title="Empowering Academic Excellence" 
        description="Learners Academy - Top tuition centre for +1, +2 Science, NEET, JEE, and KEAM coaching. Providing expert faculty and personalized attention." 
      />

      {/* Hero Section */}
      <section className="section-dark" style={{ 
        paddingTop: '8rem', 
        paddingBottom: '10rem',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract background pattern */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '80%', background: 'radial-gradient(circle, rgba(200,161,101,0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            <div className="logo-container" style={{ marginBottom: '2rem', transform: 'scale(1.2)', transformOrigin: 'left' }}>
              <div className="logo-learners" style={{ fontSize: '2.5rem' }}>
                learners
                <span className="logo-accent-swash" style={{ width: '30px', height: '30px' }}></span>
              </div>
              <div className="logo-academy" style={{ fontSize: '1rem' }}>ACADEMY</div>
              <div style={{ 
                marginTop: '1.5rem', 
                color: 'rgba(255,255,255,0.6)', 
                fontSize: '0.9rem', 
                letterSpacing: '0.1em',
                fontWeight: '500',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '0.5rem',
                display: 'inline-block'
              }}>
                NEET | JEE | KEAM Classes
              </div>
            </div>
            
            <h1 className="animate-fade-in-up" style={{ marginTop: '1rem' }}>Empowering Students for Academic Excellence</h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', margin: '1.5rem 0 2.5rem', maxWidth: '600px' }}>
              Join the most trusted name in education. We provide high-end coaching for Science, Entrance Exams, and Computer Science with a focus on results.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <NavLink to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Join Now</NavLink>
              <NavLink to="/about" className="btn btn-outline" style={{ border: '2px solid white', color: 'white', fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Learn More</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section style={{ marginTop: '-5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            {highlightCourses.map((course, idx) => (
              <div key={idx} className="card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s`, textAlign: 'center' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(46,58,103,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                  <BookOpen size={24} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{course.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0' }}>{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--accent)', fontWeight: '600' }}>WHY CHOOSE US</span>
              <h2 style={{ marginTop: '0.5rem' }}>Your Pathway to Top Results</h2>
              <p>We combine traditional teaching methods with modern technology to deliver a superior learning experience.</p>
              
              <div style={{ marginTop: '2.5rem' }}>
                {[
                  { title: 'Proven Results', desc: 'Consistent track record of top scores in board and entrance exams.' },
                  { title: 'Expert Faculty', desc: 'Highly experienced teachers dedicated to student success.' },
                  { title: 'Personal Attention', desc: 'Small batch sizes to ensure every student gets individual mentoring.' },
                  { title: 'Study Material', desc: 'Premium quality resources and mock tests for thorough preparation.' }
                ].map((feature, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div className="shrink-0" style={{ marginTop: '0.25rem' }}>
                      <CheckCircle2 color="var(--accent)" />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>{feature.title}</h4>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                borderRadius: '20px', 
                overflow: 'hidden', 
                aspectRatio: '4/5',
                background: '#eee',
                boxShadow: '20px 20px 0 var(--primary)'
              }}>
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" alt="Students learning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* Stats overlay */}
              <div className="card" style={{ position: 'absolute', bottom: '-20px', left: '-20px', padding: '1.5rem', minWidth: '200px', background: 'var(--accent)', color: 'white' }}>
                 <div style={{ fontSize: '2rem', fontWeight: '700' }}>10+</div>
                 <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ backgroundColor: '#fcfcfd' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Success Stories</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Don't just take our word for it. Hear from our successful students and happy parents.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: 'Rahul S.', role: '+2 Science Student', text: 'The faculty at Learners Academy is exceptional. They made complex physics concepts so easy to understand.' },
              { name: 'Anjali P.', role: 'NEET Aspirant', text: 'Small batch sizes and personal attention helped me clear my doubts immediately. Highly recommended!' },
              { name: 'Devika M.', role: 'Computer Science', text: 'Learners Academy provided the best programming guidance. It build a strong foundation for my college.' }
            ].map((t, i) => (
              <div key={i} className="card" style={{ position: 'relative' }}>
                <div style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, star) => <Star key={star} size={16} fill="var(--accent)" />)}
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"{t.text}"</p>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{t.name}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: '500' }}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark text-center">
        <div className="container">
          <h2>Ready to Achieve Your Academic Goals?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Join the next batch at Learners Academy and experience the difference.</p>
          <NavLink to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
            Get Started Today <ArrowRight size={20} style={{ marginLeft: '10px', verticalAlign: 'middle' }} />
          </NavLink>
        </div>
      </section>
    </>
  );
}
