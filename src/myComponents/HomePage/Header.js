import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.jpg'

export default function Header() {
    return (
        <>
            <nav className="mainNav flex items-center justify-between">
                <ul className="navbar flex items-center justify-around w-96 ml-8">
                    <li className="navItem">
                        <Link to='/'>
                            <img src={logo} alt="logo" className="h-16" />
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="navItem">
                        <Link to='/login'>Login</Link>
                    </li>
                    <li className="navItem">
                        <Link to='/register'>Signup</Link>
                    </li>
                </ul>
                <ul className="rightNav flex">
                    <li className="navItem"></li>
                    <li className="navItem"></li>
                </ul>
            </nav>
        </>
    );
}
