"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';

const SlidingTextTwo: React.FC = () => {
    const textItems = Array.from({ length: 50 }, () => 'PORTFOLIO');

    return (
        <section className="sliding-text-two mt50">
            <div className="sliding-text-two__wrap">
                <ul className="sliding-text-two__list list-unstyled marquee_mode">
                    <Marquee
                        speed={100}
                        pauseOnHover={true}
                        direction="left"
                        gradient={false}
                    >
                        {textItems.map((text, index) => (
                            <React.Fragment key={index}>
                                <li>
                                    <h2 data-hover={text} className="sliding-text-two__title">
                                        {text}
                                    </h2>
                                </li>
                                <li>
                                    <span></span>
                                </li>
                            </React.Fragment>
                        ))}
                    </Marquee>
                </ul>
            </div>
        </section>
    );
};

export default SlidingTextTwo;
