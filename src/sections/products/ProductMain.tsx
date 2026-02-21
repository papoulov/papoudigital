"use client"
import React, { useState } from "react";


import Image from "next/image";
import Link from "next/link";
import LeftSidebar from "./LeftSidebar";
import { products } from "@/contents/product/product";
import { Product } from "@/contents/product/productType";



const ProductMain: React.FC = () => {

    const [sortOption, setSortOption] = useState<string>("popular");
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value);
    };

    return (
        <section className="product">
            <div className="container">
                <div className="row">
                    <LeftSidebar />

                    <div className="col-xl-9 col-lg-12">
                        <div className="product__items">
                            {/* ================== Sorting Header ================== */}
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="product__showing-result">
                                        <div className="product__showing-text-box">
                                            <p className="product__showing-text">
                                                Showing 1–9 of {products.length} results
                                            </p>
                                        </div>
                                        <div className="product__showing-sort">
                                            <div className="select-box">
                                                <select
                                                    className="nice-select"
                                                    value={sortOption}
                                                    onChange={handleSortChange}
                                                >
                                                    <option value="popular">Sort by Popular</option>
                                                    <option value="price">Sort by Price</option>
                                                    <option value="rating">Sort by Ratings</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ================== Product Grid ================== */}
                            <div className="product__all">
                                <div className="row">
                                    {products.map((product: Product) => (
                                        <div
                                            className="col-xl-4 col-lg-4 col-md-6"
                                            key={product.id}
                                        >
                                            <div className="product__all-single">
                                                <div className="product__all-img">
                                                    <Image width={298} height={308} src={product.img} alt={product.name} />
                                                    <Image width={298} height={308} src={product.img} alt={product.name} />
                                                </div>

                                                <div className="product__all-content">
                                                    <div className="product__all-review">
                                                        {[...Array(product.rating)].map((_, i) => (
                                                            <i className="icon-star" key={i}></i>
                                                        ))}
                                                    </div>

                                                    <h4 className="product__all-title">
                                                        <Link href="/inner/product-details">{product.name}</Link>
                                                    </h4>

                                                    <p className="product__all-price">{product.price}</p>

                                                    <div className="product__all-btn-box">
                                                        <Link href="/inner/cart" className="thm-btn product__all-btn" >
                                                            Add to Cart
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* ================== End Product Grid ================== */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductMain;
