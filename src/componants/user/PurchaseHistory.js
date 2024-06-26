import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PurchaseHistory = () => {
    const [purchases, setPurchases] = useState([]);
    const url = process.env.REACT_APP_API_URL;
    const userData = JSON.parse(localStorage.getItem('userData'));
    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/sales/${userData.id}`);
                console.log(response.data)
                setPurchases(response.data)
            } catch (err) {
                console.log(err);
            }
        } 
        fetchData()
    }, [])

  const calculateTotal = (price, quantity) => {
    return price * quantity;
  };

  return (
    <div className="w-[90%] max-md:w-[98%] mx-20 max-md:mx-1 pt-28 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {purchases.map((purchase) => (
        <div key={purchase.id} className="bg-white flex flex-row shadow-md rounded-md overflow-hidden p-2">
          <div className='w-1/2 h-52 border-r-2'>
            <img src={`${url}/uploads/${purchase.image}`} className='h-full w-full'/>
          </div>
          <div className='w-1/2 text-gray-800 pl-3'>
            <div className='flex flex-col justify-between items-stretch h-full p-4'>
              <p className="text-lg text-left font-semibold">Name: <span className='font-normal text-gray-600'>{purchase.name}</span></p>
              <p className="text-lg text-left font-semibold">Type: <span className='font-normal text-gray-600'>{purchase.type}</span></p>
              <p className="text-lg text-left font-semibold">Quantity: <span className='font-normal text-gray-600'>{purchase.quantity}</span></p>
              <p className="text-lg text-left font-semibold">Price: <span className='font-normal text-gray-600'>{purchase.rate}</span></p>
              <p className="text-2xl text-gray-800 font-bold mt-4">Total: {calculateTotal(purchase.quantity, purchase.rate)}</p>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default PurchaseHistory;
