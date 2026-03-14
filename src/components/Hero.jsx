import { useEffect, useRef, useState } from 'react';

export default function Hero() {
    const videoRef = useRef(null);
    const heroWrapperRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

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
                    <video ref={videoRef} src="https://pub-b131111335e14b7aab19585812a6bde9.r2.dev/viv_showreel.mp4" autoPlay loop muted playsInline></video>
                    <h1 className="showreel-title" style={{
                        opacity: scrollProgress > 0.8 ? Math.min(0.6, (scrollProgress - 0.7) * 2.5) : 0
                    }}>VIV SHARMA</h1>
                </div>
            </section>
        </div>
    );
}
