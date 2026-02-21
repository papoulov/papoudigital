"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion"
import BGFAQ from "../../../public/assets/images/shapes/faq-shape-bg.png" 
import Link from 'next/link';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';
const FaqInner: React.FC = () => {
    const { t } = usePapouDigitalContext();
    const accrodionItems1 = [
        {
            id: 1,
            title: t("servicesHubPage.faq.q1Title"),
            description: t("servicesHubPage.faq.q1Desc"),
        },
        {
            id: 2,
            title: t("servicesHubPage.faq.q2Title"),
            description: t("servicesHubPage.faq.q2Desc"),
        },
        {
            id: 3,
            title: t("servicesHubPage.faq.q3Title"),
            description: t("servicesHubPage.faq.q3Desc"),
        },
        {
            id: 4,
            title: t("servicesHubPage.faq.q4Title"),
            description: t("servicesHubPage.faq.q4Desc"),
        },
    ];
    const [active, setActive] = useState(2)
    return (
        <section className="faq-one">
            <div className="faq-one__shape-bg" style={{ backgroundImage: `url(${BGFAQ})` }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="faq-one__left">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">{t("servicesHubPage.faq.tagline")}</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">{t("servicesHubPage.faq.titleLine1")} <br />
                                    <span>{t("servicesHubPage.faq.titleLine2")}</span> </h2>
                            </div>
                            <p className="faq-one__text">{t("servicesHubPage.faq.text")}</p>
                            <div className="faq-one__btn-box">
                                <Link href="/inner/contact" className="faq-one__btn thm-btn thm-btn-two"><span
                                    className="icon-right"></span> {t("servicesHubPage.faq.button")}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                {
                                    accrodionItems1.map(item => <div key={item?.id} className={`accrodion ${active === item?.id ? '' : 'active'}`}>
                                        <div className="accrodion-title" onClick={() => setActive(pre => pre === item?.id ? 0 : item?.id)}>
                                            <h4>{item?.title}</h4>
                                        </div>
                                        <motion.div
                                            initial={{ y: -40, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeOut"
                                            }}
                                            viewport={{ amount: 0.01 }}
                                            className="accrodion-content"
                                            style={{ display: `${active === item?.id ? '' : 'none'}` }}>
                                            <div className="inner">
                                                <p>
                                                    {item?.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqInner;
