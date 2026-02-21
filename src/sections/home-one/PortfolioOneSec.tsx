"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import Link from 'next/link';
import { portfolioOneItems } from '@/contents/portfolio/portfolio';
import { PortfolioOne } from '@/contents/portfolio/portfolioType';

const PortfolioOneSec: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    return (
        <section className="portfolio-one">
            <div className="portfolio-one__shape-bg"></div>
            <div className="portfolio-one__shape-bg-two"></div>
            <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box justify-content-center">
                    <div className="section-title__tagline-icon-box">
                        <div className="section-title__tagline-icon-1"></div>
                        <div className="section-title__tagline-icon-2"></div>
                    </div>
                    <span className="section-title__tagline">Our Portfolio</span>
                </div>
                <h2 className="section-title__title title-animation">
                    <TextAnimation text="Discover Our Successful" textColor="white" />
                    <TextAnimation text="Case Studies" />
                </h2>
            </div>
            <div className="portfolio-one__carousel ">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    loop={true}
                    modules={[Autoplay]}
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
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {portfolioOneItems.map((item: PortfolioOne) => (
                        <SwiperSlide key={item.id}>
                            <div className="item" >
                                <div className="portfolio-one__single">
                                    <div className="portfolio-one__img-box">
                                        <div className="portfolio-one__img">
                                            <Image src={item?.image} width={478} height={548} alt={item?.title} />
                                        </div>
                                        <div className="portfolio-one__content">
                                            <h3 className="portfolio-one__title">
                                                <Link href={item?.link}>{item?.title}</Link>
                                            </h3>
                                            <p className="portfolio-one__text">{item?.description}</p>
                                            <div className="portfolio-one__btn-box">
                                                <Link href={item?.link} className="portfolio-one__btn thm-btn">
                                                    <span className="icon-right"></span> Know More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>

            </div>
            <div className="portfolio-one__bottom">
                <div className="container">
                    <div className="portfolio-one__btn-box-two">
                        <Link href="/inner/portfolio">
                            All Projects <span className="icon-right"></span>
                        </Link>
                        <div className="owl-nav-portfolio" style={{ zIndex: 111 }}>
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
            </div>
        </section>
    );
};

export default PortfolioOneSec;