import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="py-3 px-28 bg-gray-800 text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <h1 className='flex items-center p-2 text-3xl font-bold'>Learnify</h1>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link className='flex items-center px-4 -mb-1 border-b-2 border-transparent' to='/home'>Home</Link>
                    </li>
                    <li className="flex">
                        <Link className='flex items-center px-4 -mb-1 border-b-2 border-transparent' to='/topic'>Topic</Link>
                    </li>
                    <li className="flex">
                        <Link className='flex items-center px-4 -mb-1 border-b-2 border-transparent' to='/statistics'>Statistics</Link>
                    </li>
                    <li className="flex">
                        <Link className='flex items-center px-4 -mb-1 border-b-2 border-transparent' to='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;