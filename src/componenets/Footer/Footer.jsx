import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Getting started</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                            <p>Installation</p>
                            <p>Release Notes</p>
                            <p>Upgrade Guide</p>
                            <p>Using with Preprocessors</p>
                            <p>Optimizing for Production</p>
                            <p>Browser Support</p>
                            <p>IntelliSense</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Core Concepts</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                            <p>Utility-First</p>
                            <p>Responsive Design</p>
                            <p>Hover, Focus, &amp; Other States</p>
                            <p>Dark Mode</p>
                            <p>Adding Base Styles</p>
                            <p>Extracting Components</p>
                            <p>Adding New Utilities</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Customization</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                            <p>Configuration</p>
                            <p>Theme Configuration</p>
                            <p>Breakpoints</p>
                            <p>Customizing Colors</p>
                            <p>Customizing Spacing</p>
                            <p>Configuring Variants</p>
                            <p>Plugins</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Community</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                            <p>GitHub</p>
                            <p>Discord</p>
                            <p>Twitter</p>
                            <p>YouTube</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-12 text-sm">
                    <span className="dark:text-gray-400">© Copyright 2022. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;