import React, { useId, useState } from 'react';
import { Link } from 'react-router';
import { useTheme } from '../../context';


export default function Header() {

    const inputId = useId()
    const [isOpen, setIsOpen] = useState(false);

    const { theme, lightTheme, darkTheme } = useTheme();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Toggle theme based on checked state
        if (e.target.checked) {
            lightTheme();
        } else {
            darkTheme();
        }

    }


    return (
        <header className="bg-white dark:bg-black shadow-sm sticky top-0 z-50 transition">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white transition">
                            Logo
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="header_nav">
                            Home
                        </Link>
                        <Link to="/about" className="header_nav">
                            About
                        </Link>
                        <Link to="/project" className="header_nav">
                            Projects
                        </Link>
                        <Link to="/contact" className="header_nav">
                            Contact
                        </Link>
                    </nav>

                    <label htmlFor={inputId} className='ts-label'>
                        <input id={inputId} className='ts-input' type='checkbox' checked={theme === "light"} onChange={handleChange} />
                        <span className='ts-span'></span>
                    </label>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="btn__tertiary">
                            Sign In
                        </button>
                        <button className="btn__primary">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to="/" className="header_mob_nav">
                            Home
                        </Link>
                        <Link to="/about" className="header_mob_nav">
                            About
                        </Link>
                        <Link to="/services" className="header_mob_nav">
                            Services
                        </Link>
                        <Link to="/contact" className="header_mob_nav">
                            Contact
                        </Link>
                        <div className="border-t border-gray-200 pt-4 px-3 space-y-2">
                            <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-blue-100 dark:hover:text-white transition text-left">
                                Sign In
                            </button>
                            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
