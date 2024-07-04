// src/UserLogin.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import axios from 'axios';
import img1 from '../../img/HomeImg/14139953_5344698.png'
// import img3 from '../../img/HomeImg/blog-how-to-spot-fake-reviews-preview.jpg'
import img2 from '../../img/HomeImg/cbsn-fusion-ftc-cracking-down-on-fake-online-reviews-thumbnail-2114384-640x360.jpg'

const images = [
    `url(${img1})`,
    `url(${img2})`,
    // `url(${img3})`,
  ];

const UserLogin = () => {
    // console.log(`Width: ${window.screen.width}px, Height: ${window.screen.height}px`);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [regBox, setRegBox] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 5 seconds
  
      return () => clearInterval(interval);
    }, []);

    const url = process.env.REACT_APP_API_URL;

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${url}/api/user/login`, {email, password})
            .then(response => {
                console.log(response);
                localStorage.setItem('user', true);
                localStorage.setItem('userData', JSON.stringify(response.data))
                navigate('../');
                window.location.reload();
            }).catch(err => {
                console.log(err);
                setErr('Wrong user name and password...!');
            })
    };

    const ToggleRegister = () => {
        setRegBox(true);
    }

    return (
        regBox ? <Register /> :
            <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: images[currentIndex],
                    backgroundRepeat: 'no-repeat',
                    width: '100vw', // Full screen width
                    height: '100vh', // Full screen height
                    backgroundSize: 'cover', // Ensure the image covers the entire screen
                }}>
                <div className="max-w-md w-full space-y-8 bg-white px-5 pb-5 -mt-28 rounded-md shadow-lg opacity-90">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-950">Sign in to your account</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <input type="hidden" name="remember" defaultValue="true" />
                        {err !== '' && <div className='text-red-600'>{err}</div>}
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input 
                                    id="email-address" 
                                    name="email" 
                                    type="text" 
                                    autoComplete="email" 
                                    required 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                    className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Email address" 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autoComplete="current-password" 
                                    required 
                                    value={password} 
                                    onChange={handlePasswordChange} 
                                    className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Password" 
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input 
                                    id="remember-me" 
                                    name="remember-me" 
                                    type="checkbox"
                                    required
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            {/* <div className="text-sm">
                                <a aria-disabled className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                                    Forgot your password?
                                </a>
                            </div> */}
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign in
                            </button>
                        </div>
                        <div className="text-sm">
                            <a onClick={()=>ToggleRegister()} aria-disabled className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                                Clik here for Sign up
                            </a>
                        </div>
                    </form>
                </div>
            </div>

    );
}

export default UserLogin;
