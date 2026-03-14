export default function Footer() {
    return (
        <footer className="page-footer" id="page-footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <span className="footer-logo">Viv Sharma</span>
                    <p>Award-winning wildlife photographer dedicated to conservation through powerful imagery.</p>
                    <div className="footer-pill"><i className="fa-solid fa-camera"></i> Since 2010</div>
                </div>
                <div className="footer-column">
                    <h4>My Resort</h4>
                    <p>Emerald Tiger Retreat <br />house # 1, Dadri Village: Parasi,<br /> Post: Dhamokar, Bandhavgarh<br />
                        Madhya Pradesh , India</p>
                </div>
                <div className="footer-column">
                    <h4>Explore</h4>
                    <ul className="footer-links">
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#page-footer">Contact</a></li>
                        <li><a href="#hero">Home</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Connect</h4>
                    <div className="footer-contact-details">
                        <span><i className="fa-solid fa-phone"></i>+91 70176 04395</span>
                        <span><i className="fa-solid fa-envelope"></i>vivinwild09@gmail.com</span>
                    </div>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/vivsharma_09/" aria-label="Instagram" target="_blank" rel="noreferrer"><i
                            className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@vivsharma_09" aria-label="Youtube" target="_blank" rel="noreferrer"><i
                            className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Viv Sharma Photography. All rights reserved.</p>
            </div>
        </footer>
    );
}
