import React from "react";
import {ShopContext} from "../../context/shop-context"

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    // const {addToCart} = useContext(shopContext);  // for some reason this on will not display the code

    return (
        <div className="product">
            <img src={productImage}/>

            <div className="description">
                <p> 
                    <b>{productName}</b>
                </p>

                <p>
                    {price} Atom
                </p>
            </div>

            <button className="addToCartBttn" onclick={() => addToCart(id)}>Add To Cart</button>
        </div>
    );
}