"use client"
import React from 'react';

import newsletterImg1 from "../../../public/assets/images/resources/newsletter-one-img-1.jpg";
import newsletterImg2 from "../../../public/assets/images/resources/newsletter-one-img-2.png";

import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';

const NewsLetter: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset()
    };
    return (
        <section className="newsletter-one">
            <div className="container">
                <div className="newsletter-one__inner sec-title-animation animation-style2">
                    <div className="newsletter-one__img-1">
                        <Image src={newsletterImg1} width={260} height={260} alt="Newsletter" />
                    </div>
                    <div className="newsletter-one__img-2 float-bob-x">
                        <Image src={newsletterImg2} width={245} height={305} alt="Newsletter decoration" />
                    </div>
                    <h2 className="newsletter-one__title title-animation"><TextAnimation text='Subscribe Newsletter' textColor='white' fontSize='60' /></h2>
                    <p className="newsletter-one__text">
                        Get the latest SEO tips and software insights straight to your inbox. Stay <br />
                        informed and ahead with our expert updates and strategies!
                    </p>
                    <form className="newsletter-one__form" onSubmit={handleSubmit}>
                        <div className="newsletter-one__input">
                            <input type="email" placeholder="Enter Your Email" />
                        </div>
                        <button type="submit" className="newsletter-one__btn">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;