import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRupeeSign } from 'react-icons/fa';

const SalesTable = () => {
    // const [load, setLoad] = useState(false);
    const url = process.env.REACT_APP_API_URL;
    const [salesData, setSalesData] = useState();
    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/admin/sales`);
                console.log(response.data);
                setSalesData(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
        // setLoad(false)
    }, [])
    return (
        <>
            {salesData?.length ? 
            <div className="container mx-auto pt-24 min-h-screen w-2/3 max-md:w-full">
                <div className='px-4 pb-4 bg-white rounded-md shadow-lg'>
                    <h1 className="text-3xl font-bold mb-1 text-center text-gray-800">Product Sales</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <tbody>
                            {salesData && salesData.map((sale, index) => (
                                <tr
                                key={index}
                                className={`border-b text-left border-gray-200 hover:bg-gray-100 ${
                                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                }`}
                                >
                                <td className="w-1/6 p-0 text-gray-700 border-2">
                                    <div className="h-full w-full overflow-hidden">
                                    <img src={`${url}/uploads/${sale.image}`} alt={sale.name} className="w-full h-full object-cover" />
                                    </div>
                                </td>
                                <td className="w-1/3 py-2 px-6 max-md:px-2 text-md max-md:text-xs text-gray-700 items-stretch space-y-2 border-2">
                                    <div>
                                    <label className="font-semibold">Product : </label>
                                    <span>{sale.product_name}</span>
                                    </div>
                                    <div>
                                    <label className="font-semibold">Price : </label>
                                    <span><FaRupeeSign className="inline-block -mt-1"/>{(sale.rate).toFixed(2)}</span>
                                    </div> 
                                    <div>
                                    <label className="font-semibold">Quantity : </label>
                                    <span>{sale.quantity}</span>
                                    </div>
                                    <div>
                                    <label className="font-bold text-lg max-sm:text-sm">Total : </label>
                                    <span className='font-bold text-lg max-sm:text-sm'><FaRupeeSign className="inline-block -mt-1"/>{(sale.rate * sale.quantity).toFixed(2)}</span>
                                    </div>                        
                                </td>      
                                <td className="w-1/3 py-4 px-6 max-md:px-1 text-md max-md:text-xs text-gray-700 items-stretch space-y-2 border-2">
                                    <h2 className='font-bold text-lg max-md:text-sm'>Purchase person details :</h2>
                                    <div>
                                    <label className="font-semibold">Name: </label>
                                    <span>{sale.name}</span>
                                    </div>
                                    <div>
                                    <label className="font-semibold">Phone: </label>
                                    <span>{sale.phone}</span>
                                    </div>
                                    <div>
                                    <label className="font-semibold">Email: </label>
                                    <span>{sale.email}</span>
                                    </div>
                                </td>          
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> :
            <div className='absolute top-80 left-1/2 -ml-32 max-md:-ml-24 text-2xl text-gray-400 font-bold'>
                No Products Sales
            </div>
            }
        </>      
    );
};

export default SalesTable;
