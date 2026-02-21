"use client"
import React, { useState } from "react"; 
import shape1 from "../../../public/assets/images/shapes/pricing-two-single-shape-1.png"; 
import Image from "next/image";
import Link from "next/link";
import { PricingPlanInner } from "@/contents/procing-plan/type";
import { usePapouDigitalContext } from "@/components/context/usePapouDigitalContext";

const PricingInner: React.FC = () => {
    const { t } = usePapouDigitalContext();
    const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");
    const monthlyPlansInner: PricingPlanInner[] = [
        {
            id: 1,
            title: t("servicesHubPage.pricing.plan1Title"),
            price: "$450",
            duration: t("servicesHubPage.pricing.perMonth"),
            features: [
                t("servicesHubPage.pricing.plan1Feature1"),
                t("servicesHubPage.pricing.plan1Feature2"),
                t("servicesHubPage.pricing.plan1Feature3"),
                t("servicesHubPage.pricing.plan1Feature4"),
                t("servicesHubPage.pricing.plan1Feature5"),
                t("servicesHubPage.pricing.plan1Feature6"),
            ],
        },
        {
            id: 2,
            title: t("servicesHubPage.pricing.plan2Title"),
            price: "$1,250",
            duration: t("servicesHubPage.pricing.perMonth"),
            features: [
                t("servicesHubPage.pricing.plan2Feature1"),
                t("servicesHubPage.pricing.plan2Feature2"),
                t("servicesHubPage.pricing.plan2Feature3"),
                t("servicesHubPage.pricing.plan2Feature4"),
                t("servicesHubPage.pricing.plan2Feature5"),
                t("servicesHubPage.pricing.plan2Feature6"),
            ],
        },
        {
            id: 3,
            title: t("servicesHubPage.pricing.plan3Title"),
            price: "$2,300",
            duration: t("servicesHubPage.pricing.perMonth"),
            features: [
                t("servicesHubPage.pricing.plan3Feature1"),
                t("servicesHubPage.pricing.plan3Feature2"),
                t("servicesHubPage.pricing.plan3Feature3"),
                t("servicesHubPage.pricing.plan3Feature4"),
                t("servicesHubPage.pricing.plan3Feature5"),
                t("servicesHubPage.pricing.plan3Feature6"),
            ],
        },
    ];
    const yearlyPlansInner: PricingPlanInner[] = [
        {
            id: 1,
            title: t("servicesHubPage.pricing.plan1Title"),
            price: "$4,900",
            duration: t("servicesHubPage.pricing.perYear"),
            features: [
                t("servicesHubPage.pricing.plan1Feature1"),
                t("servicesHubPage.pricing.plan1Feature2"),
                t("servicesHubPage.pricing.plan1Feature3"),
                t("servicesHubPage.pricing.plan1Feature4"),
                t("servicesHubPage.pricing.plan1Feature5"),
                t("servicesHubPage.pricing.plan1Feature6"),
            ],
        },
        {
            id: 2,
            title: t("servicesHubPage.pricing.plan2Title"),
            price: "$13,500",
            duration: t("servicesHubPage.pricing.perYear"),
            features: [
                t("servicesHubPage.pricing.plan2Feature1"),
                t("servicesHubPage.pricing.plan2Feature2"),
                t("servicesHubPage.pricing.plan2Feature3"),
                t("servicesHubPage.pricing.plan2Feature4"),
                t("servicesHubPage.pricing.plan2Feature5"),
                t("servicesHubPage.pricing.plan2Feature6"),
            ],
        },
        {
            id: 3,
            title: t("servicesHubPage.pricing.plan3Title"),
            price: "$24,900",
            duration: t("servicesHubPage.pricing.perYear"),
            features: [
                t("servicesHubPage.pricing.plan3Feature1"),
                t("servicesHubPage.pricing.plan3Feature2"),
                t("servicesHubPage.pricing.plan3Feature3"),
                t("servicesHubPage.pricing.plan3Feature4"),
                t("servicesHubPage.pricing.plan3Feature5"),
                t("servicesHubPage.pricing.plan3Feature6"),
            ],
        },
    ];

    const renderPlans = (plans: PricingPlanInner[]) => (
        <ul className="row list-unstyled">
            {plans.map((plan) => (
                <li key={plan.id} className="col-xl-4 col-lg-6">
                    <div className="pricing-two__single">
                        <div className="pricing-two__single-shape-1">
                            <Image src={shape1} alt={`${plan.title} shape`} />
                        </div>
                        <div className="pricing-two__title-box">
                            <p className="pricing-two__title">{plan.title}</p>
                            <h3 className="pricing-two__price-box">
                                {plan.price} <span>{plan.duration}</span>
                            </h3>
                        </div>
                        <ul className="list-unstyled pricing-two__feature-list">
                            {plan.features.map((feature, index) => (
                                <li key={index}>
                                    <div className="icon">
                                        <span className="fas fa-check"></span>
                                    </div>
                                    <div className="text">
                                        <p>{feature}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="pricing-two__btn-box">
                            <Link href="/inner/pricing" className="pricing-two__btn thm-btn thm-btn-two">
                                <span className="icon-plus1"></span> {t("servicesHubPage.pricing.choosePlan")}
                            </Link>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
    return (
        <section className="pricing-two">
            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">{t("servicesHubPage.pricing.tagline")}</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        {t("servicesHubPage.pricing.titleLine1")} <br /> {t("servicesHubPage.pricing.titleLine2")} <span>{t("servicesHubPage.pricing.titleHighlight")}</span>
                    </h2>
                </div>

                <div className="pricing-two__main-tab-box tabs-box">
                    <ul className="tab-buttons list-unstyled">
                        <li
                            className={`tab-btn ${activeTab === "monthly" ? "active-btn" : ""}`}
                            onClick={() => setActiveTab("monthly")}
                        >
                            <span>{t("servicesHubPage.pricing.monthly")}</span>
                        </li>
                        <li
                            className={`tab-btn ${activeTab === "yearly" ? "active-btn" : ""}`}
                            onClick={() => setActiveTab("yearly")}
                        >
                            <span>{t("servicesHubPage.pricing.yearly")}</span>
                        </li>
                    </ul>

                    <div className="tabs-content">
                        {activeTab === "monthly" && (
                            <div className="tab active-tab">
                                <div className="pricing-two__inner">{renderPlans(monthlyPlansInner)}</div>
                            </div>
                        )}
                        {activeTab === "yearly" && (
                            <div className="tab active-tab">
                                <div className="pricing-two__inner">{renderPlans(yearlyPlansInner)}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingInner;
