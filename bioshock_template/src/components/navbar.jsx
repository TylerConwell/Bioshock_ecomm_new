import React from "react";
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Shop</Link>
                <Link to="/cart">cart</Link>
                <Link to="/Vigors_test">         Vigor Test</Link>
                <Link to="/plasmid_test">   Plasmid Test</Link>
            </div>
        </div>
    );
};