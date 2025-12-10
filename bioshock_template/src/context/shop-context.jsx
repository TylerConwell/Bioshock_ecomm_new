import React, { createContext } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);



// items in the cart with this id and the dfault being 0
const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState ();
    return <ShopContext.Provider>{props.childen}</ShopContext.Provider>;

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: prev[itemId] + 1
        }));
    }


     const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: prev[itemId] - 1
        }));
    }

    const contextValue = {cartItems, addToCart, removeFromCart}

    return( <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
};

