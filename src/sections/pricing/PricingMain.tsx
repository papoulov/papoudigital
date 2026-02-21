"use client"
import React, { useEffect, useState } from 'react';
import shapeImg3 from "../../../public/assets/images/shapes/pricing-one-shape-3.png";
import shapeImg4 from "../../../public/assets/images/shapes/pricing-one-shape-4.png";
import customPricingIcon from "../../../public/assets/images/icon/pricing-one-custom-pricing-icon-1.png";
import customPricingImg from "../../../public/assets/images/agent1.png";
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import { pricingPlans } from '@/contents/procing-plan/pricing';
import { PricingPlan } from '@/contents/procing-plan/type';
import Link from 'next/link';

type CurrencyCode = "USD" | "EUR" | "XOF";

const conversionRates: Record<CurrencyCode, number> = {
    USD: 1,
    EUR: 0.92,
    XOF: 605,
};

const euroCountries = new Set([
    "AT", "BE", "CY", "EE", "FI", "FR", "DE", "GR", "IE",
    "IT", "LV", "LT", "LU", "MT", "NL", "PT", "SK", "SI",
    "ES", "HR",
]);

const xofCountries = new Set([
    "BJ", "BF", "CI", "GW", "ML", "NE", "SN", "TG",
]);

const mapCountryToCurrency = (countryCode?: string): CurrencyCode => {
    if (!countryCode) return "USD";
    if (xofCountries.has(countryCode)) return "XOF";
    if (euroCountries.has(countryCode)) return "EUR";
    return "USD";
};

const extractCountryFromLocale = (): string | undefined => {
    const locales = [navigator.language, ...(navigator.languages || [])].filter(Boolean);
    for (const locale of locales) {
        const match = locale.match(/[-_]([A-Z]{2})$/i);
        if (match?.[1]) return match[1].toUpperCase();
    }
    return undefined;
};

const PricingMain: React.FC = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [currency, setCurrency] = useState<CurrencyCode>("USD");
    const [expandedPlanId, setExpandedPlanId] = useState<number | null>(null);
    const [compactHeight, setCompactHeight] = useState(430);
    const compactPreviewCount = 4;

    const formatPrice = (price: string): string => {
        const baseUsd = Number.parseFloat(price);
        const converted = baseUsd * conversionRates[currency];

        if (currency === "USD") {
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2,
            }).format(converted);
        }

        if (currency === "EUR") {
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2,
            }).format(converted);
        }

        return `${new Intl.NumberFormat("fr-FR", {
            maximumFractionDigits: 0,
        }).format(converted)} XOF`;
    };

    useEffect(() => {
        const savedCurrency = window.localStorage.getItem("preferredCurrency") as CurrencyCode | null;
        if (savedCurrency === "USD" || savedCurrency === "EUR" || savedCurrency === "XOF") {
            setCurrency(savedCurrency);
        }
    }, []);

    useEffect(() => {
        const detectCurrency = async () => {
            try {
                const res = await fetch("/api/geo-country", { cache: "no-store" });
                const data = (await res.json()) as { country?: string };
                if (data.country) {
                    setCurrency(mapCountryToCurrency(data.country));
                    return;
                }
            } catch {
                // Fallback to locale-based detection below.
            }

            const localeCountry = extractCountryFromLocale();
            setCurrency(mapCountryToCurrency(localeCountry));
        };

        const savedCurrency = window.localStorage.getItem("preferredCurrency");
        if (!savedCurrency) {
            void detectCurrency();
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("preferredCurrency", currency);
    }, [currency]);

    useEffect(() => {
        const getCustomCard = (): HTMLElement | null =>
            document.querySelector(
                isYearly
                    ? ".pricing-one__tab--yearly .pricing-one__single-last"
                    : ".pricing-one__tab--monthly .pricing-one__single-last"
            );

        const updateHeight = () => {
            const customCard = getCustomCard();
            if (customCard) {
                setCompactHeight(customCard.offsetHeight);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        const customCard = getCustomCard();
        const observer =
            customCard && typeof ResizeObserver !== "undefined"
                ? new ResizeObserver(updateHeight)
                : null;

        if (customCard && observer) observer.observe(customCard);

        return () => {
            window.removeEventListener("resize", updateHeight);
            if (observer) observer.disconnect();
        };
    }, [isYearly]);

    return (
        <section className="pricing-one pricing-page" style={{ "--pricing-compact-height": `${compactHeight}px` } as React.CSSProperties}>
            <div className="pricing-one__shape-3 float-bob-y">
                <Image src={shapeImg3} width={41} height={43} alt="" />
            </div>
            <div className="pricing-one__shape-4 float-bob-x">
                <Image src={shapeImg4} width={199} height={192} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Website Development & Maintenance</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Choose a website plan' textColor='black' />
                        <TextAnimation text='that grows with your business.' />
                    </h2>
                </div>

                <div className="pricing-one__switch-toggle">
                    <ul className="list-unstyled switch-toggler-list" role="tablist" id="switch-toggle-tab">
                        <li className={`month ${!isYearly ? 'active' : ''}`}>
                            <span onClick={() => setIsYearly(false)} style={{ cursor: 'pointer' }}>
                                Monthly
                            </span>
                        </li>
                        <li>
                            <label className={`switch ${!isYearly ? 'on' : 'off'}`}>
                                <input
                                    type="checkbox"
                                    checked={isYearly}
                                    onChange={() => setIsYearly(!isYearly)}
                                    style={{ display: 'none' }}
                                />
                                <span className="slider round"></span>
                            </label>
                        </li>
                        <li className={`year ${isYearly ? 'active' : ''}`}>
                            <span onClick={() => setIsYearly(true)} style={{ cursor: 'pointer' }}>
                                Yearly
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="pricing-one__currency-box">
                    <label className="pricing-one__currency-label" htmlFor="pricing-currency">
                        Currency
                    </label>
                    <select
                        id="pricing-currency"
                        className="pricing-one__currency-select"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                    >
                        <option value="USD">US Dollar (USD)</option>
                        <option value="EUR">Euro (EUR)</option>
                        <option value="XOF">West African CFA franc (XOF)</option>
                    </select>
                    <p className="pricing-one__currency-note">We accept USD, EUR, and XOF.</p>
                </div>

                <div className="tabed-content">
                    <div className="pricing-one__tab pricing-one__tab--yearly" style={{ display: `${isYearly ? 'block' : 'none'}` }}>
                        <div className="row">
                            {pricingPlans.map((plan: PricingPlan) => (
                                <div
                                    key={plan.id}
                                    className={`col-xl-3 col-lg-6 col-md-6 `} >
                                    <div className={`pricing-one__single ${expandedPlanId === plan.id ? "is-expanded" : "is-compact"}`}>
                                        <div className="pricing-one__title-box">
                                            <p className="pricing-one__title">{plan.name}</p>
                                            <h3 className="pricing-one__price-box">
                                                {formatPrice(plan.yearlyPrice)}
                                                <span>/Per {isYearly ? 'Year' : 'Month'}</span>
                                            </h3>
                                            <div className="pricing-one__border"></div>
                                        </div>
                                        <div className="pricing-one__feature-list-box">
                                            <h4 className="pricing-one__feature-title">What&apos;s Included</h4>
                                            <ul className="list-unstyled pricing-one__feature-list">
                                                {plan.features
                                                    .slice(0, expandedPlanId === plan.id ? plan.features.length : compactPreviewCount)
                                                    .map((feature, index) => (
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
                                            {expandedPlanId !== plan.id && plan.features.length > compactPreviewCount && (
                                                <p className="pricing-one__feature-more">+{plan.features.length - compactPreviewCount} more included</p>
                                            )}
                                        </div>
                                        <div className="pricing-one__btn-box">
                                            <button
                                                type="button"
                                                className="pricing-one__btn thm-btn pricing-one__btn-toggle"
                                                onClick={() =>
                                                    setExpandedPlanId(expandedPlanId === plan.id ? null : plan.id)
                                                }
                                            >
                                                <span className="icon-right"></span> {expandedPlanId === plan.id ? "Show Less" : "Know More"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Custom Pricing Card */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="500ms">
                                <div className="pricing-one__single-last">
                                    <div className="pricing-one__custom-pricing-box">
                                        <div className="pricing-one__custom-pricing-icon">
                                            <Image src={customPricingIcon} width={24} height={24} alt="" />
                                        </div>
                                        <p className="pricing-one__custom-pricing-title">Need Custom?</p>
                                        <p className="pricing-one__custom-pricing-text">
                                            Need a custom package for websites, maintenance, or other digital services?
                                        </p>
                                        <div className="pricing-one__btn-box-two">
                                            <Link href={'/inner/contact'} className="pricing-one__btn-two thm-btn" >
                                                <span className="icon-right"></span> Contact Now
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="pricing-one__custom-pricing-img">
                                        <Image src={customPricingImg} width={210} height={209} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-one__tab pricing-one__tab--monthly" style={{ display: `${!isYearly ? 'block' : 'none'}` }}>
                        <div className="row">
                            {pricingPlans.map((plan: PricingPlan) => (
                                <div
                                    key={plan.id}
                                    className={`col-xl-3 col-lg-6 col-md-6 `} >
                                    <div className={`pricing-one__single ${expandedPlanId === plan.id ? "is-expanded" : "is-compact"}`}>
                                        <div className="pricing-one__title-box">
                                            <p className="pricing-one__title">{plan.name}</p>
                                            <h3 className="pricing-one__price-box">
                                                {formatPrice(plan.monthlyPrice)}
                                                <span>/Per {isYearly ? 'Year' : 'Month'}</span>
                                            </h3>
                                            <div className="pricing-one__border"></div>
                                        </div>
                                        <div className="pricing-one__feature-list-box">
                                            <h4 className="pricing-one__feature-title">What&apos;s Included</h4>
                                            <ul className="list-unstyled pricing-one__feature-list">
                                                {plan.features
                                                    .slice(0, expandedPlanId === plan.id ? plan.features.length : compactPreviewCount)
                                                    .map((feature, index) => (
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
                                            {expandedPlanId !== plan.id && plan.features.length > compactPreviewCount && (
                                                <p className="pricing-one__feature-more">+{plan.features.length - compactPreviewCount} more included</p>
                                            )}
                                        </div>
                                        <div className="pricing-one__btn-box">
                                            <button
                                                type="button"
                                                className="pricing-one__btn thm-btn pricing-one__btn-toggle"
                                                onClick={() =>
                                                    setExpandedPlanId(expandedPlanId === plan.id ? null : plan.id)
                                                }
                                            >
                                                <span className="icon-right"></span> {expandedPlanId === plan.id ? "Show Less" : "Know More"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Custom Pricing Card */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="500ms">
                                <div className="pricing-one__single-last">
                                    <div className="pricing-one__custom-pricing-box">
                                        <div className="pricing-one__custom-pricing-icon">
                                            <Image src={customPricingIcon} width={24} height={24} alt="" />
                                        </div>
                                        <p className="pricing-one__custom-pricing-title">Need Custom?</p>
                                        <p className="pricing-one__custom-pricing-text">
                                            Need a custom package for websites, maintenance, or other digital services?
                                        </p>
                                        <div className="pricing-one__btn-box-two">
                                            <Link href={'/inner/contact'} className="pricing-one__btn-two thm-btn" >
                                                <span className="icon-right"></span> Contact Now
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="pricing-one__custom-pricing-img">
                                        <Image src={customPricingImg} width={210} height={209} alt="" />
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

export default PricingMain;
