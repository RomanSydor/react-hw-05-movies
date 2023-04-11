import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/TMDB-api";
import s from "./Review.module.css";

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    tmdbApi
      .getMovieReview(movieId)
      .then((result) => setReviews(result.results));
  }, [movieId]);

  return (
    <>
      <p className={s.title}>Review</p>
      <div>
        {reviews &&
          reviews.map((review) => (
            <div key={review.id}>
              <p className={s.name}>{review.author}</p>
              <p>Content: {review.content}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Review;
