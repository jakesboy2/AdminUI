import React from 'react';
import './css/Navbar.css';
import './NavbarItem';
import NavbarItem from './NavbarItem';

function Navbar() {
  return (
    <div>
      <ul>
        <NavbarItem />
        <NavbarItem />
      </ul>
    </div>
  );
}

export default Navbar;
