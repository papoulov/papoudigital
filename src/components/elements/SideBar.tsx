"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/resources/logo-2.png";
import { usePapouDigitalContext } from "../context/usePapouDigitalContext";

const SideBar: React.FC = () => {
    const { isSidebar, setIsSidebar } = usePapouDigitalContext();

    const handleOverlayClick = () => setIsSidebar(false);
    const handleCloseClick = () => setIsSidebar(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();
    };

    return (
        <div
            className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : ""
                }`}
        >
            {/* Overlay */}
            <div className="xs-overlay xs-bg-black" onClick={handleOverlayClick}></div>

            {/* Sidebar content */}
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading">
                        <button
                            type="button"
                            aria-label="Close sidebar"
                            className="close-side-widget"
                            onClick={handleCloseClick}
                        >
                            ×
                        </button>
                    </div>

                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                {/* Logo */}
                                <div className="logo mb-4">
                                    <Link href="/" onClick={handleCloseClick}>
                                        <Image
                                            src={logo}
                                            width={117}
                                            height={29}
                                            alt="PapouDigital logo"
                                            priority
                                        />
                                    </Link>
                                </div>

                                {/* About Section */}
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                                        tempor incididunt ut labore et magna aliqua.
                                    </p>
                                </div>

                                {/* Contact Form */}
                                <div className="form-inner">
                                    <h4>Get a free quote</h4>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="contact-form-validated"
                                    >
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                placeholder="Message..."
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="form-group message-btn">
                                            <button
                                                type="submit"
                                                className="thm-btn form-inner__btn"
                                            >
                                                Submit Now
                                            </button>
                                        </div>
                                    </form>
                                    <div className="result" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
