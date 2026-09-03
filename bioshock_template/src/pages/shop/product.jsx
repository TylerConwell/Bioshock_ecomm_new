import React from "react";
import {ShopContext} from "../../context/shop-context"

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    // making a try catch method so my day isnt ruined following along with the video
    try {
        const {addToCart, cartItems} = useContext(ShopContext);  // for some reason this on will not display the code
        return (
         console.error("oh boy", error, errorInfo)
        );
    }

    catch (error) {
        // just keep going seems fine to displayS
    }
    

    try {
        const cartItemAmount = cartItems[id]
    }
    
    catch (error) {
        // well it seems to be working
    }

    return (
        <div className="product">
            <img src={productImage}/>

            <div className="description">
                <p> 
                    <b>{productName}</b>
                </p>

                <p>
                    {price} Atom/Silver Eagles
                </p>
            </div>

            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                {/* Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>} */}
                Add To Cart
            </button>
        </div>
    );
}