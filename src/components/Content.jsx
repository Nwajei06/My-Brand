import React, { useEffect, useRef, useState } from 'react';

function Content() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div>
            <div ref={sectionRef} className="content-container">
                <div className={`section-title ${isVisible ? 'slide-in' : ''}`}>
                    <span className="line"></span>
                    <span className="text">ABOUT US</span>
                    <span className="line"></span>
                </div>
                <div className={`concept ${isVisible ? 'slide-in' : ''}`}>
                    Chijo Concept
                </div>
            </div>
            <div className='lineunder'></div>
        </div>
    );
}

export default Content;
