import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='logo'><img className="icon-logo" src="src/assets/logo2-ramos.png" /></div>
      <div className='title'>Serviços</div>
      <button className='button'>Agende agora</button>
    </header>
  );
}

export default Header;