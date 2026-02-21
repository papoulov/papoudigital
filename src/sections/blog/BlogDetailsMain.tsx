"use client";
import React from "react";
import mainImg from "../../../public/assets/images/blog/blog-details-img-1.jpg";
import clientImg from "../../../public/assets/images/blog/blog-details-client-img-1.jpg";
import imgBox1 from "../../../public/assets/images/blog/blog-details-img-box-img-1.jpg";
import imgBox2 from "../../../public/assets/images/blog/blog-details-img-box-img-2.jpg";
import prevImg from "../../../public/assets/images/blog/blog-details-prev-img.jpg";
import nextImg from "../../../public/assets/images/blog/blog-details-next-img.jpg";
import commentIcon from "../../../public/assets/images/icon/comment-one-title-icon.png";
import comment1 from "../../../public/assets/images/blog/comment-1-1.jpg";
import comment2 from "../../../public/assets/images/blog/comment-1-2.jpg";
import comment3 from "../../../public/assets/images/blog/comment-1-3.jpg";
import Image from "next/image";
import Link from "next/link";
import BlogListSidebar from "./BlogListSidebar";

const BlogDetailsMain: React.FC = () => {
    return (
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE - Blog Details */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <Image src={mainImg} width={745} height={380} alt="Blog Details" />
                            </div>

                            <div className="blog-details__content">
                                {/* Meta */}
                                <ul className="blog-details__meta list-unstyled">
                                    <li>
                                        <div className="blog-details__client-img">
                                            <Image src={clientImg} width={40} height={40} alt="Author" />
                                        </div>
                                        <div className="content">
                                            <p>Post By</p>
                                            <h4>Alisa Olivia</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-calendar-alt"></span>
                                        </div>
                                        <div className="content">
                                            <p>Saturday</p>
                                            <h4>March 8, 2025</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-comments"></span>
                                        </div>
                                        <div className="content">
                                            <h4>45 Comments</h4>
                                        </div>
                                    </li>
                                </ul>

                                {/* Main Content */}
                                <h3 className="blog-details__title-1">
                                    How to Successfully Navigate Web Design Projects: A Step-by-Step Approach
                                </h3>
                                <p className="blog-details__text-1">
                                    Unlock the secrets to a successful web design project with our comprehensive step-by-step guide.
                                    Whether youre a seasoned designer or just starting out, this guide will walk you through every phase
                                    of the process.
                                </p>
                                <p className="blog-details__text-2">
                                    With practical tips, real-world examples, and expert advice, youll be equipped to tackle any web
                                    design challenge and deliver stunning, user-friendly websites.
                                </p>

                                <h3 className="blog-details__title-2">Strategy of Building User-Friendly Websites</h3>
                                <p className="blog-details__text-3">
                                    Creating a user-friendly website is crucial for engaging visitors and ensuring a positive user
                                    experience. In this blog post, we’ll explore key strategies:
                                </p>

                                <ul className="blog-details__points list-unstyled">
                                    <li>
                                        <p>
                                            A well-organized menu structure and easy-to-find links allow users to move through the site
                                            effortlessly, ensuring they can quickly locate the information they need.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            A website that automatically adjusts its layout and functionality to fit different screen sizes,
                                            such as mobile phones and tablets, ensures a seamless experience for all users.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Optimized images, efficient code, and streamlined content contribute to faster load times,
                                            reducing the chances of visitors leaving the site due to delays.
                                        </p>
                                    </li>
                                </ul>

                                {/* Image Box */}
                                <div className="blog-details__img-box">
                                    <div className="blog-details__img-box-img">
                                        <Image src={imgBox1} width={410} height={304} alt="Design Process" />
                                    </div>
                                    <div className="blog-details__img-box-img">
                                        <Image src={imgBox2} width={309} height={304} alt="User Experience" />
                                    </div>
                                </div>

                                <h3 className="blog-details__title-3">How To Focus on Accessibility</h3>
                                <p className="blog-details__text-4">
                                    Incorporate features such as alt text for images, keyboard navigation, and screen reader support to
                                    make your site accessible to users with disabilities.
                                </p>

                                {/* Quote Box */}
                                <div className="blog-details__text-box">
                                    <div className="blog-details__text-box-client-name">
                                        <p>Jhon Smith</p>
                                    </div>
                                    <p className="blog-details__text-box-text">
                                        “It has survived not only five centuries, but also the leap into electronic typesetting.”
                                    </p>
                                    <div className="blog-details__text-box-icon">
                                        <span className="icon-double-quotes"></span>
                                    </div>
                                </div>

                                <h3 className="blog-details__title-4">How to Optimize Speed</h3>
                                <p className="blog-details__text-5">
                                    To optimize website speed, focus on compressing images to reduce file sizes, minimizing code by
                                    removing unnecessary elements, and enabling browser caching to store static files locally.
                                </p>

                                <ul className="blog-details__points-2 list-unstyled">
                                    <li>
                                        <span className="fas fa-check"></span> Compress Images
                                    </li>
                                    <li>
                                        <span className="fas fa-check"></span> Minimize Code
                                    </li>
                                    <li>
                                        <span className="fas fa-check"></span> Use Browser Caching
                                    </li>
                                </ul>

                                {/* Tags and Share */}
                                <div className="blog-details__tag-and-share">
                                    <div className="blog-details__tag">
                                        <span className="blog-details__tag-title">Tags:</span>
                                        <ul className="blog-details__tag-list list-unstyled">
                                            <li>
                                                <Link href="#">Marketing</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Branding</Link>
                                            </li>
                                            <li>
                                                <Link href="#">SEO</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog-details__share">
                                        <span className="blog-details__share-title">Share:</span>
                                        <div className="blog-details__share-list">
                                            <Link href="#"><span className="icon-pinterest"></span></Link>
                                            <Link href="#"><span className="icon-linkedin"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Prev/Next Navigation */}
                                <div className="blog-details__prev-next row">
                                    <div className="col-xl-6">
                                        <div className="blog-details__prev">
                                            <div className="blog-details__prev-img">
                                                <Image src={prevImg} width={80} height={80} alt="Prev Blog" />
                                            </div>
                                            <div className="blog-details__prev-content">
                                                <Link href="/inner/blog-details" className="blog-details__prev-btn">
                                                    <span className="icon-right"></span> Prev Blog
                                                </Link>
                                                <h3 className="blog-details__prev-title">
                                                    <Link href="/inner/blog-details">Strategies for Success in a Digital World</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="blog-details__next">
                                            <div className="blog-details__next-content">
                                                <Link href="/inner/blog-details" className="blog-details__next-btn">
                                                    Next Blog <span className="icon-right"></span>
                                                </Link>
                                                <h3 className="blog-details__next-title">
                                                    <Link href="/inner/blog-details">The Power Role of AI in Enhancing Web Design</Link>
                                                </h3>
                                            </div>
                                            <div className="blog-details__next-img">
                                                <Image src={nextImg} width={80} height={80} alt="Next Blog" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Comments */}
                                <div className="comment-one">
                                    <div className="comment-one__title-box">
                                        <div className="comment-one__title-icon">
                                            <Image src={commentIcon} width={24} height={19} alt="Comment Icon" />
                                        </div>
                                        <h3 className="comment-one__title">Total 25 Comments</h3>
                                    </div>

                                    <ul className="comment-one__list list-unstyled">
                                        <li>
                                            <div className="comment-one__single">
                                                <div className="comment-one__image">
                                                    <Image src={comment1} width={80} height={90} alt="Comment Author" />
                                                </div>
                                                <div className="comment-one__content">
                                                    <h3>John Smith <span>August 19, 2025</span></h3>
                                                    <p>
                                                        This website is fantastic! The design is clean, navigation intuitive, and everything loads
                                                        quickly. I especially appreciate accessibility features.
                                                    </p>
                                                    <div className="comment-one__btn-box">
                                                        <Link href="/inner/blog-details" className="comment-one__btn thm-btn">
                                                            <span className="icon-reply-arrow"></span> Reply
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="comment-one__single">
                                                <div className="comment-one__image">
                                                    <Image src={comment2} width={80} height={90} alt="Comment Author" />
                                                </div>
                                                <div className="comment-one__content">
                                                    <h3>Thomas Alison <span>March 19, 2025</span></h3>
                                                    <p>
                                                        Great insights! The focus on user experience and accessibility truly sets this blog apart.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="comment-one__single">
                                                <div className="comment-one__image">
                                                    <Image src={comment3} width={80} height={90} alt="Comment Author" />
                                                </div>
                                                <div className="comment-one__content">
                                                    <h3>Mark Jane <span>April 09, 2025</span></h3>
                                                    <p>
                                                        Loved reading this post! It highlights practical strategies that really work for web
                                                        designers.
                                                    </p>
                                                    <div className="comment-one__btn-box">
                                                        <Link href="/inner/blog-details" className="comment-one__btn thm-btn">
                                                            <span className="icon-reply-arrow"></span> Reply
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Comment Form */}
                                <div className="comment-form">
                                    <div className="comment-one__title-box">
                                        <div className="comment-one__title-icon">
                                            <Image src={commentIcon} alt="Form Icon" />
                                        </div>
                                        <h3 className="comment-one__title">Put Your Comments</h3>
                                    </div>

                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            alert("Comment submitted!");
                                        }}
                                        className="comment-form__form"
                                    >
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Name" name="name" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="comment-form__input-box">
                                                    <input type="email" placeholder="Email" name="email" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="comment-form__input-box text-message-box">
                                                    <textarea name="message" placeholder="Comment" required></textarea>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <button type="submit" className="thm-btn comment-form__btn">
                                                    <span className="icon-right"></span> Post Comment
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT SIDE - Sidebar */}
                    <BlogListSidebar />
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsMain;
