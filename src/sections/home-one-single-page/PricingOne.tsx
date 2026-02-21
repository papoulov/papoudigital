"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion"
// Import images
import shapeImg3 from "../../../public/assets/images/shapes/pricing-one-shape-3.png";
import shapeImg4 from "../../../public/assets/images/shapes/pricing-one-shape-4.png";
import customPricingIcon from "../../../public/assets/images/icon/pricing-one-custom-pricing-icon-1.png";
import customPricingImg from "../../../public/assets/images/agent1.png";
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import { pricingPlans } from '@/contents/procing-plan/pricing';
import { PricingPlan } from '@/contents/procing-plan/type';
import Link from 'next/link';

const PricingOne: React.FC = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="pricing-one">
            <div className="pricing-one__shape-3 float-bob-y">
                <Image src={shapeImg3} width={41} height={43} alt="" />
            </div>
            <div className="pricing-one__shape-4 float-bob-x">
                <Image src={shapeImg4} width={199} height={192} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Pricing & Plan</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Select the plan that' textColor='black' />
                        <TextAnimation text=' best fitsyour needs.' />
                    </h2>
                </div>

                <div className="pricing-one__switch-toggle">
                    <ul className="list-unstyled switch-toggler-list" role="tablist" id="switch-toggle-tab">
                        <li className={`month ${!isYearly ? 'active' : ''}`}>
                            <span onClick={() => setIsYearly(false)} style={{ cursor: 'pointer' }}>
                                Monthly
                            </span>
                        </li>
                        <li>
                            <label className={`switch ${!isYearly ? 'on' : 'off'}`}>
                                <input
                                    type="checkbox"
                                    checked={isYearly}
                                    onChange={() => setIsYearly(!isYearly)}
                                    style={{ display: 'none' }}
                                />
                                <span className="slider round"></span>
                            </label>
                        </li>
                        <li className={`year ${isYearly ? 'active' : ''}`}>
                            <span onClick={() => setIsYearly(true)} style={{ cursor: 'pointer' }}>
                                Yearly
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="tabed-content">
                    <div style={{ display: `${isYearly ? 'block' : 'none'}` }}>
                        <div className="row">
                            {pricingPlans.map((plan: PricingPlan) => (
                                <motion.div
                                    initial={{ y: plan?.id % 2 === 0 ? -40 : 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ amount: 0.01, once: true }}
                                    key={plan.id}
                                    className={`col-xl-3 col-lg-6 col-md-6 `} >
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__title-box">
                                            <p className="pricing-one__title">{plan.name}</p>
                                            <h3 className="pricing-one__price-box">
                                                {plan?.yearlyPrice}
                                                <span>/Per {isYearly ? 'Year' : 'Month'}</span>
                                            </h3>
                                            <div className="pricing-one__border"></div>
                                        </div>
                                        <div className="pricing-one__feature-list-box">
                                            <h4 className="pricing-one__feature-title">Feature Description</h4>
                                            <ul className="list-unstyled pricing-one__feature-list">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index}>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>{feature}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pricing-one__btn-box">
                                            <Link href={'/inner/pricing'} className="pricing-one__btn thm-btn" >
                                                <span className="icon-right"></span> Know More
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ y: -40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="500ms">
                                <div className="pricing-one__single-last">
                                    <div className="pricing-one__custom-pricing-box">
                                        <div className="pricing-one__custom-pricing-icon">
                                            <Image src={customPricingIcon} width={24} height={24} alt="" />
                                        </div>
                                        <p className="pricing-one__custom-pricing-title">Need Custom?</p>
                                        <p className="pricing-one__custom-pricing-text">
                                            If you need any an custom packages
                                        </p>
                                        <div className="pricing-one__btn-box-two">
                                            <Link href={'/inner/contact'} className="pricing-one__btn-two thm-btn" >
                                                <span className="icon-right"></span> Contact Now
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="pricing-one__custom-pricing-img">
                                        <Image src={customPricingImg} width={210} height={209} alt="" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div style={{ display: `${!isYearly ? 'block' : 'none'}` }}>
                        <div className="row">
                            {pricingPlans.map((plan: PricingPlan) => (
                                <motion.div
                                    initial={{ y: plan?.id % 2 === 0 ? -40 : 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ amount: 0.01, once: true }}
                                    key={plan.id}
                                    className={`col-xl-3 col-lg-6 col-md-6 `} >
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__title-box">
                                            <p className="pricing-one__title">{plan.name}</p>
                                            <h3 className="pricing-one__price-box">
                                                {plan?.monthlyPrice}
                                                <span>/Per {isYearly ? 'Year' : 'Month'}</span>
                                            </h3>
                                            <div className="pricing-one__border"></div>
                                        </div>
                                        <div className="pricing-one__feature-list-box">
                                            <h4 className="pricing-one__feature-title">Feature Description</h4>
                                            <ul className="list-unstyled pricing-one__feature-list">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index}>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>{feature}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pricing-one__btn-box">
                                            <Link href={'/inner/pricing'} className="pricing-one__btn thm-btn" >
                                                <span className="icon-right"></span> Know More
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Custom Pricing Card */}
                            <motion.div
                                initial={{ y: -40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="500ms">
                                <div className="pricing-one__single-last">
                                    <div className="pricing-one__custom-pricing-box">
                                        <div className="pricing-one__custom-pricing-icon">
                                            <Image src={customPricingIcon} width={24} height={24} alt="" />
                                        </div>
                                        <p className="pricing-one__custom-pricing-title">Need Custom?</p>
                                        <p className="pricing-one__custom-pricing-text">
                                            If you need any an custom packages
                                        </p>
                                        <div className="pricing-one__btn-box-two">
                                            <Link href={'/inner/contact'} className="pricing-one__btn-two thm-btn" >
                                                <span className="icon-right"></span> Contact Now
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="pricing-one__custom-pricing-img">
                                        <Image src={customPricingImg} width={210} height={209} alt="" />
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

export default PricingOne;
