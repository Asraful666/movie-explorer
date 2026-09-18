function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.image?.medium}
        alt={movie.name}
      />

      <div className="movie-info">
        <h2>{movie.name}</h2>

        <p>
          ⭐ {movie.rating?.average || "N/A"}
        </p>

        <p>
          📅 {movie.premiered || "Unknown"}
        </p>

        <button>See Details</button>
      </div>
    </div>
  );
}

export default MovieCard;