"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import shapeBg from '../../../public/assets/images/shapes/portfolio-one-shape-bg.jpg';
import shapeBgTwo from '../../../public/assets/images/shapes/portfolio-one-shape-bg-two.jpg';
import TextAnimation from '@/components/elements/TextAnimation';
import { portfolioItemsThree } from '@/contents/portfolio/portfolio';
import { PortfolioItemThree } from '@/contents/portfolio/portfolioType';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioThree: React.FC = () => {
    return (
        <section className="portfolio-one">
            <div
                className="portfolio-one__shape-bg"
                style={{ backgroundImage: `url(${shapeBg})` }}
            ></div>
            <div
                className="portfolio-one__shape-bg-two"
                style={{ backgroundImage: `url(${shapeBgTwo})` }}
            ></div>
            <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box justify-content-center">
                    <div className="section-title__tagline-icon-box">
                        <div className="section-title__tagline-icon-1"></div>
                        <div className="section-title__tagline-icon-2"></div>
                    </div>
                    <span className="section-title__tagline">Our Portfolio</span>
                </div>
                <h2 className="section-title__title title-animation">
                    <TextAnimation text='Discover Our Successful' textColor='white' />
                    <TextAnimation text='Case Studies' />
                </h2>
            </div>
            <div className="portfolio-one__carousel owl-theme owl-carousel">
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
                    {portfolioItemsThree.map((item: PortfolioItemThree) => (
                        <SwiperSlide key={item.id}>
                            <div className="item" >
                                <div className="portfolio-one__single">
                                    <div className="portfolio-one__img-box">
                                        <div className="portfolio-one__img">
                                            <Image src={item.image} width={478} height={548} loading='eager' alt={item.title} />
                                        </div>
                                        <div className="portfolio-one__content">
                                            <h3 className="portfolio-one__title">
                                                <Link href={item.link}>{item.title}</Link>
                                            </h3>
                                            <div className="portfolio-one__btn-box">
                                                <Link href={item.link} className="portfolio-one__btn thm-btn">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioThree;
