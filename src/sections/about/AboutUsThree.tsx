"use client"
import React from 'react';
import aboutImg3 from "../../../public/assets/images/shapes/about-three-shape-5.png"
import aboutImg5 from "../../../public/assets/images/icon/about-three-points-icon-1.png"
import aboutImg6 from "../../../public/assets/images/icon/about-three-points-icon-2.png"
import aboutImg7 from "../../../public/assets/images/icon/about-two-icon-3.png"
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import Link from 'next/link';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';

const AboutUsThree: React.FC = () => {
    const { handleVideoClick, t, asset } = usePapouDigitalContext();
    const aboutMainImage = asset("image.about.main", "/assets/images/about1.png");
    const aboutSecondaryImage = asset("image.about.secondary", "/assets/images/about2.png");
    const aboutVideo = asset("image.about.video", "/assets/video/AfricaDigital.mp4");
    return (
        <section className="about-three">
            <div className="container">
                <div className="about-three__top-title-wrap">
                    <h2 className="about-three__top-title">
                        {t("aboutPage.topTitlePrefix")}{" "}
                        <span className="about-three__top-title-highlight">{t("aboutPage.topTitleHighlight")}</span>
                        {" "}
                        {t("aboutPage.topTitleSuffix")}
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-7">
                        <div className="about-three__left" >
                            <div className="about-three__img-box">
                                <div className="about-three__img">
                                    <Image
                                        src={aboutMainImage}
                                        width={445}
                                        height={480}
                                        alt="About PapouDigital"
                                        className="about-three__img-main"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                                <div className="about-three__img-2">
                                    <Image src={aboutSecondaryImage} width={280} height={306} alt="PapouDigital team" />
                                </div>
                                <div className="about-three__experience-box">
                                    <div className="about-three__count count-box">
                                        <h3 className="count-text" ><AdvanceCountUp ending={12} /></h3>
                                    </div>
                                    <p className="about-three__count-text">{t("aboutPage.yearsOf")} <br /> {t("aboutPage.experience")}</p>
                                </div>
                                <div className="about-three__video-link">
                                    <Link href="#"
                                        onClick={(e) => handleVideoClick(e, aboutVideo)}
                                        className="video-popup">
                                        <div className="about-three__video-icon">
                                            <span className="icon-play-buttton"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div className="about-three__shape-1 rotate-me"></div>
                                <div className="about-three__shape-2"></div>
                                <div className="about-three__shape-3"></div>
                                <div className="about-three__shape-4"></div>
                                <div className="about-three__shape-5 rotate-me">
                                    <Image src={aboutImg3} width={33} height={36} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="about-three__right">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">{t("aboutPage.tagline")}</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    <TextAnimation text={t("aboutPage.heroTitleLine1")} textColor='black' isSpan={false} />
                                    <TextAnimation text={t("aboutPage.heroTitleLine2")} isSpan={false} textColor='#6232F8' />
                                    <span> </span><br /></h2>
                            </div>
                            <p className="about-three__text">{t("aboutPage.heroText")}</p>
                            <ul className="about-three__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <Image src={aboutImg5} width={60} height={60} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>{t("aboutPage.valuesTitle")}</h3>
                                        <p>{t("aboutPage.valuesText")}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <Image src={aboutImg6} width={60} height={60} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>{t("aboutPage.missionTitle")}</h3>
                                        <p>{t("aboutPage.missionText")}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <Image src={aboutImg7} width={60} height={60} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>{t("aboutPage.visionTitle")}</h3>
                                        <p>{t("aboutPage.visionText")}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsThree;
