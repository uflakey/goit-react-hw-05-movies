import { useFetchCast } from 'hooks/useFetchCast';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { error, loading, cast } = useFetchCast();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {loading && <Loader />}
      {error && <p style={{ color: 'red' }}>Not found{error}</p>}
      {cast && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {cast.length > 0 ? (
            cast.map(item => (
              <div key={item.id}>
                <h2>{item.name}</h2>
                <p>Character: {item.character}</p>
                <img
                  src={
                    item.profile_path
                      ? [`https://image.tmdb.org/t/p/w500${item.profile_path}`]
                      : defaultImg
                  }
                  alt={item.name}
                  width={250}
                  height={375}
                />
              </div>
            ))
          ) : (
            <div>No information available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cast;