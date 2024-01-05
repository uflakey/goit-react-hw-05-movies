import { useFetchReviews } from 'hooks/useFetchReviews';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { error, loading, reviews } = useFetchReviews();
  return (
    <div>
      {loading && <Loader />}
      {error && <p style={{ color: 'red' }}>Not found{error}</p>}
      {reviews && (
        <div>
          {reviews.length > 0 ? (
            reviews.map(review => (
              <div key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </div>
            ))
          ) : (
            <div>There is no information</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Reviews;