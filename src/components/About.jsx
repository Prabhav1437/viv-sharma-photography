export default function About() {
    return (
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
                                <img src="/cdn/viv.jpg" alt="Viv Sharma" />
                            </div>
                            <div className="photo-item">
                                <img src="/cdn/viv1.jpeg" alt="Viv photographing wildlife" />
                            </div>
                            <div className="photo-item">
                                <img src="/cdn/viv2.jpeg" alt="Viv in the field" />
                            </div>
                            <div className="photo-item">
                                <img src="/cdn/viv3.jpeg" alt="Viv with camera" />
                            </div>
                            <div className="photo-item">
                                <img src="/cdn/viv4.jpeg" alt="Viv on expedition" />
                            </div>
                            <div className="photo-item">
                                <img src="/cdn/viv5.jpeg" alt="Viv capturing nature" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
