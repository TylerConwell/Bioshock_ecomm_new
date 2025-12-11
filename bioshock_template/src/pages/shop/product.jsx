import React from "react";
import {ShopContext} from "../../context/shop-context"

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    // making a try catch method so my day isnt ruined following along with the video
    try {
        const {addToCart} = useContext(shopContext);  // for some reason this on will not display the code
        return (
         console.error("oh boy", error, errorInfo)
        );
    }

    catch (error) {
        // just keep going
    }
    

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