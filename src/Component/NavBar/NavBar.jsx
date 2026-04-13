import React from 'react';
import './Nav.css'
import { Link, NavLink } from 'react-router';
import { AiOutlineHome } from 'react-icons/ai';

const NavBar = () => {
    const navItenms = (
        <>
            <li><NavLink to="/"><AiOutlineHome />Home</NavLink></li>
            <li><NavLink to="/timeline">Timeline</NavLink></li>
            <li><NavLink to="/stats">Stats</NavLink></li>
        </>
    );
    return (
        <div className='bg-base-100 shadow-sm'>
            <nav className="container navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItenms}
                        </ul>
                    </div>
                    <Link to="/" className=" text-2xl"><span className='font-bold'>Keen</span>Keeper</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItenms}
                    </ul>
                </div>
                
            </nav>
        </div>
    );
};

export default NavBar;