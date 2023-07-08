import React from 'react';
import'./style.css';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;