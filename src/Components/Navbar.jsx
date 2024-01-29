import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function showNavbar() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
      <div className="nav-btn" onClick={showNavbar}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isMenuOpen && (
        <ul className="links">
          <li>Home</li>
          <li>Notes</li>
          <li>Tasks</li>
          <li>Settings</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
