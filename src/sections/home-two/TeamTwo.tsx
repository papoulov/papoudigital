"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import { teamMembers } from '@/contents/team/team';
import { TeamMember } from '@/contents/team/teamType';
import Link from 'next/link';


const TeamTwo: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <section className="team-one">
            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-left sec-title-animation animation-style2">
                    <div className="section-title-two__tagline-box">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Team Member</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='Connect with our skilled team' textColor='black' isSpan={false} />
                        <TextAnimation text={`and tap into their expertise.`} textColor='#6232F8' isSpan={false} />

                    </h2>
                </div>
                <div className="team-one__carousel owl-theme owl-carousel">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Navigation, Autoplay]}
                        onSwiper={setSwiperInstance}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                        className="team-one__carousel"
                    >
                        {teamMembers.map((member: TeamMember) => (
                            <SwiperSlide key={member.id}>
                                <div className="team-one__single">
                                    <div className="team-one__content">
                                        <h3 className="team-one__name">
                                            <Link href={member.link}>{member.name}</Link>
                                        </h3>
                                        <p className="team-one__sub-title">{member.position}</p>
                                        <div className="team-one__social">
                                            <Link href="#">
                                                <span className="icon-pinterest"></span>
                                            </Link>
                                            <Link href="#">
                                                <span className="icon-linkedin"></span>
                                            </Link>
                                            <Link href="#">
                                                <span className="icon-twitter"></span>
                                            </Link>
                                            <Link href="#">
                                                <span className="icon-facebook"></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="team-one__img-box">
                                        <div className="team-one__shape-box">
                                            <div className="team-one__shape-1"></div>
                                        </div>
                                        <div className="team-one__img">
                                            <Image src={member.image} width={250} height={240} alt={member.name} />
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

export default TeamTwo;
