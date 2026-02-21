import React from 'react';
import ctaImg from '../../../public/assets/images/resources/cta-one-img-1.png';
import ctaBg from '../../../public/assets/images/shapes/cta-one-shape-bg.png';
import whyChooseBg from '../../../public/assets/images/shapes/why-choose-two-shape-bg.png';
import whyChooseStar from '../../../public/assets/images/shapes/why-choose-two-star.png';
import reviewShape from '../../../public/assets/images/shapes/why-choose-two-review-shape-1.png';
import whyChooseImg from '../../../public/assets/images/resources/why-choose-two-img-1.png';
import pointIcon1 from '../../../public/assets/images/icon/why-choose-two-point-icon-1.png';
import pointIcon2 from '../../../public/assets/images/icon/why-choose-two-point-icon-2.png';
import Link from 'next/link';
import Image from 'next/image';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import TextAnimation from '@/components/elements/TextAnimation';

const WhyChooseTwo: React.FC = () => {
    return (
        <>
            {/* CTA Section */}
            <section className="cta-one">
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__img">
                            <Image src={ctaImg} width={250} height={330} alt="Start your journey" />
                        </div>
                        <div className="cta-one__inner-content">
                            <div
                                className="cta-one__shape-bg" style={{ backgroundImage: `url(${ctaBg})` }} ></div>
                            <h3 className="cta-one__title">
                                Start your journey with our <br /> exceptional services.
                            </h3>
                            <div className="cta-one__btn">
                                <Link href="/inner/contact">
                                    Get Started <span className="icon-right-arrow-1"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="why-choose-two">
                <div
                    className="why-choose-two__shape-bg" style={{ backgroundImage: `url(${whyChooseBg})` }} ></div>

                <div className="why-choose-two__star zoominout">
                    <Image src={whyChooseStar} width={66} height={66} alt="Star shape" />
                </div>

                <div className="container">
                    <div className="row">
                        {/* Left Side */}
                        <div className="col-xl-5">
                            <div className="why-choose-two__left">
                                <div className="why-choose-two__review">
                                    <div className="why-choose-two__review-shape">
                                        <Image src={reviewShape} width={59} height={17} alt="Review shape" />
                                    </div>
                                    <div className="why-choose-two__review-count-box">
                                        <div className="why-choose-two__review-count count-box">
                                            <p className="count-text" >
                                                <AdvanceCountUp ending={100} durations={3} />
                                            </p>
                                            <span className="why-choose-two__count-letter">k</span>
                                        </div>
                                        <p className="why-choose-two__review-count-text">Reviews</p>
                                    </div>
                                </div>

                                <div className="why-choose-two__rating">
                                    <div className="why-choose-two__rating-count count-box">
                                        <p className="count-text" >
                                            <AdvanceCountUp ending={20} />
                                        </p>
                                        <span className="why-choose-two__rating-count-letter">m</span>
                                    </div>

                                    <div className="why-choose-two__rating-content">
                                        <form className="why-choose-two__star-rating">
                                            <input type="radio" id="3-stars" name="rating" value="3" />
                                            <label htmlFor="3-stars" className="star">
                                                &#9733;
                                            </label>
                                            <input type="radio" id="2-stars" name="rating" value="2" />
                                            <label htmlFor="2-stars" className="star">
                                                &#9733;
                                            </label>
                                            <input type="radio" id="1-star" name="rating" value="1" />
                                            <label htmlFor="1-star" className="star">
                                                &#9733;
                                            </label>
                                        </form>
                                        <p className="why-choose-two__rating-text">Average Rating</p>
                                    </div>
                                </div>

                                <div className="why-choose-two__img-box">
                                    <div className="why-choose-two__img">
                                        <Image src={whyChooseImg} width={520} height={500} alt="Why choose us" />
                                        <div className="why-choose-two__shape-box">
                                            <div className="why-choose-two__shape-1">
                                                <div className="why-choose-two__shape-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="col-xl-7">
                            <div className="why-choose-two__right">
                                <div className="section-title-two text-left sec-title-animation animation-style2">
                                    <div className="section-title-two__tagline-box">
                                        <div className="section-title-two__tagline-icon-box">
                                            <div className="section-title-two__tagline-icon-1"></div>
                                            <div className="section-title-two__tagline-icon-2"></div>
                                        </div>
                                        <span className="section-title-two__tagline">Why Choose Us</span>
                                    </div>
                                    <h2 className="section-title-two__title title-animation">
                                        <TextAnimation text='Enhance your success with our' textColor='black' isSpan={false} />
                                        <TextAnimation text='premium services.' textColor='#6232F8' isSpan={false} />

                                    </h2>
                                </div>

                                <p className="why-choose-two__text">
                                    Explore how our exceptional services can help you reach your goals and
                                    thrive. We offer practical solutions and expert guidance to elevate your
                                    business and drive growth.
                                </p>

                                <ul className="list-unstyled why-choose-two__points">
                                    <li>
                                        <div className="icon">
                                            <Image src={pointIcon1} width={32} height={32} alt="Tailored Solutions" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/inner/about">
                                                    Tailored Solutions for Optimal Results
                                                </Link>
                                            </h4>
                                            <p>
                                                Our premium services offer bespoke solutions designed to meet
                                                your unique needs.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <Image src={pointIcon2} width={32} height={32} alt="Expert Insights" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/inner/about">
                                                    Exclusive Access to Expert Insights
                                                </Link>
                                            </h4>
                                            <p>
                                                As a premium client, you gain access to our top-tier experts
                                                and cutting-edge resources.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseTwo;