import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import img1 from '../../img/HomeImg/14139953_5344698.png'
// import img3 from '../../img/HomeImg/blog-how-to-spot-fake-reviews-preview.jpg'
import img2 from '../../img/HomeImg/cbsn-fusion-ftc-cracking-down-on-fake-online-reviews-thumbnail-2114384-640x360.jpg'

const images = [
    `url(${img1})`,
    `url(${img2})`,
    // `url(${img3})`,
  ];
const Register = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [Err, setErr] = useState(null);
    const navigate = useNavigate();
    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 5 seconds
  
      return () => clearInterval(interval);
    }, []);

    const initialValues = {
        name: '',
        phone: '',
        email: '',
        password: '',
        repassword: '',
        rememberMe: false,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        phone: Yup.string().required('Required').matches(/^[0-9]+$/, 'Phone number is not valid').min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
        repassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
        rememberMe: Yup.boolean().oneOf([true], 'Required'),
    });

    const handleSubmit = (values, { setSubmitting, setErrors }) => {
        setSubmitting(true);
        axios.post(`${url}/api/user/register`, values)
            .then(response => {
                navigate('../');
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
                setErr(err.response.data)
            })
        setSubmitting(false);
    };

    const ToggleLogin = () => {
        navigate('../')
        window.location.reload();
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: images[currentIndex],
                backgroundRepeat: 'no-repeat',
                width: '100vw', // Full screen width
                height: '100vh', // Full screen height
                backgroundSize: 'cover', // Ensure the image covers the entire screen
            }}>
            <div className="max-w-md w-full space-y-8 bg-white px-5 -mt-28 pb-4 rounded-md shadow-lg opacity-90">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-950">Sign up your account</h2>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, errors }) => (
                        <Form className="mt-8 space-y-6">
                            <input type="hidden" name="remember" defaultValue="true" />
                            {errors.general && <div className='text-red-600'>{errors.general}</div>}
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className='relative'>
                                    <ErrorMessage name="name" component="div" className="text-red-600 bg-white px-2 absolute -top-2.5 right-6 z-30" />
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <Field
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className='relative'>
                                    <ErrorMessage name="phone" component="div" className="text-red-600 bg-white px-2 absolute -top-2.5 right-6 z-30" />
                                    <label htmlFor="phone" className="sr-only">Phone</label>
                                    <Field
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className='relative'>
                                    <ErrorMessage name="email" component="div" className="text-red-600 bg-white px-2 absolute -top-2.5 right-6 z-30" />
                                    {Err && <div className='text-red-600'>{Err}</div>}
                                    <label htmlFor="email" className="sr-only">Email address</label>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div className='relative'>
                                    <ErrorMessage name="password" component="div" className="text-red-600 bg-white px-2 absolute -top-2.5 right-6 z-30" />
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className='relative'>
                                    <ErrorMessage name="repassword" component="div" className="text-red-600 bg-white px-2 absolute -top-2.5 right-6 z-30" />
                                    <label htmlFor="repassword" className="sr-only">Confirm Password</label>
                                    <Field
                                        id="repassword"
                                        name="repassword"
                                        type="password"
                                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-b-md"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex felx-col items-center">
                                    {/* <ErrorMessage name="rememberMe" component="div" className="text-red-600 bg-white px-2 absolute -top-2.5 right-6 z-30" /> */}
                                    <Field
                                        id="rememberMe"
                                        name="rememberMe"
                                        type="checkbox"
                                        required
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                {/* <div className="text-sm">
                                    <a aria-disabled className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div> */}
                            </div>

                            <div>
                                {isSubmitting ? 
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 cursor-wait"
                                        disabled
                                    >
                                        Submitting...
                                    </button> :
                                        <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        disabled={isSubmitting}
                                    >
                                        Sign Up
                                    </button>
                                }
                            </div>
                            <div className="text-sm">
                                <a onClick={()=>ToggleLogin()} aria-disabled className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                                    Clik here for Sign up
                                </a>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Register;
