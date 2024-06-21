import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct';
import axios from 'axios';

const Products = () => {
    const url = process.env.REACT_APP_API_URL
    const [data, setData] = useState(false);
    const [box, setBox] = useState(false);

    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/products`);
                console.log(response.data);
                setData(response.data)
            } catch (err) {
                console.log(err);
                setData([
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
     
    const ToggleBox = () =>{
        setBox(!box)
    }
  return (
    <div className={`bg-gray-100 w-full h-screen`}>
        {box && <AddProduct ToggleBox={ToggleBox}/> }
        <button 
            className={`bg-gray-600 rounded-md hover:bg-slate-800 text-white p-2 px-5 mt-32 hover:scale-105 duration-500 ${box ? 'blur -mt-20 z-20' : '' } `}
            onClick={()=>ToggleBox()}            
        >Add New</button>


        <section className={`p-10 max-md:p-0 max-md:pt-24 ${box ? 'blur -mt-20 z-20' : '' }`}>
            <div className="rounded-lg p-1 ">
                <div className="flex flex-wrap gap-3 justify-between">
                    {data && data.map(item => (
                        <div className="w-56 max-md:w-48 max-sm:w-[48%]  bg-white  p-2 max-sm:p-2 h-auto rounded-lg shadow-lg" key={item.id}>
                            <div className="rounded overflow-hidden mb-2">
                                <img 
                                    src={`${url}/uploads/item.image`} 
                                    alt={item.name}
                                    className="h-44 max-sm:h-36 w-full object-cover"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-bold mb-1">{item.name}</label>
                                <div className='flex flex-row justify-between items-center'>
                                    {/* <div className="text-sm text-gray-600"><span className='text-yellow-600 text-2xl'>{item.ra}</span></div> */}
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    </div>
  )
}

export default Products
