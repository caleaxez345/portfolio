import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import iconBlack from '/Icon/Icon-Black-Transparent.png'
import iconWhite from '/Icon/Icon-White-Transparent.png'
import { GoPerson } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { BsPersonWorkspace } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ isDark, setIsDark }) => {

    const setIcon = () => {
        if(!isDark) {
            return iconBlack;
        } else {
            return iconWhite;
        }
    }

    const handleLinkClick = () => {
        const detailsElement = document.getElementById('dropdown');
        if (detailsElement) {
            detailsElement.removeAttribute('open');
        }
    };

    return (
        <div className="navbar bg-base-100 h-24">
            <div className="flex-1"> 
                <Link to='/'>
                    <img src={setIcon()} alt="Logo" className="h-24 w-36"></img>
                </Link>
            </div>
            {/*Small menu which disppears when screen is md or larger*/}
            <label className="swap swap-rotate md:hidden">
                        <input 
                            type="checkbox" 
                            className="theme-controller" 
                            value="light"
                            checked={isDark}
                            onChange={() => {
                                setIsDark(!isDark);
                                window.scrollTo(0,0);
                            }} 
                            />
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>
            <details id="dropdown" className="dropdown dropdown-bottom dropdown-end [&_.swap-on]:opacity-100 [&_.swap-off]:opacity-0 [&[open]_.swap-off]:opacity-100 [&[open]_.swap-on]:opacity-0 [&[open]_.swap-on]:rotate-90 [&[open]_.swap-off]:rotate-90">
                <summary className="btn btn-ghost swap md:hidden"> 
                        <AiOutlineClose className="swap-off fill-current h-5 w-5" />
                        <RxHamburgerMenu className="swap-on fill-current h-5 w-5" />
                </summary>
                <ul className="menu menu-lg dropdown-content mt-0 z-[1] p-2 shadow bg-base-100 rounded-box w-screen md:hidden items-center">
                    <li>
                        <Link to='/' onClick={handleLinkClick}>
                            <IoHomeOutline size={20} /> 
                                Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about-me' onClick={handleLinkClick}>
                            <GoPerson size={20} /> 
                                About Me
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact' onClick={handleLinkClick}>
                            <CiMail size={20} /> 
                                Contact
                        </Link>
                    </li>
                    <li>
                        <Link to='/projects' onClick={handleLinkClick}>
                            <BsPersonWorkspace size={20} /> 
                                Projects
                        </Link>
                    </li>
                </ul>
            </details>
            {/*Larger menu appears when medium or larger screen sizes*/}
            <div className="hidden md:flex flex-none">
                <ul className="menu menu-horizontal px-1">
                    <label className="swap swap-rotate">
                        <input 
                            type="checkbox" 
                            className="theme-controller" 
                            value="light"
                            checked={isDark}
                            onChange={() => {
                                setIsDark(!isDark);
                                window.scrollTo(0,0);
                            }} 
                            />
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                    <li className="relative group">
                        <Link to='/' className="group-hover:scale-105 hover:bg-transparent focus:outline-none focus:bg-transparent">                         
                        <IoHomeOutline size={25}/>
                            Home
                            <span className="absolute left-0 bottom-0 w-0 h-[5px] rounded-xl bg-blue-400 transition-all duration-500 ease-out group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link to='/about-me' className="group-hover:scale-105 hover:bg-transparent focus:outline-none focus:bg-transparent">
                        <GoPerson size={25}/> 
                            About Me
                            <span className="absolute left-0 bottom-0 w-0 h-[5px] rounded-xl bg-blue-400 transition-all duration-500 ease-out group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link to='/contact' className="group-hover:scale-105 hover:bg-transparent focus:outline-none focus:bg-transparent">
                        <CiMail size={25} /> 
                            Contact
                            <span className="absolute left-0 bottom-0 w-0 h-[5px] rounded-xl bg-blue-400 transition-all duration-500 ease-out group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link to='/projects' className="group-hover:scale-105 hover:bg-transparent focus:outline-none focus:bg-transparent">
                        <BsPersonWorkspace size={25} /> 
                            Projects
                            <span className="absolute left-0 bottom-0 w-0 h-[5px] rounded-xl bg-blue-400 transition-all duration-500 ease-out group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;