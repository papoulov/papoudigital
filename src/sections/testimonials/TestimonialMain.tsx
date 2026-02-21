import { testimonialsPage } from "@/contents/testimonials/testimonials";
import { TestimonialPage } from "@/contents/testimonials/type";
import Image from "next/image";
import React from "react";

const TestimonialMain: React.FC = () => {
    return (
        <section className="testimonials-page">
            <div className="container">
                <div className="row">
                    {testimonialsPage.map((t: TestimonialPage) => (
                        <div key={t.id} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="testimonial-one__single">
                                {/* Client Info */}
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img-box">
                                        <div className="testimonial-one__client-img">
                                            <Image src={t.image} width={140} height={139} alt={t.name} />
                                        </div>
                                        <div className="testimonial-one__quote">
                                            <span className="icon-left"></span>
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-content">
                                        <p className="testimonial-one__client-name">
                                            <a href="#">{t.name}</a>
                                        </p>
                                        <span className="testimonial-one__client-sub-title">
                                            {t.role}
                                        </span>
                                    </div>
                                </div>

                                <p className="testimonial-one__text">{t.text}</p>

                                {/* Rating Stars */}
                                <div className="testimonial-one__rating">
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className="star"
                                            style={{
                                                color: index < t.rating ? "#FFD700" : "#ccc",
                                                fontSize: "18px",
                                                marginRight: "2px",
                                            }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialMain;
