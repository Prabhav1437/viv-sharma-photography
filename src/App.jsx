import { useEffect, useRef, useState } from 'react';

function App() {
  const videoRef = useRef(null);
  const heroWrapperRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }

    const handleScroll = () => {
      if (!heroWrapperRef.current) return;
      const { top, height } = heroWrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollableDistance = height - windowHeight;
      let progress = -top / scrollableDistance;

      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
      <main>
        <div ref={heroWrapperRef} style={{ height: '300vh' }}>
          <section className="hero" id="hero" style={{ position: 'sticky', top: 0, height: '100vh', margin: 0, overflow: 'hidden' }}>
            <div className="hero-mask" style={{
              opacity: scrollProgress > 0.7 ? 1 - (scrollProgress - 0.7) * 5 : 1
            }}>
              <h1 className="hero-title" style={{
                transform: `scale(${1 + scrollProgress * 50})`
              }}>VIV SHARMA</h1>
            </div>
            <div id="showreel">
              <video ref={videoRef} src="assets/viv_showreel.mp4" autoPlay loop muted playsInline></video>
              <h1 className="showreel-title" style={{
                opacity: scrollProgress > 0.8 ? Math.min(0.6, (scrollProgress - 0.7) * 2.5) : 0
              }}>VIV SHARMA</h1>
            </div>
          </section>
        </div>
        <section className="features-bar">
          <div className="container">
            <div className="features-scroll">
              <div className="feature-item">
                <i className="fa-solid fa-camera"></i>
                <span>WILDLIFE PHOTOGRAPHY</span>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-award"></i>
                <span>AWARD WINNING</span>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-earth-americas"></i>
                <span>NATURE CONSERVATION</span>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="container">
            <div className="section-header">
              <h2>ABOUT ME</h2>
              <p>My journey as a wildlife photographer</p>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>I’m Viv Sharma, a 16-year-old wildlife photographer and conservationist originally from Agra,India , currently in Melbourne,Australia. My journey into the wild didn't start with a camera, but with curiosity. From the
                  dense Sal forests of Bandhavgarh to the open savannahs of Africa, I have spent my formative
                  years tracking the world’s most elusive predators.</p>
                <p>What began as a childhood fascination has evolved into a dedicated mission. I don't just look
                  for the "perfect shot"—I look for the story. Whether it’s a tigress teaching her cubs to
                  hunt or the vibrant plumage of an endemic bird, my goal is to capture the raw, unscripted
                  behaviors of nature.</p>
                <p>Through my lens, I strive to bridge the gap between the wild and the urban world. I believe
                  that to protect our biodiversity, we must first understand it. My work is an invitation to
                  witness the beauty we stand to lose and a call to action to preserve it.</p>
              </div>
              <div className="about-photos">
                <div className="photo-grid">
                  <div className="photo-item large">
                    <img src="assets/viv.jpg" alt="Viv Sharma" />
                  </div>
                  <div className="photo-item">
                    <img src="assets/viv1.jpeg" alt="Viv photographing wildlife" />
                  </div>
                  <div className="photo-item">
                    <img src="assets/viv2.jpeg" alt="Viv in the field" />
                  </div>
                  <div className="photo-item">
                    <img src="assets/viv3.jpeg" alt="Viv with camera" />
                  </div>
                  <div className="photo-item">
                    <img src="assets/viv4.jpeg" alt="Viv on expedition" />
                  </div>
                  <div className="photo-item">
                    <img src="assets/viv5.jpeg" alt="Viv capturing nature" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">6+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Photos Captured</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Species Photographed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Awards Won</div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-gallery" id="gallery">
          <div className="container">
            <div className="section-header">
              <h2>GALLERY</h2>
              <p>A collection of my wildlife photography from around the world</p>
            </div>
            <div className="gallery-grid">
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/p/CdS1aCIvMjT/?img_index=1" target="_blank" rel="noreferrer"><img
                    src="assets/tiger1.png" alt="Tiger" /></a>
                </div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/p/CbpQ5FkvXe2/?img_index=3" target="_blank" rel="noreferrer"><img
                    src="assets/bird1.png" alt="Bird" /></a>
                </div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/p/CcsgeLlPnDY/" target="_blank" rel="noreferrer"><img
                    src="assets/bird2.png" alt="Bird" /></a>
                </div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/p/C8ZRN3FqT1A/?img_index=6" target="_blank" rel="noreferrer"><img
                    src="assets/owl.png" alt="Owl" /></a>
                </div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/p/CdBMfSXvvQE/?img_index=1" target="_blank" rel="noreferrer"><img
                    src="assets/tiger2.png" alt="Tiger" /></a>
                </div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/p/Cy8acuUhNre/?img_index=3" target="_blank" rel="noreferrer"><img
                    src="assets/tiger3.png" alt="One Eyed Tiger" /></a>
                </div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/p/DSE5zUhAYau/?img_index=4" target="_blank" rel="noreferrer"><img
                    src="assets/spider.png" alt="Spider" /></a>
                </div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/p/C2PWU1xx7Tn/?img_index=2" target="_blank" rel="noreferrer"><img
                    src="assets/rhino.png" alt="Rhino" /></a>
                </div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/vivsharma_09/" target="_blank" rel="noreferrer"><img
                    src="assets/Devil.jpeg" alt="Devil" /></a>
                </div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/vivsharma_09/" target="_blank" rel="noreferrer"><img
                    src="assets/Tiger_Safari.jpeg" alt="Tiger_Safari" /></a>
                </div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/vivsharma_09/" target="_blank" rel="noreferrer"><img
                    src="assets/baby_deer.jpeg" alt="baby_deer" /></a>
                </div>
              </article>
              <article className="gallery-card">
                <div className="gallery-image">
                  <a href="https://www.instagram.com/p/Cp2s1jgP_kP/?img_index=1" target="_blank" rel="noreferrer"><img
                    src="assets/Sunset.jpeg" alt="Sunset" /></a>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="gear-section" id="gear">
          <div className="container">
            <div className="section-header">
              <h2 style={{ color: "white" }}>MY GEAR</h2>
              <p style={{ color: "white" }}>The tools that help me capture the wild</p>
            </div>
            <div className="gear-content">
              <div className="gear-image">
                <img src="assets/gear.png" alt="Photography gear in the field" />
              </div>
              <div className="gear-details">
                <div className="gear-item">
                  <div className="gear-icon">
                    <i className="fa-solid fa-camera"></i>
                  </div>
                  <div className="gear-info">
                    <h3>Canon EOS R5</h3>
                    <p>Professional mirrorless camera with 45MP full-frame sensor, delivering exceptional
                      image quality and speed for capturing wildlife in action. The R5's advanced
                      autofocus system ensures I never miss the perfect moment.</p>
                    <div className="gear-specs">
                      <span><i className="fa-solid fa-circle-check"></i> 45MP Full-Frame Sensor</span>
                      <span><i className="fa-solid fa-circle-check"></i> 20fps Continuous Shooting</span>
                      <span><i className="fa-solid fa-circle-check"></i> 8K Video Recording</span>
                    </div>
                  </div>
                </div>
                <div className="gear-item">
                  <div className="gear-icon">
                    <i className="fa-solid fa-binoculars"></i>
                  </div>
                  <div className="gear-info">
                    <h3>Canon RF 100-500mm f/4.5-7.1L IS USM</h3>
                    <p>Versatile super-telephoto zoom lens perfect for wildlife photography. Its incredible
                      reach and image stabilization allow me to capture stunning details from a safe
                      distance, respecting the animals' natural behavior.</p>
                    <div className="gear-specs">
                      <span><i className="fa-solid fa-circle-check"></i> 100-500mm Focal Range</span>
                      <span><i className="fa-solid fa-circle-check"></i> 5-Stop Image Stabilization</span>
                      <span><i className="fa-solid fa-circle-check"></i> Weather-Sealed Construction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="social-media-section" id="social-media">
          <div className="container">
            <div className="section-header">
              <h2>FOLLOW MY JOURNEY</h2>
              <p>Connect with me on social media for daily wildlife content</p>
            </div>
            <div className="social-grid">
              <a href="https://www.instagram.com/vivsharma_09/" target="_blank" rel="noreferrer"
                className="social-card instagram-card">
                <div className="social-image">
                  <img src="assets/instagram.png" alt="Instagram Profile - vivsharma_09" />
                </div>
                <div className="social-overlay">
                  <i className="fa-brands fa-instagram"></i>
                  <h3>@vivsharma_09</h3>
                  <p>Follow for daily wildlife photography and behind-the-scenes content</p>
                </div>
              </a>
              <a href="https://www.youtube.com/@vivsharmaphotography9647" target="_blank" rel="noreferrer"
                className="social-card youtube-card">
                <div className="social-image">
                  <img src="assets/youtube.png" alt="YouTube Channel - Viv Sharma Photography" />
                </div>
                <div className="social-overlay">
                  <i className="fa-brands fa-youtube"></i>
                  <h3>Viv Sharma Photography</h3>
                  <p>Subscribe for wildlife documentaries and photography tutorials</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="awards-section" id="awards">
          <div className="container">
            <div className="section-header">
              <h2 style={{ color: "white" }}>AWARDS & RECOGNITION</h2>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>Celebrating achievements in wildlife photography</p>
            </div>
            <div className="awards-grid">
              <div className="award-card">
                <div className="award-image">
                  <img src="assets/award1.jpg" alt="Phoenix Mall Exhibition" />
                </div>
                <div className="award-info">
                  <div className="award-badge">
                    <i className="fa-solid fa-trophy"></i>
                  </div>
                  <h3>Phoenix Mall Exhibition</h3>
                  <p>Photography exhibition at Phoenix Mall of the Millennium, showcasing wildlife photography
                    to thousands of visitors</p>
                </div>
              </div>
              <div className="award-card">
                <div className="award-image">
                  <img src="assets/award2.png" alt="INW Awards Collection-7" />
                </div>
                <div className="award-info">
                  <div className="award-badge">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <h3>INW Awards Collection-7</h3>
                  <p>Selected for INW Awards Collection-7 in July 2022, recognized by renowned wildlife
                    photographers Saurabh Desai and Phillip Ross</p>
                </div>
              </div>
              <div className="award-card">
                <div className="award-image">
                  <img src="assets/award3.png" alt="INW Awards Certificate" />
                </div>
                <div className="award-info">
                  <div className="award-badge">
                    <i className="fa-solid fa-certificate"></i>
                  </div>
                  <h3>Certificate of Appreciation</h3>
                  <p>Official certificate from INW Awards for exceptional wildlife photography and
                    contribution to conservation awareness</p>
                </div>
              </div>
              <div className="award-card">
                <div className="award-image">
                  <img src="assets/award4.png" alt="MPTFS Photo of the Month" />
                </div>
                <div className="award-info">
                  <div className="award-badge">
                    <i className="fa-solid fa-medal"></i>
                  </div>
                  <h3>Top 5 - Photo of the Month</h3>
                  <p>Among top 5 photographers in MPTFS "Love in the Jungle" theme contest with 388 votes,
                    March 2022</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
    </>
  );
}

export default App;
