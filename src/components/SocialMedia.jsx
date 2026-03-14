export default function SocialMedia() {
    return (
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
                            <img src="https://pub-b131111335e14b7aab19585812a6bde9.r2.dev/instagram.png" alt="Instagram Profile - vivsharma_09" />
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
                            <img src="https://pub-b131111335e14b7aab19585812a6bde9.r2.dev/youtube.png" alt="YouTube Channel - Viv Sharma Photography" />
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
    );
}
