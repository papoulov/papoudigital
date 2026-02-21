"use client"
import React from 'react';
import logo from "../../../public/assets/images/logo-pg.png";
import { motion } from "framer-motion"
import Image from 'next/image';
import Link from 'next/link';
import { LINKSONE, LINKSTWO } from '@/contents/footer/footer';
const Footer: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
    };

    return (
        <footer className="site-footer">
            <div className="site-footer__shape-bg"></div>
            <div className="site-footer__big-text">GET IN TOUCH</div>
            <div className="site-footer__top">
                <div className="site-footer__main-content">
                    <div className="container">
                        <div className="site-footer__main-content-inner">
                            <div className="row">

                                {/* About Section */}
                                <div className="col-xl-3 col-lg-6 col-md-6 " >
                                    <div className="footer-widget__about">
                                        <div className="footer-widget__about-logo">
                                            <Link href="/"><Image src={logo} width={logo.width} height={logo.height} alt="logo"  style={{ width: "auto", height: "29px" }} /></Link>
                                        </div>
                                        <p className="footer-widget__about-text">
                                            We are the leading global creative agency dedicated to helping brands thrive.
                                        </p>
                                    </div>
                                </div>

                                {/* Quick Links */}
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="footer-widget__quick-links">
                                        <h4 className="footer-widget__title">Quick Links</h4>
                                        <ul className="footer-widget__quick-links-list list-unstyled">
                                            {
                                                LINKSONE.map(Item => <motion.li
                                                    key={Item?.id}
                                                    initial={{ x: -70, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                    transition={{
                                                        duration: 0.2 * Item?.id,
                                                        ease: "easeOut"
                                                    }}
                                                    viewport={{ amount: 0.01 }}
                                                >
                                                    <Link href={Item?.link}>{Item?.value}</Link>
                                                </motion.li>)
                                            }
                                        </ul>
                                    </div>
                                </div>

                                {/* Support Links */}
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="footer-widget__support">
                                        <h4 className="footer-widget__title">Support</h4>
                                        <ul className="footer-widget__support-list list-unstyled">
                                            {
                                                LINKSTWO.map(Item => <motion.li
                                                    key={Item?.id}
                                                    initial={{ x: -70, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                    transition={{
                                                        duration: 0.2 * Item?.id,
                                                        ease: "easeOut"
                                                    }}
                                                    viewport={{ amount: 0.01 }}
                                                >
                                                    <Link href={Item?.link}>{Item?.value}</Link>
                                                </motion.li>)
                                            }
                                        </ul>
                                    </div>
                                </div>

                                {/* Get in Touch */}
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="footer-widget__get-in-touch">
                                        <h4 className="footer-widget__title">GET IN TOUCH</h4>
                                        <ul className="footer-widget__get-in-touch-list list-unstyled">
                                            <motion.li
                                                initial={{ x: -70, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.2,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.01 }}
                                            >
                                                <div className="icon"><span className="icon-phone"></span></div>
                                                <div className="text">
                                                    <p><a href="tel:+22890145611">+228 90145611</a></p>
                                                </div>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -70, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.01 }}
                                            >
                                                <div className="icon"><span className="icon-envelope"></span></div>
                                                <div className="text">
                                                    <p><a href="mailto:info@papoudigital.com">info@papoudigital.com</a></p>
                                                </div>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -70, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.01 }}
                                            >
                                                <div className="icon"><span className="icon-pin"></span></div>
                                                <div className="text">
                                                    <p className="footer-address-line">Rue Bassope, Be Kpota, Lome Togo</p>
                                                </div>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -70, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.8,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.01 }}
                                            >
                                                <div className="icon"><span className="icon-time"></span></div>
                                                <div className="text">
                                                    <p>Friday - Monday <br /> 10:00 AM - 16:00 PM</p>
                                                </div>
                                            </motion.li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="site-footer__newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer__newsletter-inner">
                                    <div className="site-footer__newsletter-left">
                                        <div className="site-footer__newsletter-title-box">
                                            <h2 className="site-footer__newsletter-title">SUBSCRIBE NOW</h2>
                                        </div>
                                    </div>
                                    <div className="site-footer__newsletter-right">
                                        <form onSubmit={handleSubmit} className="site-footer__newsletter-form">
                                            <div className="site-footer__newsletter-input">
                                                <input type="text" placeholder="Enter Your Email" required />
                                            </div>
                                            <button type="submit" className="site-footer__newsletter-btn">
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <div className="site-footer__copyright">
                                    <p className="site-footer__copyright-text">
                                        &copy; 2026 By Papou Digital. All Rights Reserved.
                                    </p>
                                </div>
                                <div className="site-footer__social-box">
                                    <p className="site-footer__social-title">Follow Us</p>
                                    <div className="site-footer__social">
                                        <a href="https://www.facebook.com/profile.php?id=61588190145379" target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a>
                                        <a href="#"><i className="icon-twitter"></i></a>
                                        <a href="#"><i className="icon-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
