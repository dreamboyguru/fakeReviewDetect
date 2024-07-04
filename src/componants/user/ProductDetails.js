import React, { useEffect, useState } from 'react'
import ReviewPage from './Review'
import Rating from '../Rating';
import { FaMinus, FaMinusCircle, FaMoneyBillWave, FaPlus, FaPlusCircle, FaRupeeSign, FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';
import { json } from 'react-router-dom';

const ProductDetails = ({data, modelShow}) => {
    // localStorage.removeItem('cart')
    const [added, setAdded] = useState(false);
    const userData = JSON.parse(localStorage.getItem('userData'))

    useEffect(() => {
        let cart = (JSON.parse(localStorage.getItem('cart'))) || [];
        const temp = cart.find((item)=> item.product_id === data.id && item.user_id === userData.id)
        if (temp !== undefined){
            setAdded(true)
        }
    }, [userData, added])
    // const [quantity, setQuantity] = useState(1);

    // const increment = () => {
    //     setQuantity(quantity + 1);
    // };

    // const decrement = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1);
    //     }
    // };



    const url = process.env.REACT_APP_API_URL
    // console.log(added);

    const avgToggle = (rates) => {
        if (rates === null) return 0
        const ratings = rates.split(',').map(n => parseFloat(n.trim())); // Convert comma-separated string to array of floats
        const total = ratings.reduce((acc, curr) => acc + curr, 0); // Calculate total sum of ratings
        const average = total / ratings.length; // Calculate average rating
    
        // console.log(average); // Log the average rating (optional)
    
        return average; // Return the average rating if needed
    };
    const handleAddCart = (data) => {
        const product_id = data.id;
        const user_id = userData.id;
        try{
            let cart = (JSON.parse(localStorage.getItem('cart'))) || [];
            const res = cart.find((n)=> (n.product_id === product_id && n.user_id === user_id) ? true : false)
            
            if (res === undefined) {
                cart = [...cart, { product_id, user_id }];
                // console.log(cart);
                localStorage.setItem('cart', JSON.stringify(cart));
                setAdded(true)
                alert('Product added to cart')
            }
            // localStorage.removeItem('cart')
            // console.log(response.data);
        } catch(err) {
            console.log(err);
        }
    }
    const handleByCart = (data) => {
        console.log(data);
    }
  return (
    <div className="inset-0 flex justify-center bg-gray-950 bg-opacity-50 z-40 fixed">
            <div className="relative bg-white rounded-lg p-8 max-md:p-1 w-2/3 max-md:w-full max-md:mx-1 my-5 max-md:h-screen max-md:overflow-y-auto">
                <div className='absolute text-2xl right-4 top-1 hover:scale-110 text-red-600 cursor-pointer'
                    onClick={modelShow}
                >X</div>
                <h2 className="text-xl max-md:text-lg font-bold mb-4">Details of the Product</h2>
                    <div className='flex flex-row max-md:flex-col space-x-4 max-md:space-x-1 mb-5 scroll-smooth max-md:text-sm border-2'>
                        <div className='w-1/2 max-md:w-full h-auto flex items-center justify-center pl-16 max-md:pl-0'>
                            <img src={`${url}/uploads/${data.image}`} className='w-2/3 max-md:w-auto max-md:px-14 h-68'></img>
                        </div>
                        <div className='w-1/2 max-md:w-full flex flex-col justify-between h-64 text-left max-md:space-y-2 max-md:mt-1 mb-2'>
                            <label><span className='font-semibold'>Name : </span>{data.name}</label>
                            <span className=' flex flex-row'>
                                <span className='font-semibold'>Rating : </span>
                                <span className='flex justify-center w-1/2 text-yellow-600'><Rating value={avgToggle(data.rating) || 0} /></span> 
                            </span>
                            <label><span className='font-semibold'>Total Reviews : </span>{data.rating !== null ? data.rating.split(',').length : 0}</label>
                            <label><span className='font-semibold'>Brand : </span>{data?.type}</label>
                            <label><span className='font-semibold'>Price : <FaRupeeSign className="inline-block -mt-1"/></span>{data?.rate}</label>
                            <label><span className='font-semibold'>Description : </span>{data?.description}</label>
                            
                            
                            <div className="flex flex-col items-center w-full">
                                {/* <div className="flex items-center justify-center w-1/2 max-md:w-full ml-8 max-md:-ml-5 mb-4">
                                    <div className="flex items-center justify-between border border-gray-300 p-2 rounded-md h-14 max-md:h-auto">
                                        <button
                                            className="bg-gray-400 hover:bg-gray-600 hover:text-white text-black text-2xl px-6 max-md:px-4 py-1 max-md:py-0 flex items-center rounded-md focus:outline-none"
                                            onClick={decrement}
                                            disabled={quantity <= 1}
                                        >
                                            <FaMinusCircle />
                                        </button>
                                        <input
                                            type="text"
                                            className="text-center w-12 mx-2 border-none focus:outline-none"
                                            value={quantity}
                                            readOnly
                                        />
                                        <button
                                            className="bg-gray-400 hover:bg-gray-600 hover:text-white text-black text-2xl px-6 max-md:px-4 py-1 max-md:py-0 flex items-center rounded-md focus:outline-none"
                                            onClick={increment}
                                        >
                                            <FaPlusCircle />
                                        </button>
                                    </div>
                                </div> */}
                                <div className="flex items-center justify-start w-full space-x-4">
                                    <button
                                    className={`flex items-center justify-center ${added ? 'bg-blue-400 cursor-wait px-3' : 'bg-blue-500 hover:bg-blue-700 px-6'} text-white text-lg max-md:text-lg py-2 rounded-md focus:outline-none`}
                                    disabled = {added}
                                    onClick={()=>handleAddCart(data)}
                                    >
                                    <FaShoppingCart className="mr-2" />
                                    {added ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                    {/* <button
                                    className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white text-lg max-md:text-lg px-6 py-2 rounded-md focus:outline-none"
                                    onClick={()=>handleByCart(data)}
                                    >
                                    <FaMoneyBillWave className="mr-2" />
                                    Buy Now
                                    </button> */}
                                </div>
                            </div>
                            {/* <h1><span className='font-semibold'>Product Details : </span><span>In marketing, a product is an object, or system, or service made available for consumer use as of the consumer demand; it is anything that can be offered to a market to satisfy the desire or need of a customer.</span></h1> */}
                        </div>
                    </div>
                    <div className='border-2 h-80 overflow-y-auto mt-6 max-md:mt-1'>
                        <ReviewPage value={data}/>
                    </div>
            </div>
        </div>
  )
}

export default ProductDetails
