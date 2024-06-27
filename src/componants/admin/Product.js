import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct';
import axios from 'axios';
import Reviews from './Reviews';

const Products = () => {
    localStorage.setItem('admin', true);
    const url = process.env.REACT_APP_API_URL
    const [data, setData] = useState(false);
    const [box, setBox] = useState(false);
    // const [reviewsBox, setReviewsBox] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/products`);
                console.log(response.data);
                setData(response.data)
            } catch (err) {
                console.log(err);
                // setData([
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '4.7' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                //     { id: 1, name: 'Heaven', image: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp', rate: '*****' },
                // ])
            }
        }
        fetchData();
        setLoad(false);
    }, [load]);

    const handleDelete = (id) => {
        let userResponse = window.confirm("Are you sure you want to delete this item?");
        if (userResponse) {
            axios.delete(`${url}/api/products/${id}`)
                .then(response => {
                    console.log(response.data);
                    setLoad(true);
                })
                .catch(err => console.log(err))
        } else {
            console.log("Delete canceled.");
        }
        
    }

    const ToggleBox = () =>{
        setBox(!box)
    }
    // const ReviewsToggleBox = () => {
    //     setReviewsBox(!reviewsBox);
    // }
  return (
    <div className={`bg-gray-100 w-full h-auto min-h-screen`}>
        {box && <AddProduct ToggleBox={ToggleBox}/> }
        {/* {reviewsBox && <Reviews ReviewsToggleBox={ReviewsToggleBox} /> } */}
        <button 
            className={`bg-gray-600 rounded-md hover:bg-slate-800 text-white p-2 px-5 mt-28 max-md:mt-24 hover:scale-105 duration-500 ${box ? 'blur -mt-20 z-20' : '' } -ml-24 max-md:-ml-12 fixed`}
            onClick={()=>ToggleBox()}            
        >Add New</button>
        {/* <button 
            className={`bg-gray-600 rounded-md hover:bg-slate-800 text-white p-2 px-5 mt-28 max-md:mt-24 hover:scale-105 duration-500 ${box ? 'blur -mt-20 z-20' : '' } fixed`}
            onClick={()=>ReviewsToggleBox()}            
        >Reviews</button> */}

        {data ? 
            <section className={`py-10 pl-12 pt-40 max-md:p-0 max-md:pt-36 ${box ? 'blur -mt-20 z-20' : '' }`}>
                <div className="rounded-lg p-1 ">
                    <div className="flex flex-wrap gap-4 justify-left">
                        {data && data.map(item => (
                            <div className="w-56 max-md:w-48 max-sm:w-[48%]  bg-white  p-2 max-sm:p-2 h-auto rounded-lg shadow-lg" key={item.id}>
                                <div className='relative'>
                                    <div 
                                        className='absolute text-2xl text-red-600 -right-1.5 -top-4 hover:cursor-pointer hover:scale-110 transform duration-500'
                                        onClick={()=>handleDelete(item.id)}
                                    >X</div>
                                </div>
                                <div className='bg-gray-300 rounded-t-md p-2'>
                                    <label className="block text-lg font-bold">{item.name}</label>
                                    <div className='flex flex-row justify-between items-center'>                                  
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-b-md">
                                    <img 
                                        src={`${url}/uploads/${item.image}`} 
                                        alt={item.name}
                                        className="h-52 max-sm:h-36 w-full object-cove"
                                    />
                                </div>                            
                                {/* <div>
                                    <button type='submit' className='w-full p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-b-md'>Edit</button>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section> :
            <div className='absolute top-80 left-1/2 -ml-24 max-md:-ml-16 text-2xl text-gray-400 font-bold'>
                No Products
            </div>
        }

    </div>
  )
}

export default Products
