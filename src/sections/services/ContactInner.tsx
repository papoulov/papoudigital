"use client"
import React from 'react';
import userImg from '../../../public/assets/images/resources/cta-three-user-img-1.jpg'; 
import Image from 'next/image';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';

const ContactInner: React.FC = () => { 
    const { t } = usePapouDigitalContext();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
        alert(t("servicesHubPage.contact.successMessage"));
    };

    return (
        <section className="cta-three">
            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-xl-5 col-lg-6">
                        <div className="cta-three__left">
                            <div className="cta-three__left-content">
                                <div className="cta-three__left-content-shape-bg" ></div>

                                <div className="cta-three__title-box">
                                    <div className="cta-three__title-tagline-box">
                                        <div className="cta-three__title-tagline-icon-box">
                                            <div className="cta-three__title-tagline-icon-1"></div>
                                            <div className="cta-three__title-tagline-icon-2"></div>
                                        </div>
                                        <span className="cta-three__title-tagline">{t("servicesHubPage.contact.tagline")}</span>
                                    </div>
                                    <h2 className="cta-three__title">
                                        {t("servicesHubPage.contact.titleLine1")} <br /> {t("servicesHubPage.contact.titleLine2")}
                                    </h2>
                                </div>

                                <p className="cta-three__text">
                                    {t("servicesHubPage.contact.textLine1")} <br />
                                    {t("servicesHubPage.contact.textLine2")}
                                </p>

                                <div className="cta-three__user">
                                    <div className="cta-three__user-img">
                                        <Image src={userImg} width={60} height={60} alt="Project Manager" />
                                    </div>
                                    <div className="cta-three__user-content">
                                        <p className="cta-three__user-name">{t("servicesHubPage.contact.leadName")}</p>
                                        <span className="cta-three__user-sub-title">{t("servicesHubPage.contact.leadRole")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-xl-7 col-lg-6">
                        <div className="cta-three__right">
                            <form
                                onSubmit={handleSubmit}
                                className="contact-form-validated cta-three__form"
                            >
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="cta-three__input-box">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder={t("servicesHubPage.contact.placeholderName")}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="cta-three__input-box">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder={t("servicesHubPage.contact.placeholderEmail")}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-12 col-lg-12">
                                        <div className="cta-three__input-box">
                                            <input
                                                type="text"
                                                name="inquiry"
                                                placeholder={t("servicesHubPage.contact.placeholderInquiry")}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="cta-three__input-box text-message-box">
                                            <textarea
                                                name="details"
                                                placeholder={t("servicesHubPage.contact.placeholderDetails")}
                                                rows={4}
                                            ></textarea>
                                        </div>

                                        <div className="cta-three__btn-box">
                                            <button
                                                type="submit"
                                                className="cta-three__btn thm-btn thm-btn-two"
                                            >
                                                <span className="icon-right"></span> {t("servicesHubPage.contact.sendMessage")}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInner;
