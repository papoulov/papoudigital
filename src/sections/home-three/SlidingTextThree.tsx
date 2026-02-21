"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';
const SlidingTextThree: React.FC = () => {
    const textItems = Array.from({ length: 50 }, () => 'PORTFOLIO');
    return (
        <div className="sliding-text-one sliding-text-one--bg1">
            <div className="sliding-text-one__wrap">
                <ul className="sliding-text-one__list list-unstyled marquee_mode">
                    <Marquee
                        speed={100}
                        pauseOnHover={true}
                        direction="left"
                        gradient={false}
                    >
                        {textItems.map((text, index) => (
                            <React.Fragment key={index}>
                                <li>
                                    <h2 data-hover={text} className="sliding-text-one__title">
                                        {text}
                                    </h2>
                                </li> 
                            </React.Fragment>
                        ))}
                    </Marquee> 
                </ul>
            </div>
        </div>
    );
};

export default SlidingTextThree;