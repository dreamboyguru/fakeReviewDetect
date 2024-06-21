import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import axios from 'axios';

const Product = () => {
    const url = process.env.REACT_APP_API_URL
    const [productDetailsBox, setProductDetailsBox] = useState(false);
    const [productData, setProductData] = useState([])
    const [data, setData] = useState('')
    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/products`);
                console.log(response.data);
                setProductData(response.data)
            } catch (err) {
                console.log(err);
                setProductData([
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '4.7' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                    { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                ])
            }
        }
        fetchData();
      }, []);

    const productDetailsShow = (Arra_data) => {
        setData(Arra_data)
        setProductDetailsBox(true);
    }
    const modelShow = () => {
        setProductDetailsBox(false);
    }

    return (
        <section className="p-10 pt-28 max-md:p-0 max-md:pt-24">
            {productDetailsBox && <ProductDetails modelShow={modelShow} data={data}/> }
            <div className="rounded-lg p-1 ">
                <div className="flex flex-wrap gap-3 justify-between">
                    {productData && productData.map(item => (
                        <div className="w-56 max-md:w-48 max-sm:w-[48%]  bg-white  p-2 max-sm:p-2 h-auto rounded-lg shadow-lg" key={item.id}>
                            <div className="rounded overflow-hidden mb-2">
                                <img 
                                    src={`${url}/uploads/${item.image}`} 
                                    alt={item.name}
                                    className="h-44 max-sm:h-36 w-full object-cover"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-bold mb-1">{item.name}</label>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className="text-sm text-gray-600"><span className='text-yellow-600 text-2xl'>{4.5}</span></div>
                                    <span onClick={()=>productDetailsShow(item)} className="text-blue-500 hover:underline">Details</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;
