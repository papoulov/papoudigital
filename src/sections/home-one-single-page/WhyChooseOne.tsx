"use client"
import React from "react";
import { motion } from "framer-motion"
import icon1 from "../../../public/assets/images/icon/why-choose-one-icon-1.png";
import icon2 from "../../../public/assets/images/icon/why-choose-one-icon-2.png";
import icon3 from "../../../public/assets/images/icon/why-choose-one-icon-3.png";
import icon4 from "../../../public/assets/images/icon/why-choose-one-icon-4.png";
import img1 from "../../../public/assets/images/resources/why-choose-one-img-1.jpg";
import img2 from "../../../public/assets/images/resources/why-choose-one-img-2.jpg";
import Image from "next/image";
import TextAnimation from "@/components/elements/TextAnimation";
import Link from "next/link";

const WhyChooseOne: React.FC = () => {
    return (
        <section className="why-choose-one">
            <div
                className="why-choose-one__shape-bg" ></div>

            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-xl-6">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-icon-box">
                                        <div className="section-title__tagline-icon-1"></div>
                                        <div className="section-title__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title__tagline">Why Choose Us</span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    <TextAnimation text="We're a top creative agency" textColor="black" />
                                    <TextAnimation text="known for innovation." />
                                    <span></span>
                                </h2>
                            </div>

                            <p className="why-choose-one__text">
                                We’re a leading creative agency renowned for our innovative
                                solutions and cutting-edge approach. We are a premier creative
                                agency celebrated for our ability to drive innovation.
                            </p>

                            <ul className="list-unstyled why-choose-one__list">
                                <li>
                                    <div className="icon">
                                        <Image src={icon1} width={48} height={48} alt="Innovative Solutions" />
                                    </div>
                                    <div className="content">
                                        <p>
                                            <Link href="/inner/about">Innovative Solutions</Link>
                                        </p>
                                        <span>
                                            Cutting-edge approaches to keep your brand <br /> ahead.
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon">
                                        <Image src={icon2} width={48} height={48} alt="Creative Excellence" />
                                    </div>
                                    <div className="content">
                                        <p>
                                            <Link href="/inner/about">Creative Excellence</Link>
                                        </p>
                                        <span>
                                            Unique and impactful design strategies with <br /> creative
                                            experience.
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon">
                                        <Image src={icon3} width={48} height={48} alt="Custom Strategies" />
                                    </div>
                                    <div className="content">
                                        <p>
                                            <Link href="/inner/about">Custom Strategies</Link>
                                        </p>
                                        <span>
                                            Tailored strategies: Custom solutions to meet <br /> your
                                            specific needs.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div
                        className="col-xl-6 wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                    >
                        <div className="why-choose-one__right">
                            <div className="why-choose-one__circle rotate-me"></div>

                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01 }}
                                className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="why-choose-one__content-one">
                                        <div className="why-choose-one__img-one">
                                            <Image src={img1} width={300} height={408} alt="Why Choose One 1" />
                                        </div>

                                        <div className="why-choose-one__round-text-box">
                                            <div className="why-choose-one__round-text-box-inner">
                                                <div className="why-choose-one__curved-circle  ">
                                                    <span>25+ Years Of Experience.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="why-choose-one__content-two">
                                        <div className="why-choose-one__icon">
                                            <Image src={icon4} width={48} height={48} alt="Icon 4" />
                                        </div>
                                        <div className="why-choose-one__img-two">
                                            <Image src={img2} width={300} height={425} alt="Why Choose One 2" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseOne;
