import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className='headerBox'>
      <div className='logo'>
        <img className="icon-logo" src="src/assets/logo-ramos.jpeg" />
      </div>
      <div className='title'>💈</div>
      <button className='buttonHeader'>
        <a href="https://api.whatsapp.com/send?phone=5582998239226">
          Agende agora
        </a>
      </button>
    </header>
  );
}

export default Header;