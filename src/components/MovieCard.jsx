function MovieCard({ movie, onDetails }) {
  return (
    <div className="movie-card">
      <img
        src={
          movie.image?.medium ||
          "https://via.placeholder.com/300x400?text=No+Image"
        }
        alt={movie.name}
      />

      <div className="movie-info">
        <h2>{movie.name}</h2>

        <p>
          ⭐ Rating:{" "}
          {movie.rating?.average || "N/A"}
        </p>

        <p>
          📅 Released:{" "}
          {movie.premiered || "Unknown"}
        </p>

        <p>
          🎭 Genre:{" "}
          {movie.genres?.length
            ? movie.genres.join(", ")
            : "N/A"}
        </p>

        <button onClick={onDetails}>
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;