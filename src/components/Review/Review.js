import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/TMDB-api";

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    tmdbApi
      .getMovieReview(movieId)
      .then((result) => setReviews(result.results));
  }, [movieId]);

  return (
    <div>
      {reviews &&
        reviews.map((review) => (
          <div key={review.id}>
            <p>{review.author}</p>
            <p>Content: {review.content}</p>
          </div>
        ))}
    </div>
  );
};

export default Review;
