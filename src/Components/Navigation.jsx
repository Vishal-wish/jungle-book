import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Tree from '../assets/tree.png'

function Navigation() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };

    return (
        <nav className="flex justify-between bg-green-500 text-[20px] h-16 text-white md:px-2 fixed w-full border-2 rounded-b-xl">
            <img
                src={Tree}
                className="max-[641px]:px-8  md:h-15 px-10"
                alt=""
            />
            <p className="absolute z-20 p-3 text-xl">𝓙𝓾𝓷𝓰𝓵𝓮-𝓑𝓸𝓸𝓴</p>
            <p
                className="hover:text-red-500 text-3xl md:hidden px-8 py-3 cursor-pointer"
                onClick={toggleMenu}
            >
                =
            </p>
            <ul
                className={`${mobileMenu ? "" : "hide-mobile-menu"
                    } w-full cursor-pointer md:flex absolute text-center md:static  py-4  max-[768px]:text-center md:bg-green-500 my-16 md:w-auto md:my-0 md:space-x-4 `}
            >
                <Link to="/"><li className=" hover:border-y-2  bg-green-500 m-2 md:m-0 md:bg-green-500 hover:text-red-800 px-4 border-black py-3 md:py-0 font-serif">
                Home
                </li></Link>
                <Link to="/about"><li className="hover:border-y-2 bg-green-500 m-2 md:m-0 md:bg-green-500 hover:text-red-800 px-4 border-black py-3 md:py-0 font-serif">
                About
                </li></Link>
                <Link to="/absorption"><li className="hover:border-y-2 bg-green-500 m-2 md:m-0 md:bg-green-500 hover:text-red-800 px-4 border-black py-3 md:py-0 font-serif ">
                Absorption
                </li></Link>
                
            </ul>
        </nav>
    );
}

export default Navigation;
