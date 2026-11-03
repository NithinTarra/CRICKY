import {
  Search,
  Menu,
  X
} from 'lucide-react';

import { useState } from 'react';

import './Navbar.css';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar-container">

        <a href="/" className="brand">
          <span className="brand-icon">C</span>
          <span>CRICKY<span className="brand-dot">.</span></span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>

          <a href="/" className="nav-active">Home</a>
          <a href="/live">Live Scores</a>
          <a href="/schedule">Schedule</a>
          <a href="/series">Series</a>
          <a href="/news">News</a>

        </nav>

        <div className="nav-right">

          <button className="search-btn" aria-label="Search">
            <Search size={20} />
          </button>

          <button className="signin-btn">
            Sign In
          </button>

        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

    </header>
  );
}

export default Navbar;