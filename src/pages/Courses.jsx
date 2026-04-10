import SEO from '../components/SEO';
import { NavLink } from 'react-router-dom';
import { BookMarked, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function Courses() {
  const allCourses = [
    {
      title: '+1 Science',
      desc: 'Foundation course for students entering the science stream. Comprehensive coverage of Physics, Chemistry, and Biology/Math.',
      benefit: 'Solid conceptual foundation',
      duration: '1 Year',
      category: 'Board Prep'
    },
    {
      title: '+2 Science',
      desc: 'Intensive coaching for second-year higher secondary students focusing on board exams and base for entrances.',
      benefit: 'Expert board exam strategy',
      duration: '1 Year',
      category: 'Board Prep'
    },
    {
      title: 'Computer Science',
      desc: 'Specialized coaching for +1/+2 Computer Science. Covers programming foundations and theory.',
      benefit: 'Practical coding skills',
      duration: 'Academic Year',
      category: 'Specialization'
    },
    {
      title: 'NEET Coaching',
      desc: 'Highly structured program for medical aspirants. Focus on speed, accuracy, and deep biology/physics/chemistry understanding.',
      benefit: 'Mock tests & MCQs focus',
      duration: '1 or 2 Years',
      category: 'Entrance'
    },
    {
      title: 'JEE Coaching',
      desc: 'Rigorous training for engineering entrance exams. Advanced problem-solving techniques in Math, Physics, and Chemistry.',
      benefit: 'Advanced problem kits',
      duration: '1 or 2 Years',
      category: 'Entrance'
    },
    {
      title: 'KEAM Coaching',
      desc: 'Localized entrance exam focus for Kerala Engineering aspirants. Strategy-based learning for maximum scoring.',
      benefit: 'State-specific strategies',
      duration: '6-12 Months',
      category: 'Entrance'
    },
    {
      title: 'Crash Course',
      desc: 'Last-minute intensive preparation for NEET/JEE/KEAM. Quick revision and simulated trial sessions.',
      benefit: 'Rapid revision modules',
      duration: '2-3 Months',
      category: 'Short Term'
    },
    {
      title: 'Repeater Course',
      desc: 'Dedicated program for students taking a gap year. Full-time study with intensive mentoring for top results.',
      benefit: 'Dedicated doubt clear sessions',
      duration: '1 Year',
      category: 'Intensive'
    }
  ];

  return (
    <>
      <SEO 
        title="Our Courses" 
        description="Explore our range of educational programs including +1/+2 Science, NEET, JEE, KEAM, and specialized Computer Science coaching." 
      />

      <section className="section-dark" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>Academic Programs</h1>
          <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>
            Choose from a variety of expert-led courses designed for your academic and career growth.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-8">
            {allCourses.map((course, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span style={{ 
                    backgroundColor: 'rgba(46,58,103,0.1)', 
                    color: 'var(--primary)', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.75rem', 
                    textTransform: 'uppercase', 
                    fontWeight: '700' 
                  }}>
                    {course.category}
                  </span>
                  <div style={{ color: 'var(--accent)' }}>
                    <BookMarked size={24} />
                  </div>
                </div>
                
                <h3 style={{ marginBottom: '1rem' }}>{course.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-base)', marginBottom: '1.5rem', flex: 1 }}>{course.desc}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <CheckCircle size={16} color="var(--accent)" />
                    <span><strong>Benefit:</strong> {course.benefit}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <Clock size={16} color="var(--accent)" />
                    <span><strong>Duration:</strong> {course.duration}</span>
                  </div>
                </div>

                <NavLink to="/contact" className="btn btn-outline" style={{ textAlign: 'center', display: 'block', width: '100%' }}>
                  Enquire Now
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-light">
        <div className="container text-center">
           <h2>Still Have Questions?</h2>
           <p style={{ margin: '1rem 0 3rem' }}>We're here to help you choose the right path for your future.</p>
           <NavLink to="/contact" className="btn btn-primary">
              Contact Academic Advisor <ArrowRight size={20} style={{ marginLeft: '10px', verticalAlign: 'middle' }} />
           </NavLink>
        </div>
      </section>
    </>
  );
}
