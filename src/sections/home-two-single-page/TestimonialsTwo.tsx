"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import shapeBg1 from '../../../public/assets/images/shapes/testimonial-two-shape-bg-1.png';
import shapeBg2 from '../../../public/assets/images/shapes/testimonial-two-shape-bg-2.png';
import shape1 from '../../../public/assets/images/shapes/testimonial-two-shape-1.png';
import shape2 from '../../../public/assets/images/shapes/testimonial-two-shape-2.png';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import { testimonialsTwo } from '@/contents/testimonials/testimonials';
import { TestimonialTwo } from '@/contents/testimonials/type';
import Link from 'next/link';

const TestimonialsTwo: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    return (
        <section className="testimonial-two">
            {/* Backgrounds & Shapes */}
            <div
                className="testimonial-two__shape-bg-1"
                style={{ backgroundImage: `url(${shapeBg1})` }}
            ></div>
            <div
                className="testimonial-two__shape-bg-2"
                style={{ backgroundImage: `url(${shapeBg2})` }}
            ></div>
            <div className="testimonial-two__shape-1">
                <Image src={shape1} width={818} height={785} alt="Decorative Shape 1" />
            </div>
            <div className="testimonial-two__shape-2">
                <Image src={shape2} width={356} height={433} alt="Decorative Shape 2" />
            </div>
            <div className="testimonial-two__quote">
                <span className="icon-left"></span>
            </div>

            <div className="container">
                <div className="section-title-two text-left sec-title-animation animation-style2">
                    <div className="section-title-two__tagline-box">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Testimonial</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='What our satisfied customers' textColor='black' isSpan={false} />
                        <TextAnimation text={`are saying about us.`} textColor='#6232F8' isSpan={false} />
                    </h2>
                </div>

                <div className="testimonial-two__carousel owl-theme owl-carousel">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Navigation, Autoplay]}
                        onSwiper={setSwiperInstance}
                        className="testimonial-two__swiper"
                    >
                        {testimonialsTwo.map((t: TestimonialTwo) => (
                            <SwiperSlide key={t.id}>
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__img-box">
                                        <div className="testimonial-two__img">
                                            <Image src={t.image} width={320} height={380} alt={t.name} />
                                        </div>
                                    </div>
                                    <div className="testimonial-two__content">
                                        <div className="testimonial-two__client-info">
                                            <h4 className="testimonial-two__client-name">
                                                <Link href={t.link}>{t.name}</Link>
                                            </h4>
                                            <p className="testimonial-two__client-title">{t.title}</p>
                                        </div>
                                        <p className="testimonial-two__text">{t.text}</p>
                                        <form className="testimonial-two__star-rating">
                                            <input type="radio" id={`star-${t.id}-1`} name={`rating-${t.id}`} value="1" />
                                            <label htmlFor={`star-${t.id}-1`} className="star">&#9733;</label>
                                            <input type="radio" id={`star-${t.id}-2`} name={`rating-${t.id}`} value="2" />
                                            <label htmlFor={`star-${t.id}-2`} className="star">&#9733;</label>
                                            <input type="radio" id={`star-${t.id}-3`} name={`rating-${t.id}`} value="3" />
                                            <label htmlFor={`star-${t.id}-3`} className="star">&#9733;</label>
                                            <input type="radio" id={`star-${t.id}-4`} name={`rating-${t.id}`} value="4" />
                                            <label htmlFor={`star-${t.id}-4`} className="star stroke-clr">&#9733;</label>
                                            <input type="radio" id={`star-${t.id}-5`} name={`rating-${t.id}`} value="5" />
                                            <label htmlFor={`star-${t.id}-5`} className="star stroke-clr">&#9733;</label>
                                        </form>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom Navigation Buttons */}
                    <div className="owl-nav" style={{ zIndex: 111 }}>
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className="owl-prev"
                            aria-label="Previous Slide"
                            type="button"
                        >
                            <span className="icon-left-arrow"></span>
                        </button>
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className="owl-next"
                            aria-label="Next Slide"
                            type="button"
                        >
                            <span className="icon-right-arrow"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsTwo;
