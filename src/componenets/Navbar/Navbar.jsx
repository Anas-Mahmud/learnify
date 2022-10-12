import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <header className="py-3 px-28 bg-gray-800 text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <h1 className='flex items-center p-2 text-3xl font-bold'>Learnify</h1>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <NavLink className='flex items-center px-4 -mb-1 border-b-2 border-transparent' to='/home'>Home</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink className='flex items-center px-4 -mb-1 border-b-2 border-transparent' to='/topic'>Topic</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink className='flex items-center px-4 -mb-1 border-b-2 border-transparent' to='/statistics'>Statistics</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink className='flex items-center px-4 -mb-1 border-b-2 border-transparent' to='/blog'>Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Navbar;