import galleryData from '../data/gallery.json';

export default function Gallery() {
    return (
        <section className="portfolio-gallery" id="gallery">
            <div className="container">
                <div className="section-header">
                    <h2>GALLERY</h2>
                    <p>A collection of my wildlife photography from around the world</p>
                </div>
                <div className="gallery-grid">
                    {galleryData.map((item) => (
                        <article key={item.id} className="gallery-card">
                            <div className="gallery-image">
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    <img src={item.image} alt={item.alt} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
