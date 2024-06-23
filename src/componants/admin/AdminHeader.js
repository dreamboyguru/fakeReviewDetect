import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Reviews from './Reviews';
import Product from './Product';

const AdminHeader = () => {
    const navigate = useNavigate();
    // const isAdmin = localStorage.getItem('admin') || 'false';
    // if (isAdmin === 'false') {
    //     navigate('login')
    //     return null
    //     window.location.reload();
    // }
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

    const logoutToggle = () => {
        localStorage.removeItem('admin');
        navigate('../');
        window.location.reload();
    }

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-20 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-50'} ${showHeader ? 'bg-black text-white py-3 m-10 mx-20 rounded-3xl opacity-75 w-[90%]' : 'w-full bg-black text-white py-3 opacity-75 rounded-none'} z-20`}>
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="text-xl font-bold font-serif underline text-cyan-300">
                        FRD
                    </div>
                    {/* <nav className="flex space-x-6">
                        <ul className="flex space-x-6">
                            <li className="hover:underline cursor-pointer">Home</li>
                            <li className="hover:underline cursor-pointer">Review</li>
                        </ul>
                    </nav> */}
                    <p className='flex justify-center text-xl font-bold w-full'>Wellcome to Fake Review Detection</p>
                    <nav className="flex space-x-6">
                        <ul className="flex space-x-6">
                            <li 
                                onClick={()=>logoutToggle()} 
                                className="cursor-pointer"
                            >Logout</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <body className='bg-gray-100 min-h-screen max-h-auto'>
                <Routes>
                    <Route path='/' element={<Product />} />
                </Routes>
                
            </body>
        </>
    );
};

export default AdminHeader;
