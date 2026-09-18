function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={
            movie.image?.original ||
            movie.image?.medium
          }
          alt={movie.name}
        />

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

        <div
          dangerouslySetInnerHTML={{
            __html:
              movie.summary ||
              "<p>No summary available.</p>",
          }}
        />

        <button
          onClick={onClose}
          className="modal-close-button"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MovieModal;