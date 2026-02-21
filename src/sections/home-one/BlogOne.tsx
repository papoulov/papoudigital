"use client"
import React, { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import starImg from "../../../public/assets/images/shapes/blog-one-star.png";
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import { blogOnePosts } from '@/contents/blog/blog';
import { BlogOnePost } from '@/contents/blog/blogType';

const BlogOne: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <section className="blog-one">
            <div className="blog-one__star zoominout">
                <Image src={starImg} width={66} height={66} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Blogs</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Discover our latest news' textColor='black' />
                        <TextAnimation text='and updates now.' />
                    </h2>
                </div>
                <div className="blog-one__carousel owl-theme ">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
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
                        {blogOnePosts.map((post: BlogOnePost) => (
                            <SwiperSlide key={post.id}>
                                <div className="item">
                                    <div className="blog-one__single">
                                        <div className="blog-one__img">
                                            <Image src={post.image} width={368} height={250} alt={post.title} />
                                            <div className="blog-one__plus">
                                                <span style={{ cursor: 'pointer' }}>
                                                    <span className="icon-plus"></span>
                                                </span>
                                            </div>
                                            <div className="blog-one__tags">
                                                {post.tags.map((tag: string, index: number) => (
                                                    <span key={index}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="blog-one__content">
                                            <h3 className="blog-one__title">
                                                <span style={{ cursor: 'pointer' }}>{post.title}</span>
                                            </h3>
                                            <p className="blog-one__text">{post.text}</p>
                                            <div className="blog-one__user">
                                                <div className="blog-one__user-img">
                                                    <Image src={post.author.image} alt={post.author.name} />
                                                </div>
                                                <div className="blog-one__user-content">
                                                    <h5 className="blog-one__user-name">
                                                        <span style={{ cursor: 'pointer' }}>{post.author.name}</span>
                                                    </h5>
                                                    <p className="blog-one__date">{post.date}</p>
                                                </div>
                                            </div>
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

export default BlogOne;