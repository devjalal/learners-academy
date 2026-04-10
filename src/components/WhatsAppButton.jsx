import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "917907343387"; 
  const message = "Hi, I'm interested in Learners Academy courses. Can I get more details?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float hover-lift"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={30} fill="currentColor" />
      <span className="tooltip">Chat with us</span>
      
      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .whatsapp-float:hover {
          background-color: #128C7E;
          transform: scale(1.1);
        }
        .tooltip {
          position: absolute;
          right: 70px;
          background: var(--primary);
          color: white;
          padding: 8px 15px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s;
          box-shadow: var(--shadow-md);
        }
        .whatsapp-float:hover .tooltip {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </a>
  );
}
