"use client"
import React from 'react';
import Countdown from 'react-countdown';
import BG from "../../../public/assets/images/backgrounds/coming-soon-page-bg.jpg"
import RenderCountDown from '@/components/elements/RenderCountDown';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../public/assets/images/logo-pg.png";

const page: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const launchDate = new Date("2026-06-01T09:00:00Z");

    return (
        <div className="page-wrapper">
            <section className="coming-soon-page full-height" style={{ height: '100vh' }}>
                <div className="coming-soon-page__bg" style={{ backgroundImage: `url(${BG})` }}></div>
                <div className="coming-soon-page__content">
                    <div className="inner">
                        <Link href="/" aria-label="PapouDigital Home">
                            <Image src={logo} width={150} height={40} alt="PapouDigital" style={{ width: "auto", height: "34px", marginBottom: "20px" }} />
                        </Link>
                        <div className="big-title">Coming Soon</div>
                        <div className="timer-box clearfix">
                            <div className="countdown-timer">
                                <div className="default-coundown">
                                    <div className="box">
                                        <Countdown date={launchDate} renderer={RenderCountDown} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <p>
                                A new PapouDigital experience is on the way.<br />
                                We are preparing something faster, clearer, and built for modern digital teams.
                            </p>
                        </div>
                        <div className="coming-soon-page__subscribe-box">
                            <form onSubmit={handleSubmit} className="subscribe-form" action="#">
                                <input name='email' placeholder="Enter your email address" type="email" aria-label="Email address" />
                                <button type="submit" className="thm-btn coming-soon-page__btn">Notify Me<span><i
                                    className="icon-diagonal-arrow"></i></span></button>
                            </form>
                            <div className="back_home">
                                <Link href={"/"} className="thm-btn error-page__btn">
                                    Back to Home
                                    <span><i className="icon-diagonal-arrow"></i></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
