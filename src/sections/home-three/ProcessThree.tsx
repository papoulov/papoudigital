"use client"
import React from 'react';
import { motion } from "framer-motion"
import TextAnimation from '@/components/elements/TextAnimation';
import { processSteps } from '@/contents/process/process';
import { ProcessStepThree } from '@/contents/process/processType';
const ProcessThree: React.FC = () => {
    return (
        <section className="process-three">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Explore Our Effortless' textColor='black' />
                        <TextAnimation text='Work Process.' />
                    </h2>
                </div>
                <div className="row">
                    {processSteps.map((step: ProcessStepThree) => (
                        <motion.div
                            key={step.id}
                            initial={{ y: step?.id % 2 === 0 ? -80 : 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.01, once: true }}
                            className="col-xl-3 col-lg-6 col-md-6"
                        >
                            <div
                                className={`process-three__single ${step.reverse ? 'process-three__single--two' : ''}`} >
                                {step.reverse ? (
                                    <>
                                        <div className="process-three__content">
                                            <h4 className="process-three__title">{step.title}</h4>
                                            <p className="process-three__text">{step.text}</p>
                                        </div>
                                        <div className="process-three__icon-box">
                                            <div className="process-three__count"></div>
                                            <div className="process-three__icon">
                                                <span className={step.icon}></span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="process-three__icon-box">
                                            <div className="process-three__count"></div>
                                            <div className="process-three__icon">
                                                <span className={step.icon}></span>
                                            </div>
                                        </div>
                                        <div className="process-three__content">
                                            <h4 className="process-three__title">{step.title}</h4>
                                            <p className="process-three__text">{step.text}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessThree;
