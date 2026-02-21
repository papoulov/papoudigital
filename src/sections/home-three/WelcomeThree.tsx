"use client"
import React from 'react';
import { motion } from "framer-motion"
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import Link from 'next/link';
import { welcomeItems } from '@/contents/welcome/welcome';
import { WelcomeItem } from '@/contents/welcome/welcomeType';

const WelcomeThree: React.FC = () => {
    return (
        <section className="welcome-one">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Welcome to PapouDigital</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Perfect solution for your' textColor='black' />
                        <TextAnimation text='IT problems' />
                    </h2>
                </div>

                <div className="row">
                    {welcomeItems.map((item: WelcomeItem) => (
                        <motion.div
                            key={item.id}
                            className="col-xl-4 col-lg-6"
                            initial={{ y: item?.id % 2 === 0 ? -30 : 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.5, once: true }}
                        >
                            <div className="welcome-one__single">
                                <div className="welcome-one__img">
                                    <Image src={item.img} width={410} height={350} alt={item.title} />
                                </div>
                                <div className="welcome-one__content">
                                    <div className="welcome-one__icon">
                                        <span className={item.iconClass}></span>
                                    </div>
                                    <h3 className="welcome-one__title">
                                        <Link href={item.link}>{item.title}</Link>
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WelcomeThree;
