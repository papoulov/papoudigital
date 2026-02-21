"use client"
import React from 'react';
import { servicesOneData } from '../../contents/service/service';
import type { ServiceOneItem } from '../../contents/service/type';
import { motion } from "framer-motion"
import TextAnimation from '@/components/elements/TextAnimation';
import Link from 'next/link';
import Image from 'next/image';
const ServiceOne: React.FC = () => {
    return (
        <section className="services-one pdb90" id='services'>
            <div className="services-one__shape-1"></div>
            <div className="services-one__shape-2"></div>
            <div className="services-one__shape-3"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Services</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Transform Your Business' textColor='black' />
                        <TextAnimation text='With Proven Expertise' />
                    </h2>
                </div>
                <div className="row">
                    {servicesOneData.map((service: ServiceOneItem, i) => (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.3 * i,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.01, once: true }}
                            key={service?.id}
                            className="col-xl-3 col-lg-6 col-md-6" >
                            <div className="services-one__single">
                                <div className="services-one__count"></div>
                                <div className="services-one__content-box">
                                    <div className="services-one__icon">
                                        <Image src={service?.icon} width={48} height={48} alt={service.title} />
                                    </div>
                                    <h3 className="services-one__title">
                                        <Link href={service?.link}>
                                            {service?.title.split(' & ').map((part, index) => (
                                                <React.Fragment key={index}>
                                                    {index > 0 && ' & '}
                                                    {part}
                                                    {index === 0 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </Link>
                                    </h3>
                                </div>
                                <div className="services-one__more-details">
                                    <Link href={service?.link}>
                                        <i className="icon-right"></i> More Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceOne;