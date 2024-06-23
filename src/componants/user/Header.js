import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Product from './Product';

const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setShowHeader(false);
        } else {
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
        <>
            <header className={`fixed top-0 left-0 right-0 z-20 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-50'} ${showHeader ? 'bg-black text-white py-3 md:m-10 md:mx-20 md:rounded-3xl opacity-75 md:w-[90%]' : 'w-full bg-black text-white py-3 opacity-75 rounded-none'} z-20`}>
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="text-xl max-md:text-lg font-bold font-serif underline text-cyan-300">
                        FRD
                    </div>
                    {/* <nav className="flex space-x-6">
                        <ul className="flex space-x-6">
                            <li className="hover:underline cursor-pointer">Home</li>
                            <li className="hover:underline cursor-pointer">Review</li>
                        </ul>
                    </nav> */}
                    <p className='flex justify-center text-xl max-md:text-sm font-bold w-full md:-ml-20 '>Wellcome to Fake Review Detection</p>
                    {/* <nav className="flex space-x-6">
                        <ul className="flex space-x-6">
                            <Link to='admin' className="hover:underline cursor-pointer">Product</Link>
                            <Link to='admin/review' className="hover:underline cursor-pointer">Review</Link>
                        </ul>
                    </nav> */}
                </div>
            </header>
            
            <body className='bg-gray-100 min-h-screen max-h-auto'>
                <Routes>
                    <Route path='/' element={<Product />} />
                </Routes>
                {/* <Route path='admin' element={<Products />} /> */}
                {/* <Route path='admin/review' element={<Reviews />} /> */}
            </body>
        </>
    );
};

export default Header;
