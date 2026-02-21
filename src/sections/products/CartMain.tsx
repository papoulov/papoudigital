"use client"
import React, { useState } from "react";
import cartImg1 from "../../../public/assets/images/shop/cart-page-img-1.jpg";
import cartImg2 from "../../../public/assets/images/shop/cart-page-img-2.jpg"; 
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string | StaticImageData;
    quantity: number;
}

const CartMain: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: "Comfy Chair",
            price: 10.99,
            image: cartImg1,
            quantity: 1,
        },
        {
            id: 2,
            name: "Classic Chair",
            price: 10.99,
            image: cartImg2,
            quantity: 1,
        },
    ]);

    const handleIncrease = (id: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const handleDecrease = (id: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <section className="cart-page">
            <div className="container">
                <div className="table-responsive">
                    <table className="table cart-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item: CartItem) => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="product-box">
                                            <div className="img-box">
                                                <Image width={118} height={119} src={item.image} alt={item.name} />
                                            </div>
                                            <h3>
                                                <Link href="/inner/product-details">{item.name}</Link>
                                            </h3>
                                        </div>
                                    </td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <div className="quantity-box">
                                            <button
                                                type="button"
                                                className="sub"
                                                onClick={() => handleDecrease(item.id)}
                                            >
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input
                                                type="number"
                                                readOnly
                                                value={item.quantity}
                                                className="quantity-input"
                                            />
                                            <button
                                                type="button"
                                                className="add"
                                                onClick={() => handleIncrease(item.id)}
                                            >
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <div
                                            className="cross-icon"
                                            onClick={() => handleRemove(item.id)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <i className="fas fa-times"></i>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Coupon + Totals */}
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <form className="default-form cart-cupon__form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Enter Coupon Code"
                                className="cart-cupon__input"
                            />
                            <button className="thm-btn" type="submit">
                                Apply Coupon
                            </button>
                        </form>
                    </div>

                    <div className="col-xl-4 col-lg-5">
                        <ul className="cart-total list-unstyled">
                            <li>
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)} USD</span>
                            </li>
                            <li>
                                <span>Shipping Cost</span>
                                <span>$0.00 USD</span>
                            </li>
                            <li>
                                <span>Total</span>
                                <span className="cart-total-amount">
                                    ${subtotal.toFixed(2)} USD
                                </span>
                            </li>
                        </ul>

                        <div className="cart-page__buttons">
                            <div className="cart-page__buttons-1">
                                <a className="thm-btn" href="#">
                                    Update
                                </a>
                            </div>
                            <div className="cart-page__buttons-2">
                                <Link href="/inner/checkout" className="thm-btn">
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartMain;
