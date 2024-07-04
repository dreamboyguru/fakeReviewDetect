import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import axios from 'axios';
import Rating from '../Rating';
import Dropdown from '../Dropdown';

const Product = () => {
    const addReview = localStorage.getItem('addReview') || false;
    const url = process.env.REACT_APP_API_URL
    const [productDetailsBox, setProductDetailsBox] = useState(false);
    const [productData, setProductData] = useState()
    const [data, setData] = useState('')
    const [selectedValue, setSelectedValue] = useState('');
    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/products`);
                console.log(response.data);
                setProductData(response.data)
            } catch (err) {
                console.log(err);
                // setProductData([
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '4.7' },
                //     { id: 2, name: 'test2', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '2' },
                //     { id: 3, name: 'Heaven3', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '4' },
                //     { id: 4, name: 'test4', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '4.7' },
                //     { id: 5, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '2.4' },
                //     { id: 6, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '4.7' },
                //     { id: 7, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '4.7' },
                //     { id: 8, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '4.7' },
                //     { id: 9, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '4.7' },
                //     { id: 10, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '4.7' },
                //     { id: 11, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '4.7' },
                //     { id: 12, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rating: '4.7' }
                // ])
            }
        }
        fetchData();
        localStorage.setItem('addReview', false)
      }, [addReview]);

    const productDetailsShow = (Arra_data) => {
        setData(Arra_data)
        setProductDetailsBox(true);
    }
    const modelShow = () => {
        setProductDetailsBox(false);
    }
    const avgToggle = (rates) => {
        if (rates === null) return 0
        const ratings = rates.split(',').map(n => parseFloat(n.trim())); // Convert comma-separated string to array of floats
        const total = ratings.reduce((acc, curr) => acc + curr, 0); // Calculate total sum of ratings
        const average = total / ratings.length; // Calculate average rating
    
        // console.log(average); // Log the average rating (optional)
    
        return average; // Return the average rating if needed
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const options = [
        { value: '', label: 'All' },
        { value: 'xiaomi', label: 'Xiaomi' },
        { value: 'sumsung', label: 'Sumsung' },
        { value: 'oppo', label: 'Oppo' },
        { value: 'onePlus', label: 'OnePlus' },
        { value: 'realme', label: 'Realme' },
        { value: 'vivo', label: 'Vivo' },
        { value: 'apple', label: 'Apple' },
        { value: 'nokia', label: 'Nokia' },
        { value: 'motorola', label: 'Motorola' },
    ];  

    return (
        <>
            <h1 className='font-semibold text-2xl text-gray-500 font-mono'>Fake Prodcut Detection</h1>
            { productData ? 
                <section className="py-14 pl-16 pt-28 max-md:p-0 max-md:pt-28 h-auto min-h-screen border-none">
                    {productDetailsBox && <ProductDetails modelShow={modelShow} data={data}/> }
                    <div className={`rounded-lg p-1 ${productDetailsBox ? 'blur' : ''}`}>
                        <div className="flex flex-wrap gap-2 justify-left">
                            <div className='absolute top-24 max-md:top-16 left-1/3 ml-40 max-md:-ml-10'>
                                <Dropdown name='abc' selectedValue={selectedValue} handleChange={handleChange} options={options} />
                            </div>
                            {productData && productData.map(item => (
                                (item.type === selectedValue || selectedValue === '') && 
                                <div 
                                    onClick={()=>productDetailsShow(item)} 
                                    className="w-56 max-md:w-48 max-sm:w-[48%] max-md:ml-0.5  bg-white  p-2 max-sm:p-2 h-auto rounded-lg shadow-lg" key={item.id}>
                                    <div className="rounded overflow-hidden mb-2">
                                        <img 
                                            src={`${url}/uploads/${item.image}`} 
                                            alt={item.name}
                                            className="h-44 max-sm:h-36 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-lg font-bold mb-1">{item.name}</label>
                                        <div className='flex flex-row justify-between items-center'>
                                            <div className="text-gray-600 w-24">
                                                <span className='text-yellow-600'>
                                                    <Rating value={avgToggle(item.rating)} />
                                                </span>

                                            </div>
                                            <span
                                                className="text-blue-500 hover:cursor-pointer hover:underline"
                                            >Details</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> :
                <div className="h-screen flex justify-center items-center">
                    <div className="text-center text-gray-500 text-xl">
                        No Product Detected
                    </div>
                </div>
            }
        </>
    );
};

export default Product;
