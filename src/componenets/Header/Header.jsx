import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <section className="dark:bg-gray-300 dark:text-gray-800 p-28">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://dibmsolutions.com/wp-content/uploads/2020/10/4380-1.png" alt="" className="object-contain h-72 sm:h-100 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="lg:text-5xl font-bold sm:text-3xl">should always be
                            <span className="dark:text-violet-400"> ready to learn</span>, even though I don't always like to teach.
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Research shows that you begin learning in the womb and go right on learning until the moment you pass on.
                            <br className="hidden md:inline lg:hidden" /> Your brain has a capacity for learning that is virtually limitless, which makes every human a potential genius.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/topic' className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</Link>
                            <Link to='/blog' className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Blog</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;