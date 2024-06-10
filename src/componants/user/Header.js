import React, { useState, useEffect } from 'react';

const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowHeader(false);
        } else {
            // Scrolling up
            setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`w-[90%] flex justify-center bg-black text-white py-3 m-10 mx-20 rounded-3xl opacity-75 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-10 w-full m-0 -mx-0 rounded-none'} fixed`}>
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-xl font-bold">
                    LOGO
                </div>
                <nav className="flex space-x-6">
                    <ul className="flex space-x-6">
                        <li className="hover:underline cursor-pointer">Home</li>
                        <li className="hover:underline cursor-pointer">Review</li>
                    </ul>
                </nav>
                <nav className="flex space-x-6">
                    <ul className="flex space-x-6">
                        <li className="hover:underline cursor-pointer">Login</li>
                        <li className="hover:underline cursor-pointer">Register</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
