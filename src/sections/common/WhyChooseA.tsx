 "use client"
import React from "react";
import img1 from "../../../public/assets/images/whyus1.png";
import img2 from "../../../public/assets/images/africa1.png";
import imgShape1 from "../../../public/assets/images/shapes/why-choose-four-img-shape-1.png";
import icon1 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-1.png";
import icon2 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-2.png";
import icon3 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-3.png";
import icon4 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-4.png";
import TextAnimation from "@/components/elements/TextAnimation";
import Image from "next/image";
import { usePapouDigitalContext } from "@/components/context/usePapouDigitalContext";

const WhyChooseA: React.FC = () => {
    const { t } = usePapouDigitalContext();
    return (
        <section className="why-choose-four">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div
                            className="why-choose-four__left"
                            data-aos="slide-right"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">
                                        {t("aboutPage.whyTagline")}
                                    </span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    <TextAnimation text={t("aboutPage.whyTitleLine1")} textColor='black' isSpan={false} />
                                    <TextAnimation text={t("aboutPage.whyTitleLine2")} isSpan={false} textColor='#6232F8' />

                                </h2>
                            </div>

                            <p className="why-choose-four__text">
                                {t("aboutPage.whyText")}
                            </p>

                            {/* Images */}
                            <div className="why-choose-four__img-box">
                                <div className="why-choose-four__img">
                                    <Image src={img1} width={354} height={354} alt="Why Choose Us" />
                                </div>
                                <div className="why-choose-four__img-shape-1 img-bounce">
                                    <Image src={imgShape1} width={393} height={363} alt="Decorative Shape" />
                                </div>
                                <div className="why-choose-four__img-2">
                                    <Image src={img2} width={358} height={358} alt="Team Collaboration" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-xl-6">
                        <div className="why-choose-four__right">
                            <h2 className="why-choose-four__right-title">
                                {t("aboutPage.whyRightTitle")}
                            </h2>

                            <div className="row">
                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="100"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon1} width={33} height={32} alt="Analytics Icon" />
                                        </div>
                                        <h3>{t("aboutPage.feature1Title")}</h3>
                                        <p>{t("aboutPage.feature1Text")}</p>
                                    </div>
                                </div>

                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="200"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon2} width={33} height={32} alt="Integration Icon" />
                                        </div>
                                        <h3>{t("aboutPage.feature2Title")}</h3>
                                        <p>{t("aboutPage.feature2Text")}</p>
                                    </div>
                                </div>

                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="300"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon3} width={33} height={32} alt="Data Icon" />
                                        </div>
                                        <h3>{t("aboutPage.feature3Title")}</h3>
                                        <p>{t("aboutPage.feature3Text")}</p>
                                    </div>
                                </div>

                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="400"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon4} width={33} height={32} alt="Support Icon" />
                                        </div>
                                        <h3>{t("aboutPage.feature4Title")}</h3>
                                        <p>{t("aboutPage.feature4Text")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Right Side */}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseA;
