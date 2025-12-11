import React from "react";
import {PRODUCTS} from "../../products";
import {Product} from "./Product";
import './shop.css';

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Bioshock Vigor and Plasmid Shop</h1>
            </div>

            {/* for displauying the products */}
            {/* map is for the whole list of products */}
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
        </div>
    );
};