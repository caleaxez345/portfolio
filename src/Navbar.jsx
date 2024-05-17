import React from "react";
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Carlos Garcia Alavez</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about-me'>About Me</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;