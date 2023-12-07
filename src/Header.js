

import React, { useState } from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bitcoin-header">
      <div className="title">Bitcoin Wallet</div>
      <div className="dropdown" onClick={toggleDropdown}>
        <div className="dots">&#8226;&#8226;&#8226;</div>
        {isDropdownOpen && (
          <div className="options">
            <div>Edit</div>
            <div>Share</div>
            <div>Remove</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
