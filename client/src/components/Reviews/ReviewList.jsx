import React, { useEffect } from 'react';
import { useState } from 'react';
import reviewService from '../../services/reviewService';
import ReviewCard from './ReviewCard';

const ReviewList = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await reviewService.getReviews(); // Adjust based on actual API
      setReviews(fetchedReviews.filter(review => review.movieId === movieId));
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div className="review-list">
      {reviews.length > 0 ? (
        reviews.map((review) => <ReviewCard key={review._id} review={review} />)
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default ReviewList;
