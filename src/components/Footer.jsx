import React from "react";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link to='/'className="link link-hover">Home</Link>
          <Link to='/about-me'className="link link-hover">About Me</Link>
          <Link to='/contact'className="link link-hover">Contact</Link>
          <Link to='/projects'className="link link-hover">Projects</Link>
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4">
          <GithubIcon />
          <LinkedinIcon />
          <Mail />
          <a></a>
          </div>
        </nav> 
        <aside>
          <p>Copyright © 2024 - All right reserved by Carlos Garcia Alavez</p>
        </aside>
      </footer>
    );
}

export default Footer;