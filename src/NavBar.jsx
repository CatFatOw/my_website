import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {

  return (
    <div className='navbar'>
      <img src="/images/ifhs.png" alt="logo" className='logo' />
      <ul className="nav-menu">
        <li><Link to="/" className='nav-link'>Home</Link></li>
        <li><Link to="/achievement" className='nav-link'>Achievements</Link></li>
        <li><Link to='/facts' className='nav-link'>Fun Facts</Link></li>
  
      </ul>

      <div className="nav-connect">

        <a href="https://www.instagram.com/cat_fat_ow/" className='nav-link' target='_blank'>Instagram</a>

      </div>
      
    </div>
  );
}

export default NavBar;
