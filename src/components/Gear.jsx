export default function Gear() {
    return (
        <section className="gear-section" id="gear">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ color: "white" }}>MY GEAR</h2>
                    <p style={{ color: "white" }}>The tools that help me capture the wild</p>
                </div>
                <div className="gear-content">
                    <div className="gear-image">
                        <img src="/cdn/gear.png" alt="Photography gear in the field" />
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
    );
}
