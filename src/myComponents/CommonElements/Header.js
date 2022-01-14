import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthState } from "../../App";
import logo from '../../assets/img/logo.jpg'


export default function Header() {
    const auth = useContext(AuthState);
    return (
        <>
            <nav className="flex items-center justify-between">
                <ul className="flex items-stretch justify-around ml-8">
                    <li className="hover:shadow-lg flex items-center">
                        <Link to='/'>
                            <img src={logo} alt="logo" className="h-14" />
                        </Link>
                    </li>
                    <li className="hover:shadow-lg flex items-center">
                        <Link to='/about' className="p-6">About</Link>
                    </li>
                    <li className={auth ? "flex items-center hover:shadow-lg" : "hidden items-center hover:shadow-lg"}>
                        <Link to='/tasks' className="p-6">Tasks</Link>
                    </li>
                    <li className={auth ? "hover:shadow-lg hidden items-center" : "hover:shadow-lg flex items-center"}>
                        <Link to='/login' className="p-6">Login</Link>
                    </li>
                    <li className={auth ? "hover:shadow-lg hidden items-center" : "hover:shadow-lg flex items-center"}>
                        <Link to='/register' className="p-6">Signup</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
