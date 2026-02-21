"use client"
import React from 'react';
import { motion } from "framer-motion"
import footerLogo from '../../../public/assets/images/logo-pg.png';
import shapeBg from '../../../public/assets/images/shapes/site-footer-two-shape-bg.png';
import shapeStar from '../../../public/assets/images/shapes/site-footer-two-star.png';
import Image from 'next/image';
import Link from 'next/link';
import { LINKSONE, LINKSTWO, LINKTHREE } from '@/contents/footer/footer';
const FooterThree: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
    };

    return (
        <>
            <section className="newsletter-two">
                <div className="newsletter-two__big-text">Subscribe Newsletter</div>
                <div className="container">
                    <div className="newsletter-two__inner">
                        <div className="newsletter-two__left">
                            <h2 className="newsletter-two__title">Subscribe Newsletter</h2>
                            <p className="newsletter-two__text">
                                Get the latest SEO tips and software insights straight to your <br /> inbox. Stay informed.
                            </p>
                        </div>
                        <div className="newsletter-two__right">
                            <form className="newsletter-two__form" onSubmit={handleSubmit}>
                                <div className="newsletter-two__input">
                                    <input type="text" placeholder="Enter Your Email" required />
                                </div>
                                <button type="button" className="newsletter-two__btn">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="site-footer-two">
                <div
                    className="site-footer-two__shape-bg"
                    style={{ backgroundImage: `url(${shapeBg})` }}
                ></div>
                <div className="site-footer-two__shape-1 zoominout"></div>
                <div className="site-footer-two__shape-2 zoominout"></div>

                {/* Top Section */}
                <div className="site-footer-two__top">
                    <div className="site-footer-two__main-content">
                        <div className="container">
                            <div className="site-footer-two__main-content-inner">
                                <div className="site-footer-two__star rotate-me">
                                    <Image src={shapeStar} width={25} height={25} alt="Star Shape" />
                                </div>

                                <div className="row">
                                    {/* About Widget */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                        <div className="footer-widget-two__about">
                                            <div className="footer-widget-two__about-logo">
                                                <Link href="/">
                                                    <Image src={footerLogo} width={footerLogo.width} height={footerLogo.height} alt="Footer Logo"  style={{ width: "auto", height: "29px" }} />
                                                </Link>
                                            </div>
                                            <ul className="footer-widget-two__get-in-touch-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-pin"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p className="footer-address-line">
                                                            Rue Bassope, Be Kpota, Lome Togo
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-envelope"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="mailto:info@papoudigital.com">info@papoudigital.com</a>
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-phone"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="tel:+22890145611">+228 90145611</a>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>

                                            <div className="site-footer-two__social-box">
                                                <p className="site-footer-two__social-title">Follow Us</p>
                                                <div className="site-footer-two__social">
                                                    <Link href="https://www.facebook.com/profile.php?id=61588190145379" target="_blank" rel="noopener noreferrer">
                                                        <i className="icon-facebook"></i>
                                                    </Link>
                                                    <Link href="#">
                                                        <i className="icon-twitter"></i>
                                                    </Link>
                                                    <Link href="#">
                                                        <i className="icon-linkedin"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Links */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                        <div className="footer-widget-two__quick-links">
                                            <h4 className="footer-widget-two__title">Quick Links</h4>
                                            <ul className="footer-widget-two__quick-links-list list-unstyled">
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
                                        <div className="footer-widget-two__support">
                                            <h4 className="footer-widget-two__title">Support</h4>
                                            <ul className="footer-widget-two__quick-links-list footer-widget-two__support-list list-unstyled">
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

                                    {/* Services Links */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                        <div className="footer-widget-two__services">
                                            <h4 className="footer-widget-two__title">Our Services</h4>
                                            <ul className="footer-widget-two__quick-links-list footer-widget-two__services-list list-unstyled">
                                                {
                                                    LINKTHREE.map(Item => <motion.li
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer-two__bottom-inner">
                                    <div className="site-footer-two__copyright">
                                        <p className="site-footer-two__copyright-text">
                                            &copy; 2026 By Papou Digital. All Rights Reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterThree;
