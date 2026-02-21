"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import aboutTwoIcon1 from '../../../public/assets/images/icon/about-two-icon-1.png';
import aboutTwoIcon2 from '../../../public/assets/images/icon/about-two-icon-2.png';
import aboutTwoIcon3 from '../../../public/assets/images/icon/about-two-icon-3.png';
import aboutTwoIcon4 from '../../../public/assets/images/icon/about-two-icon-4.png';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';

const AboutTwo: React.FC = () => {
    const { t, asset } = usePapouDigitalContext();
    const aboutImage = asset("image.home2.about.main", "/assets/images/tech-woman.png");
    return (
        <section className="about-two">
            <div className="about-two__shape-box">
                <div className="about-two__shape-1">
                    <div className="about-two__shape-2">
                        <div className="about-two__shape-3"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <motion.div
                        className="col-xl-5"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut"
                        }}
                        viewport={{ amount: 0.01, once: false }}
                    >
                        <div className="about-two__left">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">{t("common.aboutTaglineHome2")}</span>
                                </div>
                                <h2 className="section-title-two__title title-animation about-two__headline-title">
                                    {t("common.aboutHeadlineHome2Line1")}
                                    <span>{t("common.aboutHeadlineHome2Line2")}</span>
                                </h2>
                            </div>

                            <div className="about-two__img">
                                <Image src={aboutImage} width={435} height={450} alt={t("common.aboutTaglineHome2")} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <div className="col-xl-7">
                        <div className="about-two__right">
                            <p className="about-two__text">
                                {t("common.aboutBodyHome2")}
                            </p>

                            <div className="about-two__points-box">
                                <ul className="list-unstyled about-two__points">
                                    <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon1} width={40} height={40} alt={t("common.aboutPoint1TitleHome2")} />
                                        </div>
                                        <div className="content">
                                            <h3>{t("common.aboutPoint1TitleHome2")}</h3>
                                            <p>
                                                {t("common.aboutPoint1TextHome2")}
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon2} width={40} height={40} alt={t("common.aboutPoint2TitleHome2")} />
                                        </div>
                                        <div className="content">
                                            <h3>{t("common.aboutPoint2TitleHome2")}</h3>
                                            <p>
                                                {t("common.aboutPoint2TextHome2")}
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="list-unstyled about-two__points">
                                    <li data-aos="fade-left" data-aos-duration="1200" data-aos-delay="150">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon3} width={40} height={40} alt={t("common.aboutPoint3TitleHome2")} />
                                        </div>
                                        <div className="content">
                                            <h3>{t("common.aboutPoint3TitleHome2")}</h3>
                                            <p>
                                                {t("common.aboutPoint3TextHome2")}
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-left" data-aos-duration="1200" data-aos-delay="250">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon4} width={40} height={40} alt={t("common.aboutPoint4TitleHome2")} />
                                        </div>
                                        <div className="content">
                                            <h3>{t("common.aboutPoint4TitleHome2")}</h3>
                                            <p>
                                                {t("common.aboutPoint4TextHome2")}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="about-two__bottom">
                                <div className="about-two__btn-and-call-box">
                                    <div className="about-two__btn-box">
                                        <Link href="/inner/about" className="about-two__btn thm-btn thm-btn-two">
                                            <span className="icon-right"></span> {t("common.aboutKnowMoreHome2")}
                                        </Link>
                                    </div>

                                    <div className="about-two__call">
                                        <div className="about-two__call-icon">
                                            <i className="icon-phone"></i>
                                        </div>
                                        <div className="about-two__call-content">
                                            <p className="about-two__call-sub-title">{t("common.aboutConnectUsHome2")}</p>
                                            <h3 className="about-two__call-number">
                                                <a
                                                    href="https://wa.me/22890145611"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="about-two__call-number-link"
                                                >
                                                    <i className="fab fa-whatsapp" aria-hidden="true"></i>
                                                    <span>+228 90145611</span>
                                                </a>
                                            </h3>
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

export default AboutTwo;
