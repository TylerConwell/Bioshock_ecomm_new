import React from "react";
import {Link} from 'react-router-dom'
import {ShoppingCart} from "phosphor-react";
import  "./navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Shop</Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>

                <Link to="/Vigors_test">         Vigor Test</Link>
                <Link to="/plasmid_test">   Plasmid Test</Link>
            </div>
        </div>
    );
};