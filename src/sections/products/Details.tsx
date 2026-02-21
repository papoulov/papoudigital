"use client"
import React, { useState } from "react"; 
import productImg from "../../../public/assets/images/shop/product-details-img-1.jpg";
import Image from "next/image";
import Link from "next/link";

const Details: React.FC = () => {

    const [quantity, setQuantity] = useState<number>(1);
    const handleIncrease = (): void => {
        setQuantity((prev) => prev + 1);
    };
    const handleDecrease = (): void => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <section className="product-details">
            <div className="container">
                <div className="row">
                    {/* LEFT IMAGE SECTION */}
                    <div className="col-lg-6 col-xl-6">
                        <div className="product-details__img">
                            <Image width={628} height={623} src={productImg} alt="Custom T-shirts" />
                        </div>
                    </div>

                    {/* RIGHT PRODUCT DETAILS */}
                    <div className="col-lg-6 col-xl-6">
                        <div className="product-details__top">
                            <h3 className="product-details__title">
                                Custom T-shirts <span>$46.00</span>
                            </h3>
                        </div>

                        <div className="product-details__reveiw">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className="icon-star"></i>
                            ))}
                            <span> 2 customer reviews</span>
                        </div>

                        <div className="product-details__content">
                            <p className="product-details__content-text1">
                                Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis
                                des mauris commodo venenatis ligula commodo leez sed blandit
                                convallis dignissim onec vel pellentesque neque. It has survived
                                not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged.
                            </p>
                            <p className="product-details__content-text2">
                                REF. 4231/406 <br />
                                Available in store
                            </p>
                        </div>

                        {/* Quantity */}
                        <div className="product-details__quantity">
                            <h3 className="product-details__quantity-title">Quantity</h3>
                            <div className="quantity-box">
                                <button type="button" className="sub" onClick={handleDecrease}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    readOnly
                                    min={1}
                                    className="quantity-input"
                                />
                                <button type="button" className="add" onClick={handleIncrease}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="product-details__buttons">
                            <div className="product-details__buttons-1">
                                <Link href="/inner/wishlist" className="thm-btn">
                                    Add to Wishlist
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>

                            <div className="product-details__buttons-2">
                                <Link href="/inner/cart" className="thm-btn">
                                    Add to Cart
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="product-details__social">
                            <div className="title">
                                <h3>Share with friends:</h3>
                            </div>
                            <div className="product-details__social-link">
                                <Link href="#">
                                    <span className="fab fa-twitter"></span>
                                </Link>
                                <Link href="#">
                                    <span className="fab fa-facebook"></span>
                                </Link>
                                <Link href="#">
                                    <span className="fab fa-pinterest-p"></span>
                                </Link>
                                <Link href="#">
                                    <span className="fab fa-instagram"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
