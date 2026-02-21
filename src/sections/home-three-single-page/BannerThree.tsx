"use client"
import React from 'react';
import client_one from "../../../public/assets/images/resources/banner-two-satisfied-client-1-1.jpg"
import client_two from "../../../public/assets/images/resources/banner-two-satisfied-client-1-2.jpg"
import client_three from "../../../public/assets/images/resources/banner-two-satisfied-client-1-3.jpg"
import bannerImg from "../../../public/assets/images/resources/banner-two-img-1.png"
import customerImg from "../../../public/assets/images/resources/banner-two-active-customer-img-1.png"
import shapeImg from "../../../public/assets/images/shapes/banner-two-shape-1.png"
import { motion } from "framer-motion"
import Image from 'next/image';
import TypingEffect from '@/components/elements/TypingEffect';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import Link from 'next/link';
const BannerThree: React.FC = () => {
    return (
        <section className="banner-two" id='home'>
            <div className="banner-two__shape-bg"></div>
            <div className="banner-two__shape-1 img-bounce">
                <Image src={shapeImg} width={818} height={785} alt="" />
            </div>
            <div className="container">
                <div className="banner-two__inner">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6">
                            <div className="banner-two__left" >
                                <div className="banner-two__left-content">
                                    <h2 className="banner-two__title">
                                        Empowering Your Business with Smart
                                        <br />
                                        <TypingEffect
                                            strings={[
                                                'IT Solutions',
                                                'IT Business Grow',
                                            ]}
                                            typeSpeed={100}
                                            deleteSpeed={50}
                                            pauseDuration={2000}
                                            className=""
                                            showCursor={true}
                                        />
                                    </h2>
                                    <div className="banner-two__satisfied-client-box">
                                        <ul className="list-unstyled banner-two__satisfied-client-list">
                                            <li>
                                                <div className="banner-two__satisfied-client-img">
                                                    <Image src={client_one} width={42} height={42} alt="Image" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="banner-two__satisfied-client-img">
                                                    <Image src={client_two} width={42} height={42} alt="Image" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="banner-two__satisfied-client-img">
                                                    <Image src={client_three} width={42} height={42} alt="Image" />
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="banner-two__satisfied-client-content">
                                            <div className="banner-two__satisfied-client-count count-box">
                                                <h4 className="count-text" ><AdvanceCountUp ending={2000} /></h4>
                                                <span className="banner-two__satisfied-client-count-plus">+</span>
                                            </div>
                                            <p className="banner-two__satisfied-client-count-text">Happy Clients</p>
                                        </div>
                                    </div>
                                    <div className="banner-two__btn-box">
                                        <Link href="/inner/about" className="banner-two__btn thm-btn thm-btn-two">
                                            <span className="icon-right"></span>
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="banner-two__img-box" >
                                <div className="banner-two__img float-bob-y">
                                    <motion.span
                                        initial={{ y: 80, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 1.3,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.01 }}
                                    >
                                        <Image src={bannerImg} width={410} height={478} alt="Image" />
                                    </motion.span>
                                    <div className="banner-two__img-shape-box">
                                        <div className="banner-two__img-shape-1" >
                                            <div className="banner-two__img-shape-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="banner-two__right" data-aos="slide-left" data-aos-duration="1200"
                                data-aos-delay="200">
                                <p className="banner-two__text">Our agency specializes in creative solutions tailored to
                                    elevate your brand, ensuring it stands out and connects with your audience
                                    effectively. We are dedicated to bringing that story.</p>
                                <motion.div
                                    initial={{ x: 80, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1.3,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ amount: 0.1, once: true }}
                                    className="banner-two__active-customer-img-box">
                                    <Image src={customerImg} width={245} height={300} alt="Image" />
                                </motion.div>
                                <div className="banner-two__active-customer">
                                    <div className="banner-two__active-customer-count count-box">
                                        <h4 className="count-text" ><AdvanceCountUp ending={4} /></h4>
                                        <span className="banner-two__active-customer-count-plus">K+</span>
                                    </div>
                                    <p className="banner-two__active-customer-text">Daily Active <br /> Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerThree;