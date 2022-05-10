import React from "react";
import { useLocation } from "react-router";
import "./Footer.scss";

export default function Footer() {
    const location = useLocation();
    if (location.pathname.includes("cartpage")) {
        return null;
    }
    return ( 
        <footer className = "footer" >
        <p className = "footer__text" >
        Copyright© 2022 Sabka Baazar Gorcery Supplies Pvt.Ltd. </p>  
        </footer>
    );
}