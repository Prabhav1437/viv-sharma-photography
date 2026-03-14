import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container nav-row">
                <a href="#hero">
                    <div className="logo">VIV SHARMA</div>
                </a>
                <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
                <nav className={`nav-right ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-links">
                        <li><a className="current" href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
                        <li><a href="#gear" onClick={() => setIsMenuOpen(false)}>Gear</a></li>
                        <li><a href="#social-media" onClick={() => setIsMenuOpen(false)}>Social Media</a></li>
                        <li><a href="#awards" onClick={() => setIsMenuOpen(false)}>Awards</a></li>
                        <li><a href="#page-footer" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
