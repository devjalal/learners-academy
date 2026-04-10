import SEO from '../components/SEO';
import { Target, Eye, Rocket, Award } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn more about Learners Academy, our mission, vision, and teaching methodology focused on academic excellence." 
      />

      {/* Hero Header */}
      <section className="section-dark" style={{ paddingTop: '10rem', paddingBottom: '6rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>About Learners Academy</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>
            Empowering the next generation of scientists, engineers, and doctors through transformative education.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            <div className="card" style={{ background: '#f8f9fa' }}>
              <Target size={40} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
              <h3>Our Mission</h3>
              <p style={{ color: 'var(--text-base)', fontSize: '1.05rem', marginTop: '1rem' }}>
                To provide accessible, high-quality education that inspires curiosity, fosters critical thinking, and prepares students for academic and professional success in the ever-evolving world of science and technology.
              </p>
            </div>
            <div className="card" style={{ background: '#f8f9fa' }}>
              <Eye size={40} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
              <h3>Our Vision</h3>
              <p style={{ color: 'var(--text-base)', fontSize: '1.05rem', marginTop: '1rem' }}>
                To be the leading educational institution recognized for nurturing talent, achieving exceptional results, and shaping students into confident, knowledgeable individuals who contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-16" style={{ alignItems: 'center' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" alt="Teaching" style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            <div>
              <h2>Our Teaching Methodology</h2>
              <p>At Learners Academy, we believe that every student is unique. Our teaching philosophy is built on three main pillars:</p>
              
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
                {[
                  { title: 'Concept Clarity', desc: 'Focusing on building a strong foundation of core concepts before moving to advanced topics.' },
                  { title: 'Practical Application', desc: 'Connecting theoretical knowledge with real-world examples to enhance understanding.' },
                  { title: 'Continuous Assessment', desc: 'Regular mock tests and assignments to track progress and identify areas for improvement.' }
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '2rem', display: 'flex', gap: '1.5rem' }}>
                     <div style={{ backgroundColor: 'var(--primary)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>{i+1}</div>
                     <div>
                       <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
                       <p style={{ margin: 0 }}>{item.desc}</p>
                     </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus on Results */}
      <section className="section section-dark text-center">
        <div className="container">
           <Award size={60} color="var(--accent)" style={{ marginBottom: '2rem' }} />
           <h2>Uncompromising Focus on Results</h2>
           <p style={{ maxWidth: '800px', margin: '2rem auto', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>
             Our pedagogical approach is designed to give students the competitive edge they need for top-tier exams. With a history of consistent toppers, Learners Academy stands as a beacon for students who aim high.
           </p>
           <div className="grid grid-cols-3 gap-8" style={{ marginTop: '4rem' }}>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--accent)' }}>95%</div>
                <div style={{ fontSize: '1.1rem' }}>Success Rate</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--accent)' }}>500+</div>
                <div style={{ fontSize: '1.1rem' }}>Students Enrolled</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--accent)' }}>50+</div>
                <div style={{ fontSize: '1.1rem' }}>Top Rankings</div>
              </div>
           </div>
        </div>
      </section>
    </>
  );
}
