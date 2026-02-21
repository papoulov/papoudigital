"use client"
import React from 'react';
import { motion } from "framer-motion"
import TextAnimation from '@/components/elements/TextAnimation';
import { servicesThree } from '@/contents/service/service';
import { ServicesThree } from '@/contents/service/type';
import Link from 'next/link';

const ServiceThree: React.FC = () => {
    return (
        <section className="services-three pdt120" id='services'>
            <div className="services-three__shape-1"></div>
            <div className="services-three__shape-2 zoominout"></div>
            <div className="services-three__shape-3"></div>

            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Services</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='We provide the best' textColor='black' />
                        <TextAnimation text='services For IT Solution' />
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="row">
                    {servicesThree.map((service: ServicesThree) => (
                        <motion.div
                            initial={{ y: service?.id % 2 === 0 ? -50 : 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.01, once: true }}
                            key={service.id} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="services-three__single">
                                <div className="services-three__icon">
                                    <span className={service.icon}></span>
                                </div>
                                <div className="services-three__content">
                                    <h3 className="services-three__title">
                                        <Link href={service.link}>{service.title}</Link>
                                    </h3>
                                    <p className="services-three__text">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceThree;
