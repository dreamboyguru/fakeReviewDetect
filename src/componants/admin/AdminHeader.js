import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Reviews from './Reviews';
import Product from './Product';
import AddProduct from './AddProduct';
import SalesTable from './SalesTable';

const AdminHeader = () => {
    const navigate = useNavigate();
    
    // const [box, setBox] = useState(false);
    // const [reviewsBox, setReviewsBox] = useState(false);
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
        // navigate('../');
        window.location.reload();
    }

    // const ToggleBox = () =>{
    //     setBox(!box)
    // }
    // const ReviewsToggleBox = () => {
    //     setReviewsBox(!reviewsBox);
    // }

    return (
        <>
            {/* {box && <AddProduct ToggleBox={ToggleBox}/> } */}
            {/* {reviewsBox && <Reviews ReviewsToggleBox={ReviewsToggleBox} /> }             */}
            <header className={`fixed top-0 left-0 right-0 z-20 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-50'} ${showHeader ? 'bg-black text-white py-3 md:m-10 md:mx-20 md:rounded-3xl opacity-75 md:w-[90%]' : 'w-full bg-black text-white py-3 opacity-75 rounded-none'} z-20`}>
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="text-xl font-bold font-serif underline text-cyan-300 ml-5">
                        <Link to='admin'>FRD</Link>
                    </div>
                    {/* <nav className="flex space-x-6">
                        <ul className="flex space-x-6">
                            <li className="hover:underline cursor-pointer">Home</li>
                            <li className="hover:underline cursor-pointer">Review</li>
                        </ul>
                    </nav> */}
                    <p className='flex justify-center pl-40 text-xl max-md:text-lg max-md:mx-5 font-bold w-full max-md:hidden'>Wellcome Admin</p>
                    <nav className="flex space-x-6">
                        <ul className="flex space-x-6">
                            
                            <Link to='admin' 
                                // onClick={()=>ToggleBox()} 
                                className="cursor-pointer"
                            >Home</Link>
                            <Link to='sales' 
                                // onClick={()=>ToggleBox()} 
                                className="cursor-pointer"
                            >Sales</Link>
                            {/* <li 
                                onClick={()=>ToggleBox()} 
                                className="cursor-pointer w-20"
                            >Add new</li> */}
                            <Link 
                                to='/review' 
                                className="cursor-pointer"
                            >Review</Link>
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
                    <Route path='/admin' element={<Product />} />
                    <Route path='/review' element={<Reviews />} />
                    <Route path='/sales' element={<SalesTable />} />
                </Routes>
                
            </body>
        </>
    );
};

export default AdminHeader;
