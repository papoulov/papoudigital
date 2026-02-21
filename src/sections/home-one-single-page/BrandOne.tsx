"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Image imports
import brand1 from '../../../public/assets/images/brand/brand-1-1.png';
import brand2 from '../../../public/assets/images/brand/brand-1-2.png';
import brand3 from '../../../public/assets/images/brand/brand-1-3.png';
import brand4 from '../../../public/assets/images/brand/brand-1-4.png';
import brand5 from '../../../public/assets/images/brand/brand-1-5.png';
import Image from 'next/image';

// Brand data array
const brandData = [
    { id: 1, image: brand1, alt: 'Brand 1' },
    { id: 2, image: brand2, alt: 'Brand 2' },
    { id: 3, image: brand3, alt: 'Brand 3' },
    { id: 4, image: brand4, alt: 'Brand 4' },
    { id: 5, image: brand5, alt: 'Brand 5' }
];

const BrandOne: React.FC = () => {
    return (
        <section className="brand-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="brand-one__left">
                            <p className="brand-one__text">
                                We have <span>over 250 trusted</span> <br /> brands worldwide
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="brand-one__right">
                            <div className="brand-one__carousel ">
                                <Swiper
                                    className='project-carousel'
                                    modules={[Autoplay]}
                                    spaceBetween={2}
                                    slidesPerView={3}
                                    loop={true}
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
                                    }}
                                >
                                    {brandData.map((brand) => (
                                        <SwiperSlide key={`project-${brand?.id}`}>
                                            <div className="item" >
                                                <div className="brand-one__single" >
                                                    <div className="brand-one__img">
                                                        <Image src={brand.image} width={256} height={150} alt={brand.alt} />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandOne;