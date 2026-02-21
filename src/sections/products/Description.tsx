"use client"
import React from "react";
import Image from "next/image";
import { reviews } from "@/contents/product/product";
import { Review } from "@/contents/product/productType";

const Description: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
        alert("Review submitted successfully!");
    };

    return (
        <>
            {/* ================= Product Description ================= */}
            <section className="product-description">
                <div className="container">
                    <h3 className="product-description__title">Description</h3>
                    <p className="product-description__text1">
                        Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum.
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have alteration in some injected or words which dont
                        look even slightly believable. If you are going to use a passage of
                        Lorem Ipsum, you need to be sure there isnt anything embarrassing
                        hidden in the middle of text.
                    </p>

                    <div className="product-description__list">
                        <ul className="list-unstyled">
                            {[
                                "Nam at elit nec neque suscipit gravida.",
                                "Aenean egestas orci eu maximus tincidunt.",
                                "Curabitur vel turpis id tellus cursus laoreet.",
                            ].map((item, index) => (
                                <li key={index}>
                                    <p>
                                        <span className="icon-right-arrow-1"></span> {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="product-description__tex2">
                        All the Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first true generator
                        on the Internet. It uses a dictionary of over 200 Latin words,
                        combined with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable.
                    </p>
                </div>
            </section>

            {/* ================= Reviews ================= */}
            <section className="review-one">
                <div className="container">
                    <div className="comments-area">
                        <div className="review-one__title">
                            <h3>{reviews.length} reviews</h3>
                        </div>

                        {reviews.map((review: Review) => (
                            <div className="comment-box" key={review.id}>
                                <div className="comment">
                                    <div className="author-thumb">
                                        <figure className="thumb">
                                            <Image width={165} height={165} src={review.image} alt={review.name} />
                                        </figure>
                                    </div>

                                    <div className="review-one__content">
                                        <div className="review-one__content-top">
                                            <div className="info">
                                                <h2>
                                                    {review.name} <span>{review.date}</span>
                                                </h2>
                                            </div>
                                            <div className="reply-btn">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <i key={i} className="icon-star"></i>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="review-one__content-bottom">
                                            <p>{review.message}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= Review Form ================= */}
            <section className="review-form-one">
                <div className="container">
                    <div className="review-form-one__inner">
                        <h3 className="review-form-one__title">Add a review</h3>
                        <div className="review-form-one__rate-box">
                            <p className="review-form-one__rate-text">Rate this product?</p>
                            <div className="review-form-one__rate">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="icon-star"></i>
                                ))}
                            </div>
                        </div>

                        <form
                            className="review-form-one__form contact-form-validated"
                            onSubmit={handleSubmit}
                        >
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="review-form-one__input-box text-message-box">
                                        <textarea
                                            name="message"
                                            placeholder="Write comment"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="review-form-one__input-box">
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            name="name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="review-form-one__input-box">
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            name="email"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12">
                                    <button type="submit" className="thm-btn review-form-one__btn">
                                        <span className="icon-right"></span> Submit comment
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Description;
