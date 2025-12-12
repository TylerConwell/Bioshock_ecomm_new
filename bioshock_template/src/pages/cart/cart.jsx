import React, { useContext } from "react";
import {PRODUCTS} from "../../products";
import {ShopContext} from "../../context/shop-context";
import {CartItem} from "./cart-item";

export const Cart = () => {
    const {cartItems} = useContext(ShopContext);
    // left off on 47:20 in video
    // clicking on the shop icon just gones black now??
    return (
        <div className="cart">
            <div>
                <h1>
                    Your Cart Items
                </h1>
            </div>

            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data= {product}/>
                    }
                })}
            </div>
        </div>
    );
};