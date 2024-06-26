import React, { useEffect, useState } from 'react';
import Rating from '../Rating';
import axios from 'axios';

const ReviewPage = (data) => {
    const url = process.env.REACT_APP_API_URL;
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(0);
    const [load, setLoad] = useState(false);
    const [ip, setIp] = useState('');

    useEffect(() => {
        axios.get('https://api.ipify.org?format=json')
          .then(response => {
            setIp(response.data.ip);
          })
          .catch(error => {
            console.error("There was an error fetching the IP address!", error);
          });
      }, []);


    const handleChange = (event) => {
        setNewReview(event.target.value);
    };

    const handleRatingChange = (newRating) => {
        if (newRating > 5) {
            setRating(5)
        } else if (newRating < 0) {
            setRating(0)
        } else {
            setRating(newRating);
        }
        
    };

    const handleSubmit = async (event) => {
        setLoad(true);
        event.preventDefault();
        if (newReview.trim() !== '') {
            const reviewObject = {
                id : data.value.id,
                review: newReview,
                rating: parseFloat(rating),
                ip : ip
            };
    
            try {
                await axios.post(`${url}/api/rating`, reviewObject)                
                setNewReview('');
                setRating(0);
                localStorage.setItem('addReview', true)
                alert('Your review added.')
            } catch (error) {
                console.error("Error submitting review:", error);
            }
        }
        setLoad(false);
    };

    useEffect(()=>{
        const fetchData = async() => {
            try {
                const response = await axios.get(`${url}/api/reviws/${data.value.id}`)
                setReviews(response.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [load])
    

    return (
        <div className="container mx-auto px-4 max-md:px-2 py-2">
            <h1 className="text-2xl font-bold mb-4 fixed ml-96 max-md:ml-32 max-md:-mt-40">Reviews</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex items-center mt-10 max-md:mt-8">
                    <label className="mr-4 mb-4 max-md:w-1/2">Rating :</label>
                    {/* <Rating
                        rating={rating}
                        onRatingChange={handleRatingChange}
                    /> */}
                    <span className='text-yellow-600 text-2xl'>
                        <input
                            type='number'
                            step="0.1"
                            min="0"
                            max="5"
                            className='mb-4 w-full'
                            value={rating}
                            onChange={(e)=>handleRatingChange(e.target.value)}
                        />
                    </span>
                    <span className='ml-10 mb-4'><Rating value={rating} /></span>
                </div>
                <textarea
                    value={newReview}
                    onChange={handleChange}
                    className="w-full h-24 p-2 border border-gray-300 rounded"
                    placeholder="Write your review..."
                ></textarea>
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2 hover:bg-blue-700">
                    Add Review
                </button>
            </form>
            <div>
                {reviews.length === 0 ? (
                    <p className="text-gray-600">No reviews yet.</p>
                ) : (
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index} className="bg-gray-100 p-4 mb-2 rounded">                                
                                <div className='w-1/4 mb-2'><p><Rating value={review.rating} /></p></div>
                                <p className='flex justify-start'>{review.details}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ReviewPage;
