"use client"
import React, { useState } from 'react';
import shapeImg from "../../../public/assets/images/shapes/testimonial-one-shape-1.png";
import starImg from "../../../public/assets/images/shapes/testimonial-one-star.png";
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import { testimonials } from '@/contents/testimonials/testimonials';
import { Testimonial } from '@/contents/testimonials/type';

const TestimonialOne: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <section className="testimonial-one">
            <div className="testimonial-one__shape-1 img-bounce">
                <Image src={shapeImg} width={256} height={562} alt="" />
            </div>
            <div className="testimonial-one__star rotate-me">
                <Image src={starImg} width={66} height={66} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Testimonial</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Our Satisfied Clients and Their' textColor='black' />
                        <TextAnimation text='Testimonials' />
                    </h2>
                </div>
                <div className="testimonial-one__carousel owl-theme owl-carousel">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={1000}
                        onSwiper={setSwiperInstance}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {testimonials.map((testimonial: Testimonial) => (
                            <SwiperSlide key={testimonial?.id}>
                                <div className="item" >
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__client-info">
                                            <div className="testimonial-one__client-img-box">
                                                <div className="testimonial-one__client-img">
                                                    <Image src={testimonial?.image} width={140} height={140} alt={testimonial.name} />
                                                </div>
                                                <div className="testimonial-one__quote">
                                                    <span className="icon-left"></span>
                                                </div>
                                            </div>
                                            <div className="testimonial-one__client-content">
                                                <p className="testimonial-one__client-name">
                                                    <span>{testimonial?.name}</span>
                                                </p>
                                                <span className="testimonial-one__client-sub-title">
                                                    {testimonial?.position}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="testimonial-one__text">{testimonial?.text}</p>
                                        <div className="testimonial-one__rating">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <React.Fragment key={`${testimonial.id}-star-${starIndex}`}>
                                                    <input
                                                        type="radio"
                                                        id={`${testimonial.id}-${5 - starIndex}-stars`}
                                                        name={`rating-${testimonial.id}`}
                                                        value={5 - starIndex}
                                                        defaultChecked={5 - starIndex === testimonial.rating}
                                                    />
                                                    <label
                                                        htmlFor={`${testimonial.id}-${5 - starIndex}-stars`}
                                                        className="star"
                                                    >
                                                        &#9733;
                                                    </label>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                    <div className="owl-nav-custom" style={{ zIndex: 111 }}>
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

export default TestimonialOne;