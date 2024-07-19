import { FacebookLogo, WhatsappLogo, InstagramLogo, Phone, ChatCircle } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

export const Footer = () => {
    
    return (
      <footer className="flex items-center justify-between fixed bottom-0 left-0 h-20 p-6 bg-blue-950 w-screen">
        <p className="text-white font-bold">Todos os direitos reservados</p>
        <div className="flex items-center space-x-4">
          <Link to="https://wa.me/258844421806">
            <WhatsappLogo size={32} className="text-green-400 font-bold" />
          </Link>
          <Link to="https://www.facebook.com/ancha.catarina.56">
            <FacebookLogo size={32} className="text-blue-600 font-bold" />
          </Link>
          <Link to="https://www.instagram.com/anchacatarina?igsh=YzljYTk1ODg3Zg==">
            <InstagramLogo size={32} className="text-fuchsia-500" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
  
        <a href="mailto:anchacatarina@gmail.com">
            <ChatCircle size={32} className="text-yellow-500 font-bold" />
          </a>
            <span className="text-white font-bold">anchacatarina@gmail.com</span>
         
            <a href="tel:+258844421806" className="text-white flex items-center space-x-2">
            <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 7a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="text-white font-bold">+258 844 421 806</span>
          </a>
          
        </div>
      </footer>
    );
}