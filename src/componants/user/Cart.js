// CartPage.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaMoneyBillWave, FaRupeeSign } from 'react-icons/fa';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'; // Importing icons from react-icons

const CartPage = () => {
    const [load, setLoad] = useState(false);
    const userData = JSON.parse(localStorage.getItem('userData'))
    const cart = JSON.parse(localStorage.getItem('cart'))

    const url = process.env.REACT_APP_API_URL;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = cart.map((n) => n.product_id );
                const response = await axios.get(`${url}/api/cart/${JSON.stringify(data)}`)
                const add = response.data.map((n) => ({...n, quantity : 1}))
                // console.log(add);
                setProducts(add)
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
        setLoad(false);
    }, [load]);
    
    // console.log(cart);
    // Dummy data for products in the cart
   
    // Calculate total price
    const totalPrice = products.reduce((acc, product) => acc + (product.rate * product.quantity), 0);

    const handleDeleteProduct = (productId) => {
        // Implement delete functionality here
        setProducts(products.filter(product => product.id !== productId));
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        const result = cartData.filter((data) => data.product_id !== productId);
        localStorage.setItem('cart', JSON.stringify(result));
    };

    const handleIncreaseQuantity = (productId) => {
        setProducts(products.map(product => 
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        ));
    };

    const handleDecreaseQuantity = (productId) => {
        setProducts(products.map(product => 
        product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
        ));
    };

    const handleBy = async() => {
        setLoad(true);
        const Submit = products.map((n) => ({...n, 'user_id' : userData.id}))
        try {
            const response = await axios.post(`${url}/api/sales`, Submit);
            localStorage.removeItem('cart')
            console.log(response.data);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <h1 className='font-semibold text-2xl text-gray-500 font-mono'>Fake Product Review Monitoring</h1>
            {products.length > 0 ?
                <div className="container mx-auto pt-20 max-md:pt-14 flex justify-center">
                    <div className='w-1/2 max-md:w-full shadow-lg bg-white px-4 py-4'>
                        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                        <div className="grid grid-cols-1 gap-1">
                            {products.map((product) => (
                            <div key={product.id} className="bg-gray-50 shadow-md rounded-md p-2 flex items-center justify-between">
                                <div className="flex items-center">
                                <img src={`${url}/uploads/${product.image}`} alt={product.name} className="w-auto max-w-28 h-32 object-contain mr-4" />
                                <div>
                                    <h2 className="text-xl font-bold">{product.name}</h2>
                                    <p className="flex items-center justify-center text-gray-600"><FaRupeeSign />{product.rate} each</p>
                                </div>
                                </div>
                                <div className="flex items-center">
                                <button
                                    onClick={() => handleDecreaseQuantity(product.id)}
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    <MdRemoveCircle className="text-xl" />
                                </button>
                                <span className="mx-2">{product.quantity}</span>
                                <button
                                    onClick={() => handleIncreaseQuantity(product.id)}
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    <MdAddCircle className="text-xl" />
                                </button>
                                </div>
                                <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="text-red-500 hover:text-red-700"
                                >
                                <MdDelete className="text-2xl" />
                                </button>
                            </div>
                            ))}
                        </div>
                        <div className="mt-4 bg-gray-100 p-4 rounded-md flex flex-row">
                            <div className='flex items-center justify-center text-xl font-bold w-9/12'>
                                <span>Total : </span>
                                <FaRupeeSign className='text-lg mt-0.5 ml-2' />
                                <span>{totalPrice}</span>
                            </div>
                            <button
                                className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white text-lg max-md:text-lg px-6 py-2 rounded-md focus:outline-none"
                                onClick={()=>handleBy()}
                            >
                                <FaMoneyBillWave className="mr-2" />
                                Buy Now
                            </button>
                        </div>
        
                    </div>
                </div> :
                <div className='flex justify-center items-center text-gray-400 font-bold pt-72 text-2xl'>Cart is Empty</div>
            }
        </>
    );
};

export default CartPage;
