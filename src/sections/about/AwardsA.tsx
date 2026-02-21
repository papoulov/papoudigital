"use client"
import React from "react";
import awardImg1 from "../../../public/assets/images/resources/awards-one-img-1.jpg";
import awardImg2 from "../../../public/assets/images/resources/awards-one-img-2.jpg";
import TextAnimation from "@/components/elements/TextAnimation";
import Image from "next/image";
import AdvanceCountUp from "@/components/elements/AdvanceCountUp";
import { usePapouDigitalContext } from "@/components/context/usePapouDigitalContext";

const AwardsA: React.FC = () => {
    const { t } = usePapouDigitalContext();
    return (
        <section className="awards-one">
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-xl-7">
                        <div
                            className="awards-one__left"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            {/* Section Title */}
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">{t("aboutPage.awardsTagline")}</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    <TextAnimation text={t("aboutPage.awardsTitleLine1")} textColor='black' isSpan={false} />
                                    <TextAnimation text={t("aboutPage.awardsTitleLine2")} isSpan={false} textColor='#6232F8' />
                                </h2>
                            </div>

                            {/* Image Box */}
                            <div className="awards-one__img-box">
                                <div className="awards-one__img">
                                    <Image src={awardImg1} width={524} height={557} alt="Award Ceremony" />
                                </div>

                                <div className="awards-one__img-2">
                                    <Image src={awardImg2} width={283} height={294} alt="Award Celebration" />

                                    <div className="awards-one__experience-box">
                                        <div className="awards-one__count count-box">
                                            <h3 className="count-text" >
                                                <AdvanceCountUp ending={40} />
                                            </h3>
                                            <span>+</span>
                                        </div>
                                        <p className="awards-one__count-text">{t("aboutPage.awardsWinning")}</p>
                                    </div>

                                    {/* Shapes */}
                                    <div className="awards-one__shape-1"></div>
                                    <div className="awards-one__shape-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-xl-5">
                        <div className="awards-one__right">
                            <ul className="awards-one__awards-list list-unstyled">
                                {/* SINGLE ITEM */}
                                <li>
                                    <div className="icon">
                                        <span className="icon-trophy-1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>{t("aboutPage.award1Title")}</h3>
                                        <p>{t("aboutPage.award1Text")}</p>
                                        <div className="awards-one__tag-and-date">
                                            <div className="awards-one__tag">
                                                <p>
                                                    <span className="icon-sparkle"></span>{t("aboutPage.award1Tag")}
                                                </p>
                                            </div>
                                            <div className="awards-one__date">
                                                <p>
                                                    <span className="fas fa-calendar-alt"></span> {t("aboutPage.award1Date")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* SINGLE ITEM */}
                                <li>
                                    <div className="icon">
                                        <span className="icon-trophy-1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>{t("aboutPage.award2Title")}</h3>
                                        <p>{t("aboutPage.award2Text")}</p>
                                        <div className="awards-one__tag-and-date">
                                            <div className="awards-one__tag">
                                                <p>
                                                    <span className="icon-sparkle"></span>{t("aboutPage.award2Tag")}
                                                </p>
                                            </div>
                                            <div className="awards-one__date">
                                                <p>
                                                    <span className="fas fa-calendar-alt"></span> {t("aboutPage.award2Date")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* SINGLE ITEM */}
                                <li>
                                    <div className="icon">
                                        <span className="icon-trophy-1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>{t("aboutPage.award3Title")}</h3>
                                        <p>{t("aboutPage.award3Text")}</p>
                                        <div className="awards-one__tag-and-date">
                                            <div className="awards-one__tag">
                                                <p>
                                                    <span className="icon-sparkle"></span>{t("aboutPage.award3Tag")}
                                                </p>
                                            </div>
                                            <div className="awards-one__date">
                                                <p>
                                                    <span className="fas fa-calendar-alt"></span> {t("aboutPage.award3Date")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* END RIGHT SIDE */}
                </div>
            </div>
        </section>
    );
};

export default AwardsA;
