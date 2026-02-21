"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import Image from 'next/image';
import sliderShape1 from '../../../public/assets/images/shapes/main-slider-shape-1.png';
import sliderShape2 from '../../../public/assets/images/shapes/main-slider-shape-2.png';
import sliderShape3 from '../../../public/assets/images/shapes/main-slider-shape-3.png';
import sliderShape4 from '../../../public/assets/images/shapes/main-slider-shape-4.png';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import Link from 'next/link';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';

interface BannerSliderItem {
    id: number;
    titleVariant: "africa" | "legacy";
    happyClients: number;
    positiveRating: number;
}
const sliderItems: BannerSliderItem[] = [
    {
        id: 1,
        titleVariant: "africa",
        happyClients: 50,
        positiveRating: 30
    },
    {
        id: 2,
        titleVariant: "legacy",
        happyClients: 50,
        positiveRating: 25,
    }
];

const BannerTwo: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { t, asset } = usePapouDigitalContext();
    const heroAfricaImage = asset("image.home2.banner.hero.africa", "/assets/images/african-tech.png");
    const heroLegacyImage = asset("image.home2.banner.hero.legacy", "/assets/images/muslim-tech.png");
    const clientImage1 = asset("image.home2.banner.client.1", "/assets/images/resources/main-slider-satisfied-client-1-1.jpg");
    const clientImage2 = asset("image.home2.banner.client.2", "/assets/images/resources/main-slider-satisfied-client-1-2.jpg");
    return (
        <section className="main-slider">
            <div className="main-slider__shape-bg-2"></div>
            <div className="main-slider__shape-bg"></div>
            <div className="main-slider__shape-bg-3 img-bounce"></div>
            <div className="main-slider__shape-1 zoominout">
                <Image src={sliderShape1} width={42} height={34} alt="shape-image" />
            </div>
            <div className="main-slider__shape-2 rotate-me">
                <Image src={sliderShape2} width={333} height={318} alt="shape-image" />
            </div>
            <div className="main-slider__shape-3 float-bob-x">
                <Image src={sliderShape3} width={148} height={56} alt="shape-image" />
            </div>
            <div className="main-slider__shape-4 rotate-me">
                <Image src={sliderShape4} width={122} height={83} alt="shape-image" />
            </div>
            <div className="main-slider__carousel owl-carousel owl-theme">
                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    spaceBetween={0}
                    effect="fade"
                    slidesPerView={1}
                    autoplay={{
                        delay: 11500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={2000}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={setSwiperInstance}
                >
                    {sliderItems.map((item: BannerSliderItem, index) => (
                        <SwiperSlide
                            key={item.id}
                        >
                            <div className={`item ${index === activeIndex ? "active" : ""}`}>
                                <div className="main-slider__img-box">
                                    <div className="main-slider__img">
                                        <Image
                                            src={item.titleVariant === "legacy" ? heroLegacyImage : heroAfricaImage}
                                            width={630}
                                            height={734}
                                            loading="eager"
                                            alt=""
                                        />
                                        <div className="main-slider__img-shape-box ">
                                            <div className="main-slider__img-shape-1">
                                                <div className="main-slider__img-shape-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="main-slider__content">
                                        <div className={`main-slider__title-box ${item.titleVariant === "africa" ? "main-slider__title-box--no-cta" : ""}`}>
                                            {item.titleVariant === "africa" ? (
                                                <h2 className="main-slider__title">
                                                    {t("common.heroTitleHome2Prefix")}
                                                    <span className="main-slider__title-highlight-africa">
                                                        {t("common.heroTitleHome2Highlight")}
                                                    </span>
                                                    {t("common.heroTitleHome2Suffix")}
                                                </h2>
                                            ) : (
                                                <h2 className="main-slider__title">
                                                    {t("common.heroTitleHome2LegacyLine1")} <br /> {t("common.heroTitleHome2LegacyLine2")}{" "}
                                                    <span>
                                                        {t("common.heroTitleHome2LegacyHighlight")} <br />
                                                        {t("common.heroTitleHome2LegacyLine3")}
                                                    </span>
                                                </h2>
                                            )}
                                            <div className={`main-slider__btn ${item.titleVariant === "africa" ? "main-slider__btn--spacer" : ""}`}>
                                                <Link href="/inner/contact"><span className="icon-right"></span>{t("common.heroCtaHome2")}</Link>
                                            </div>
                                        </div>
                                        <p className={`main-slider__text ${item.titleVariant === "africa" ? "main-slider__text--near-title" : ""}`}>
                                            {item.titleVariant === "africa"
                                                ? t("common.heroTextHome2Africa")
                                                : t("common.heroTextHome2Legacy")}
                                        </p>
                                        <div className="main-slider__satisfied-client-and-rating-box">
                                            <div className="main-slider__satisfied-client-box">
                                                <ul className="list-unstyled main-slider__satisfied-client-list">
                                                    <li>
                                                        <div className="main-slider__satisfied-client-img">
                                                            <Image src={clientImage1} width={42} height={42} alt="" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="main-slider__satisfied-client-img">
                                                            <Image src={clientImage2} width={42} height={42} alt="" />
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="main-slider__satisfied-client-content">
                                                    <div className="main-slider__satisfied-client-count count-box">
                                                        <h4 className="count-text" ><AdvanceCountUp ending={item?.happyClients} /> </h4>
                                                        <span className="main-slider__satisfied-client-count-plus">+</span>
                                                    </div>
                                                    <p className="main-slider__satisfied-client-count-text">{t("common.heroStatEngineers")}</p>
                                                </div>
                                            </div>
                                            <div className="main-slider__rating-box">
                                                <div className="main-slider__rating-count count-box">
                                                    <h3 className="count-text"><AdvanceCountUp ending={24} /></h3>
                                                    <span className="main-slider__satisfied-client-count-letter">H</span>
                                                </div>
                                                <div className="main-slider__rating-content">
                                                    <p className="main-slider__rating-content-sub-title">{t("common.heroResponseTime")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="owl-nav " style={{ zIndex: 111 }}>
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        className="owl-prev"
                        aria-label="Previous Slide"
                        type="button"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        className="owl-next"
                        aria-label="Next Slide"
                        type="button"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default BannerTwo;
