import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        // <!-- Header/Navigation -->
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="flex-shrink-0 flex items-center">
                            <span className="text-primary font-bold text-2xl">NewpageConsult</span>
                        </a>
                    </div>
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
                        <Link href="/about" className="text-gray-700 hover:text-primary font-medium">About</Link>
                        <a href="#services" className="text-gray-700 hover:text-primary font-medium">Services</a>
                        <a href="#subjects" className="text-gray-700 hover:text-primary font-medium">Subjects</a>
                        <a href="#how-it-works" className="text-gray-700 hover:text-primary font-medium">How It Works</a>
                        <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium">Testimonials</a>
                        <a href="#team" className="text-gray-700 hover:text-primary font-medium">Our Team</a>
                        <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition">Get Started</a>
                    </nav>
                    <div className="flex items-center md:hidden">
                        <button type="button" className="text-gray-700 hover:text-primary" id="mobile-menu-button">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* // <!-- Mobile menu --> */}
            <div className="hidden md:hidden bg-white border-t border-gray-200" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Home</a>
                    <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Services</a>
                    <a href="#subjects" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Subjects</a>
                    <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">How It Works</a>
                    <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Testimonials</a>
                    <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Our Team</a>
                    <a href="#contact" className="block px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition">Get Started</a>
                </div>
            </div>
        </header>    
    );
}

export default Header;
