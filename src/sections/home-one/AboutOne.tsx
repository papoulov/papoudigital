"use client"
import React from 'react';
import { motion } from "framer-motion"
// Image imports 
import aboutStar from '../../../public/assets/images/shapes/about-one-star.png';
import aboutImg1 from '../../../public/assets/images/resources/about-one-img-1.jpg';
import aboutImg2 from '../../../public/assets/images/resources/about-one-img-2.jpg';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import Link from 'next/link';

// Points data array
const pointsColumn1 = [
    { id: 1, text: 'Increased Brand Visibility' },
    { id: 2, text: 'Enhanced Customer Engagement' },
    { id: 3, text: 'Data-Driven Insights' }
];

const pointsColumn2 = [
    { id: 4, text: 'Scalable Solutions' },
    { id: 5, text: 'Expert Team Support' },
    { id: 6, text: 'Proven Track Record' }
];

const AboutOne: React.FC = () => {
    return (
        <section className="about-one">
            <div
                className="about-one__shape-bg" ></div>
            <div className="about-one__star rotate-me">
                <Image width={66} height={66} src={aboutStar} alt="Star decoration" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6"  >
                        <div className="about-one__left">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01 }}
                                className="about-one__img-box"
                            >
                                <div className="about-one__shape-1"></div>
                                <div className="about-one__shape-2"></div>
                                <div className="about-one__img">
                                    <Image width={460} height={475} src={aboutImg1} alt="About us" />
                                </div>
                                <div className="about-one__img-two">
                                    <Image width={296} height={296} src={aboutImg2} alt="About us" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-icon-box">
                                        <div className="section-title__tagline-icon-1"></div>
                                        <div className="section-title__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title__tagline">About Us</span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    <TextAnimation text='Empower your brand' textColor='black' fontSize='42' />
                                    <TextAnimation text='with solutions focused' fontSize='42' />
                                    <TextAnimation text='on driving growth' textColor='black' fontSize='42' />
                                </h2>
                            </div>
                            <p className="about-one__text">
                                Unlock your brands full potential with our all-encompassing
                                solutions, crafted to elevate visibility, drive growth, and bolster your market
                                position. Our strategies go beyond boosting brand recognition to deliver lasting impact.
                            </p>
                            <div className="about-one__right-content-box">
                                <div className="about-one__points-box">
                                    <ul className="list-unstyled about-one__points">
                                        {pointsColumn1.map((point) => (
                                            <li key={point.id}>
                                                <div className="icon">
                                                    <span className="fas fa-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>{point.text}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="list-unstyled about-one__points">
                                        {pointsColumn2.map((point) => (
                                            <li key={point.id}>
                                                <div className="icon">
                                                    <span className="fas fa-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>{point.text}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="about-one__btn-and-call-box">
                                    <div className="about-one__btn-box">
                                        <Link href="/inner/about" className="about-one__btn thm-btn">
                                            <span className="icon-right"></span> Know More
                                        </Link>
                                    </div>
                                    <div className="about-one__call">
                                        <div className="about-one__call-icon">
                                            <i className="fab fa-rocketchat"></i>
                                        </div>
                                        <div className="about-one__call-content">
                                            <h3 className="about-one__call-title">
                                                <Link href="/inner/contact">Live Chat</Link>
                                            </h3>
                                            <p className="about-one__call-sub-title">Connect us</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOne;