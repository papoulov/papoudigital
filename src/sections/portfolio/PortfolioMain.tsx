import TextAnimation from "@/components/elements/TextAnimation";
import { portfolioPageData } from "@/contents/portfolio/portfolio";
import { Portfolio } from "@/contents/portfolio/portfolioType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioMain: React.FC = () => {
    return (
        <section className="portfolio-page">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Portfolio</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text="Explore our case studies to see how we've successfully" textColor="black" />
                        <TextAnimation text="solved challenges for our clients." textColor="black" />
                    </h2>
                </div>

                {/* Portfolio Grid */}
                <ul className="row list-unstyled">
                    {portfolioPageData.map((item: Portfolio) => (
                        <li key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                            <div className="portfolio-page__single">
                                <div className="portfolio-page__single-inner">
                                    {/* Case Info */}
                                    <div className="portfolio-page__case-box">
                                        <p className="portfolio-page__case-text">
                                            Case <span className="portfolio-page__case-count"></span>
                                        </p>
                                        <div className="portfolio-page__case-border"></div>
                                    </div>

                                    {/* Portfolio Content */}
                                    <div className="portfolio-page__content">
                                        <p className="portfolio-page__sub-title">{item.category}</p>
                                        <h3 className="portfolio-page__title">
                                            <Link href={item.link}>{item.title}</Link>
                                        </h3>

                                        <div className="portfolio-page__img">
                                            <Image src={item.image} width={410} height={450} alt={item.title} />
                                        </div>

                                        <div className="portfolio-page__btn-box">
                                            <Link href={item.link} className="portfolio-page__btn thm-btn">
                                                <span className="icon-right"></span> View Project
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default PortfolioMain;
