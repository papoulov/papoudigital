import React from "react";
import mainImg from "../../../public/assets/images/project/portfolio-details-img-1.jpg";
import boxImg1 from "../../../public/assets/images/project/portfolio-details-img-box-img-1.jpg";
import boxImg2 from "../../../public/assets/images/project/portfolio-details-img-box-img-2.jpg";
import boxTwoImg1 from "../../../public/assets/images/project/portfolio-details-img-box-two-img-1.jpg";
import boxTwoImg2 from "../../../public/assets/images/project/portfolio-details-img-box-two-img-2.jpg";
import Image from "next/image";
interface SummaryItem {
    label: string;
    value: string;
    link?: string;
}

interface ListItem {
    title: string;
    description: string;
}

const projectSummary: SummaryItem[] = [
    { label: "Start Date", value: "23 August 2025" },
    { label: "End Date", value: "07 September 2025" },
    { label: "Client", value: "Themeforest" },
    { label: "Website", value: "example.com", link: "https://example.com" },
    { label: "Category", value: "Marketing" },
    { label: "Rating", value: "5.00 Scale of 5.00" },
];

const projectList: ListItem[] = [
    {
        title: "Algorithm Adaptation",
        description:
            "Stay updated and adjust strategies according to changes in digital advertising algorithms and emerging trends to maintain effectiveness.",
    },
    {
        title: "Audience Engagement",
        description:
            "Create content that resonates with a diverse audience, ensuring broad appeal and relevance.",
    },
    {
        title: "Budget Management",
        description:
            "Strategically allocate resources to balance budget constraints with the achievement of desired marketing outcomes.",
    },
    {
        title: "Performance Reporting",
        description:
            "Provide consistent reports on key performance indicators, including traffic, engagement, and conversion rates, to track and assess campaign success.",
    },
];

const challengePoints: string[] = [
    "Evolving Algorithm Dynamics",
    "Diverse Audience Engagement",
    "Budget Allocation",
    "Performance Tracking",
    "Competitive Differentiation",
    "Trend Adaptation",
];

const PortfolioDMain: React.FC = () => {
    return (
        <section className="portfolio-details">
            <div className="container">
                <div className="row">
                    {/* ===== Left Side Summary ===== */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="portfolio-details__left">
                            <div className="portfolio-details__summary">
                                <div className="portfolio-details__summary-shape-1"></div>
                                <div className="portfolio-details__summary-shape-2"></div>
                                <div className="portfolio-details__summary-shape-3"></div>

                                <h3 className="portfolio-details__summary-title">Project Summary</h3>
                                <p className="portfolio-details__summary-text">
                                    Increase brand awareness through targeted digital advertising.
                                </p>

                                <ul className="portfolio-details__summary-list list-unstyled">
                                    {projectSummary.map((item, index) => (
                                        <li key={index}>
                                            <span>{item.label}:</span>
                                            {item.link ? (
                                                <p>
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                        {item.value}
                                                    </a>
                                                </p>
                                            ) : (
                                                <p>{item.value}</p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ===== Right Side Content ===== */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="portfolio-details__right">
                            <div className="portfolio-details__img">
                                <Image src={mainImg} width={850} height={400} alt="Portfolio main" />
                            </div>

                            <div className="portfolio-details__content">
                                <h3 className="portfolio-details__title-1">
                                    Online Promotion & <br /> Advertising Campaigns
                                </h3>
                                <p className="portfolio-details__text-1">
                                    This project aims to create and implement a thorough digital marketing campaign to improve brand
                                    visibility, increase engagement, and elevate conversions. It utilizes a range of digital marketing
                                    strategies and tools to deliver measurable outcomes.
                                </p>

                                <p className="portfolio-details__text-2">
                                    Enhance brand recognition with focused online advertising. Direct traffic to the clients website and
                                    landing pages. Optimize conversion rates and monitor return on investment efficiently.
                                </p>

                                <h3 className="portfolio-details__title-2">Project Case Study</h3>
                                <p className="portfolio-details__text-3">
                                    This case study examines the creation and implementation of a digital marketing campaign designed for
                                    a company aiming to improve its online presence and drive business growth. The project focused on
                                    utilizing digital marketing strategies to meet specific business goals.
                                </p>

                                {/* Case Study Images */}
                                <div className="portfolio-details__img-box">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="portfolio-details__img-box-img">
                                                <Image src={boxImg1} width={410} height={398} alt="Case study 1" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="portfolio-details__img-box-img-2">
                                                <Image src={boxImg2} width={410} height={375} alt="Case study 2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="portfolio-details__title-3">Project Completion Status</h3>
                                <p className="portfolio-details__text-4">
                                    Managing shifts in digital advertising algorithms and trends. Making sure content appeals to a varied
                                    audience. Balancing budget limitations with desired results. Delivering regular updates on key
                                    metrics, such as traffic, engagement, and conversion rates.
                                </p>

                                <div className="portfolio-details__list-and-img">
                                    <div className="row">
                                        {/* List */}
                                        <div className="col-xl-6 col-lg-6">
                                            <ul className="portfolio-details__list list-unstyled">
                                                {projectList.map((item, index) => (
                                                    <li key={index}>
                                                        <p>
                                                            <span>{item.title}:</span> {item.description}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Right side small images */}
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="portfolio-details__img-box-2">
                                                <div className="portfolio-details__img-box-two-img">
                                                    <Image src={boxTwoImg1} width={352} height={369} alt="Extra image 1" />
                                                </div>
                                                <div className="portfolio-details__img-box-two-img">
                                                    <Image src={boxTwoImg2} width={352} height={369} alt="Extra image 2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="portfolio-details__title-4">What Was a Challenge</h3>
                                <p className="portfolio-details__text-5">
                                    Perform an in-depth analysis of the target audience, competitors, and market trends. Pinpoint
                                    significant opportunities and challenges within the digital environment. Craft a detailed digital
                                    marketing strategy aligned with the clients objectives.
                                </p>

                                <div className="portfolio-details__points-box">
                                    {/* Split challenge points in half */}
                                    <ul className="portfolio-details__points-list list-unstyled">
                                        {challengePoints.slice(0, 3).map((point, i) => (
                                            <li key={i}>
                                                <div className="icon">
                                                    <span className="fas fa-check"></span>
                                                </div>
                                                <p>{point}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    <ul className="portfolio-details__points-list list-unstyled">
                                        {challengePoints.slice(3).map((point, i) => (
                                            <li key={i}>
                                                <div className="icon">
                                                    <span className="fas fa-check"></span>
                                                </div>
                                                <p>{point}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <h3 className="portfolio-details__title-5">Client Feedback</h3>
                                <p className="portfolio-details__text-6">
                                    The client offered detailed feedback on how the digital marketing campaign affected their business.
                                    They expressed satisfaction with the thorough strategy and implementation, highlighting several key
                                    elements that contributed to the projects success.
                                </p>

                                <div className="portfolio-details__prev-and-next">
                                    <div className="portfolio-details__prev">
                                        <a href="#">
                                            <span className="icon-left-arrow-1"></span>Prev Projects
                                        </a>
                                    </div>
                                    <div className="portfolio-details__next">
                                        <a href="#">
                                            Next Projects<span className="icon-right-arrow-1"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioDMain;
