import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

// Sample review data
// const reviews = [
//     { productId: '1', ipAddress: '192.168.0.1', reviewDetails: 'Great product!' },
//     { productId: '2', ipAddress: '192.168.0.2', reviewDetails: 'Not bad.' },
//     { productId: '3', ipAddress: '192.168.0.1', reviewDetails: 'Loved it!' },
//     { productId: '4', ipAddress: '192.168.0.3', reviewDetails: 'Could be better.' },
//     { productId: '5', ipAddress: '192.168.0.2', reviewDetails: 'Terrible experience.' }
// ];

const Reviews = ({ReviewsToggleBox}) => {
    const url = process.env.REACT_APP_API_URL;
    const [fakeReviews, setFakeReviews] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/fake/reviews`);
                console.log(response.data);
                setFakeReviews(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
        setLoad(false);
    }, [load])

    const vagRatingCalculate = (rates) => {
        let total = 0;
        rates.split(',').map((n)=> {total += parseFloat(n)})
        return (total/rates.split(',').length).toFixed(1)
    }

    // Function to delete multiple resources by IDs
    async function deleteMultipleResources(ids) {
        setLoad(true)
        let idsArray = ids.split(',');
        let numArray = idsArray.map(numStr => parseInt(numStr));

        try {
            // Create an array of delete requests
            const deletePromises = numArray.map(id => axios.delete(`${url}/api/fake/reviews/${id}`));
            
            // Wait for all delete requests to complete
            const responses = await Promise.all(deletePromises);

            // Handle successful responses
            responses.forEach(response => {
                console.log(`Deleted: ${response.config.url} - Status: ${response.status}`);
            });

        } catch (error) {
            // Handle errors
            if (error.response) {
                console.error(`Error deleting ${error.response.config.url}: ${error.response.status} - ${error.response.statusText}`);
            } else {
                console.error(`Error: ${error.message}`);
            }
        }
    }

    return (
        <div className="flex justify-center items-center">                       
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-y-auto z-40">
                <div className="bg-white rounded-lg p-6 w-full mx-52 max-md:mx-2 min-h-96 shadow-lg">
                    <div className='relative'>
                        <div className='absolute -top-5 -right-2 text-2xl text-red-600 z-50 cursor-pointer hover:scale-110'
                            onClick={ReviewsToggleBox}
                        >X</div>
                    </div>
                    <h2 className="text-xl font-bold mb-4">Fake Reviews</h2>
                    {fakeReviews.length > 0 ? (
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Total</th>
                                    <th className="py-2 px-4 border-b">IP Address</th>
                                    <th className="py-2 px-4 border-b">Avg rating</th>
                                    <th className="py-2 px-4 border-b">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fakeReviews.map((review, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b">{review.total}</td>
                                        <td className="py-2 px-4 border-b">{review.user_IP_adress}</td>
                                        <td className="py-2 px-4 border-b">{vagRatingCalculate(review.ratings)}</td>
                                        <td className="py-2 px-4 border-b text-red-600 cursor-pointer hover:text-red-700 hover:scale-110"
                                            onClick={()=>deleteMultipleResources(review.ids)}>Delete</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-600">No fake reviews detected.</p>
                    )}
                    
                </div>
            </div>            
        </div>
    );
};

export default Reviews;
