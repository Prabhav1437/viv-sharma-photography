export default function Awards() {
    return (
        <section className="awards-section" id="awards">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ color: "white" }}>AWARDS & RECOGNITION</h2>
                    <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>Celebrating achievements in wildlife photography</p>
                </div>
                <div className="awards-grid">
                    <div className="award-card">
                        <div className="award-image">
                            <img src="https://pub-b131111335e14b7aab19585812a6bde9.r2.dev/award1.jpg" alt="Phoenix Mall Exhibition" />
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
                            <img src="https://pub-b131111335e14b7aab19585812a6bde9.r2.dev/award2.png" alt="INW Awards Collection-7" />
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
                            <img src="https://pub-b131111335e14b7aab19585812a6bde9.r2.dev/award3.png" alt="INW Awards Certificate" />
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
                            <img src="https://pub-b131111335e14b7aab19585812a6bde9.r2.dev/award4.png" alt="MPTFS Photo of the Month" />
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
    );
}
