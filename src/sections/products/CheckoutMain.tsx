"use client"
import React, { useState } from "react";
import paypalLogo from "../../../public/assets/images/shop/paypal-1.jpg";
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
interface OrderItem {
    id: number;
    name: string;
    price: number;
}

const orderItems: OrderItem[] = [
    { id: 1, name: "Comfy Chair", price: 10.99 },
    { id: 2, name: "Classic Chair", price: 10.99 },
];

const CheckoutMain: React.FC = () => {
    const [isBannk, setIsBank] = useState(true)
    const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0);
    const shipping = 0;
    const total = subtotal + shipping;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Order placed successfully!");
    };

    return (
        <section className="checkout-page">
            <div className="container">
                <div className="row">
                    {/* ================= Billing Details ================= */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="billing_details">
                            <div className="billing_title">
                                <p>
                                    Returning Customer? <span><Link href={"/inner/login"}>Click here to Login</Link></span>
                                </p>
                                <h2>Billing details</h2>
                            </div>
                            <form className="billing_details_form" onSubmit={handleSubmit}>


                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="first_name" placeholder="First name" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="last_name" placeholder="Last name" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="company" placeholder="Company" />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="address" placeholder="Address" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input
                                                type="text"
                                                name="apartment"
                                                placeholder="Apartment, unit, etc. (optional)"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="city" placeholder="Town / City" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="state" placeholder="State" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="zip" type="text" placeholder="Zip code" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="email" type="email" placeholder="Email address" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="tel" name="phone" placeholder="Phone" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checked-box">
                                            <input type="checkbox" id="createAccount" />
                                            <label htmlFor="createAccount">
                                                <span></span>Create an account?
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* ================= Shipping Details ================= */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="billing_details ship_different_address">
                            <div className="billing_title ship_different_address_title">
                                <h2>
                                    Ship to a different address <span className="fa fa-check-circle"></span>
                                </h2>
                            </div>
                            <form className="billing_details_form ship_different_address_form">


                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="first_name" placeholder="First name" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="last_name" placeholder="Last name" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="company" placeholder="Company" />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="address" placeholder="Address" />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input
                                                type="text"
                                                name="apartment"
                                                placeholder="Apartment, unit, etc. (optional)"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="city" placeholder="Town / City" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="state" placeholder="State" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="zip" type="text" placeholder="Zip code" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="email" type="email" placeholder="Email address" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="tel" name="phone" placeholder="Phone" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="ship_different_input">
                                            <textarea placeholder="Notes about order" name="order_notes"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* ================= Order Summary ================= */}
                <div className="your_order">
                    <h2>Your order</h2>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="order_table_box">
                                <table className="order_table_detail">
                                    <thead className="order_table_head">
                                        <tr>
                                            <th>Product</th>
                                            <th className="right">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderItems.map((item) => (
                                            <tr key={item.id}>
                                                <td className="pro__title">{item.name}</td>
                                                <td className="pro__price">${item.price.toFixed(2)} USD</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td className="pro__title">Subtotal</td>
                                            <td className="pro__price">${subtotal.toFixed(2)} USD</td>
                                        </tr>
                                        <tr>
                                            <td className="pro__title">Shipping</td>
                                            <td className="pro__price">${shipping.toFixed(2)} USD</td>
                                        </tr>
                                        <tr>
                                            <td className="pro__title">Total</td>
                                            <td className="pro__price">${total.toFixed(2)} USD</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="checkout__payment">
                                <div className={`checkout__payment__item ${isBannk ? 'checkout__payment__item--active' : ''}`}>
                                    <h3 className="checkout__payment__title" onClick={() => setIsBank(true)}>Direct bank transfer</h3>
                                    <motion.div
                                        initial={{ y: -40, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.01 }}
                                        className="checkout__payment__content"
                                        style={{ display: `${!isBannk ? 'none' : ''}` }}>
                                        Make your payment directly into our bank account. Please use your Order ID as
                                        the payment reference. Your order won’t be shipped until the funds have cleared.
                                    </motion.div>
                                </div>

                                <div className={`checkout__payment__item ${!isBannk ? 'checkout__payment__item--active' : ''}`}>
                                    <h3 className="checkout__payment__title" onClick={() => setIsBank(false)}>
                                        Paypal payment <Image src={paypalLogo} width={38} height={24} alt="PayPal" />
                                    </h3>
                                    <motion.div
                                        initial={{ y: -40, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.01 }}
                                        className="checkout__payment__content"
                                        style={{ display: `${isBannk ? 'none' : ''}` }}>
                                        Make your payment directly into our bank account. Please use your Order ID as
                                        the payment reference. Your order won’t be shipped until the funds have cleared.
                                    </motion.div>
                                </div>
                            </div>

                            <div className="text-right d-flex justify-content-end">
                                <button className="thm-btn" type="submit" onClick={() => alert("Order placed!")}>
                                    <span className="icon-right"></span> Place your order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutMain;
