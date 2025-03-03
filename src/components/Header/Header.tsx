import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className='headerBox'>
      <div className='logo'>
        <img className="icon-logo" src="images/logo-ramos.jpeg" />
      </div>
      <div className='title'>💈</div>
      <button className='buttonHeader'>
        <a
        href="https://api.whatsapp.com/send?phone=5582998239226&text=Olá, gostaria de agendar um horário."
        target="_blank"
        >
          Agende agora
        </a>
      </button>
    </header>
  );
}

export default Header;