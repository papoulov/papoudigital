"use client"
import React, { useState } from 'react';
import productThumb1 from "../../../public/assets/images/shop/product-thumb-1.jpg";
import productThumb2 from "../../../public/assets/images/shop/product-thumb-2.jpg";
import productThumb3 from "../../../public/assets/images/shop/product-thumb-3.jpg";
import productThumb4 from "../../../public/assets/images/shop/product-thumb-4.jpg";
import Image from 'next/image';

const LeftSidebar: React.FC = () => {
    const [valueRange, setValueRange] = useState<number>(50);
    const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        alert("Search feature coming soon!");
    };
    const min: number = 100;
    const max: number = 500;
    const percentage: number = ((valueRange - min) / (max - min)) * 100;
    const handleFilter = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

    return (
        <div className="col-xl-3 col-lg-12">
            <div className="product__sidebar">
                {/* Search */}
                <div className="shop-search product__sidebar-single">
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Search" />
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>

                {/* Price Range */}
                <div className="product__price-ranger product__sidebar-single">
                    <h3 className="product__sidebar-title">Price</h3>
                    <div className="price-ranger">
                        <input
                            type="range"
                            min={min}
                            max={max}
                            value={valueRange}
                            onChange={(e) => setValueRange(Number(e.target.value))}
                            className="custom-range"
                            style={{
                                background: `linear-gradient(to right, #6232f8 ${percentage}%, #ddd ${percentage}%)`
                            }}
                        />
                    </div>
                    <div className="range-value-control">
                        <div className="range-value">
                            <p>$50</p>
                            <span>-</span>
                            <p>${valueRange}</p>
                        </div>
                        <button onClick={handleFilter}>FILTER</button>
                    </div>
                </div>

                {/* Categories */}
                <div className="shop-category product__sidebar-single">
                    <h3 className="product__sidebar-title">Categories</h3>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">Web Design</a>
                        </li>
                        <li className="active">
                            <a href="#">Products Design</a>
                        </li>
                        <li>
                            <a href="#">Artificial Intelligence</a>
                        </li>
                        <li>
                            <a href="#">Technology</a>
                        </li>
                        <li>
                            <a href="#">Environment Recycle</a>
                        </li>
                    </ul>
                </div>

                {/* Color Options */}
                <div className="shop-color-option product__sidebar-single">
                    <h3 className="product__sidebar-title">Color Option</h3>
                    <ul className="list-unstyled">
                        <li>Black</li>
                        <li>Blue</li>
                        <li>Brown</li>
                        <li>Pink</li>
                        <li>Orange</li>
                    </ul>
                </div>

                {/* Recent Products */}
                <div className="shop-product-recent-products product__sidebar-single">
                    <h3 className="product__sidebar-title">Recent Products</h3>
                    <ul className="clearfix">
                        {[
                            { img: productThumb1, name: "Classy chair", price: "$33.00" },
                            { img: productThumb2, name: "Wooden stool", price: "$39.00" },
                            { img: productThumb3, name: "Sofa chair", price: "$54.00" },
                            { img: productThumb4, name: "Big sofa", price: "$44.00" },
                        ].map((product, i) => (
                            <li key={i}>
                                <div className="img">
                                    <Image width={70} height={70} src={product.img} alt={product.name} />
                                    <a href="#">
                                        <i className="fa fa-link" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h5>
                                            <a href="#">{product.name}</a>
                                        </h5>
                                    </div>
                                    <div className="price">
                                        <p>{product.price}</p>
                                    </div>
                                    <div className="review">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <i
                                                key={star}
                                                className={`fa fa-star${star === 5 ? " color" : ""}`}
                                            ></i>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Product Tags */}
                <div className="shop-product-tags product__sidebar-single">
                    <h3 className="product__sidebar-title">Product Tags</h3>
                    <div className="shop-product__tags-list">
                        {["Art", "Decor", "Design", "Electronics", "Envato", "Destination"].map(
                            (tag, i) => (
                                <a href="#" key={i}>
                                    {tag}
                                </a>
                            )
                        )}
                    </div>
                </div>

                {/* Reviews */}
                <div className="shop-product-review product__sidebar-single style">
                    <h3 className="product__sidebar-title">Reviews</h3>
                    <div className="sidebar-rating-box sidebar-rating-box--style2">
                        <ul>
                            {[
                                { id: "fivestar", stars: 5 },
                                { id: "fourstar", stars: 4 },
                                { id: "threestar", stars: 3 },
                                { id: "twostar", stars: 2 },
                                { id: "onestar", stars: 1 },
                            ].map((rating, i) => (
                                <li key={i}>
                                    <input
                                        type="radio"
                                        id={rating.id}
                                        name="rating"
                                        defaultChecked={rating.stars === 5}
                                    />
                                    <label htmlFor={rating.id}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                className={`icon-star${star > rating.stars ? " gray" : ""}`}
                                            ></span>
                                        ))}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;