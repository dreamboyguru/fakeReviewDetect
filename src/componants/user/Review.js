import React, { useState } from 'react';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleChange = (event) => {
        setNewReview(event.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newReview.trim() !== '') {
            const reviewObject = {
                review: newReview,
                rating: rating
            };
            setReviews([...reviews, reviewObject]);
            setNewReview('');
            setRating(0);
        }
    };

    return (
        <div className="container mx-auto px-4 py-2">
            <h1 className="text-2xl font-bold mb-4 fixed ml-96">Reviews</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex items-center mt-10">
                    <label className="mr-4">Rating:</label>
                    {/* <Rating
                        rating={rating}
                        onRatingChange={handleRatingChange}
                    /> */}
                    <span className='text-yellow-600 text-2xl'>*****</span>
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
                                <p>{review.review}</p>
                                <p>Rating: {review.rating}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ReviewPage;
