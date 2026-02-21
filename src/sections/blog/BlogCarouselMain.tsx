"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; 
import Image from 'next/image';
import Link from 'next/link';
import type { AdminBlogPost } from "@/types/adminBlog";
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';
const BlogCarouselMain: React.FC = () => {
    const { t } = usePapouDigitalContext();
    const [blogItems, setBlogItems] = useState<AdminBlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchManagedPosts = async () => {
            try {
                const response = await fetch("/api/blog-posts", { cache: "no-store" });
                if (!response.ok) return setBlogItems([]);

                const data = (await response.json()) as { posts?: AdminBlogPost[] };
                setBlogItems(data.posts ?? []);
            } catch {
                setBlogItems([]);
            } finally {
                setIsLoading(false);
            }
        };

        void fetchManagedPosts();
    }, []);

    return (
        <section className="blog-carousel-page">
            <div className="container">
                <div className="blog-carousel-style owl-carousel owl-theme  ">
                    {isLoading && <p style={{ marginBottom: 20 }}>{t("common.blogLoading")}</p>}
                    {!isLoading && blogItems.length === 0 && (
                        <div style={{ marginBottom: 20 }}>
                            <h3 style={{ marginBottom: 12 }}>{t("common.blogEmptyTitle")}</h3>
                            <p>{t("common.blogEmptyText")}</p>
                        </div>
                    )}
                    {!isLoading && blogItems.length > 0 && (
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        speed={1000}
                        modules={[Navigation, Autoplay, Pagination]}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="blog-two__swiper"
                    >
                        {blogItems.map((post) => (
                            <SwiperSlide className='item' key={post.id}>
                                <div className="blog-two__single">
                                    <div className="blog-two__img">
                                        <Image src={post.image} width={362} height={240} alt={post.title} />
                                        <div className="blog-two__plus">
                                            <Link href={post.link || "/inner/blog-details"}>
                                                <span className="icon-plus"></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-two__content">
                                        <div className="blog-two__date">
                                            <p>
                                                {post.date} <span className="icon-calendar"></span>
                                            </p>
                                        </div>
                                        <div className="blog-two__content-inner">
                                            <ul className="list-unstyled blog-two__tag">
                                                {post.tags.map((tag, i) => (
                                                    <li key={i}>
                                                        <p>{tag}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <h3 className="blog-two__title">
                                                <Link href={post.link || "/inner/blog-details"}>{post.title}</Link>
                                            </h3>
                                            {post.subtitle && (
                                                <p style={{ marginBottom: 8, fontWeight: 600 }}>{post.subtitle}</p>
                                            )}
                                            <p className="blog-two__text">{post.description}</p>
                                        </div>
                                        <div className="blog-two__read-more">
                                            <div className="blog-two__read-more-line"></div>
                                            <Link href={post.link || "/inner/blog-details"} className="blog-two__read-more-text">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogCarouselMain;
